import dotenv from "dotenv";
import { z } from "zod";

// Load the correct .env file
const APP_STAGE = process.env.APP_STAGE || "dev";

const isProduction = APP_STAGE === "production";
const isDevelopment = APP_STAGE === "dev";
const isTest = APP_STAGE === "test";

if (isDevelopment) {
  dotenv.config({ path: ".env" });
} else if (isTest) {
  dotenv.config({ path: ".env.test" });
} else if (isProduction) {
  dotenv.config({ path: ".env.production" });
}

// Define the schema
const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),

  APP_STAGE: z
    .enum(["dev", "test", "production"])
    .default("dev"),

  PORT: z.coerce.number().positive().default(3000),

  DATABASE_URL: z
    .string()
    .startsWith("postgresql://"),

  JWT_SECRET: z
    .string()
    .min(32, "Must be at least 32 characters long"),

  JWT_EXPIRES_IN: z
    .string()
    .default("7d"),

  BCRYPT_ROUNDS: z.coerce
    .number()
    .min(10)
    .max(20)
    .default(12),
});

export type Env = z.infer<typeof envSchema>;

let env: Env;

try {
  env = envSchema.parse(process.env);
} catch (e) {
  if (e instanceof z.ZodError) {
    console.error("Invalid environment variables\n");

    console.error(
      JSON.stringify(e.flatten().fieldErrors, null, 2)
    );

    e.issues.forEach((err:any) => {
      const path = err.path.join(".");
      console.error(`${path}: ${err.message}`);
    });

    process.exit(1);
  }

  throw e;
}

// Helper functions
export const isProd = () => env.APP_STAGE === "production";
export const isDev = () => env.APP_STAGE === "dev";
export const isTesting = () => env.APP_STAGE === "test";

// Export validated env
export { env };
export default env;
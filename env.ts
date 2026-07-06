import dotenv from "dotenv";
import { z } from "zod";

const APP_STAGE = process.env.APP_STAGE || "dev";

const isProduction = APP_STAGE === "production";
const isDevelopment = APP_STAGE === "dev";
const isTest = APP_STAGE === "test";

if (isDevelopment) {
  dotenv.config({
    path: ".env",
  });
} else if (isTest) {
  dotenv.config({
    path: ".env.test",
  });
} else if (isProduction) {
  dotenv.config({
    path: ".env.production",
  });
}

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),

  APP_STAGE: z
    .enum(["dev", "test", "production"])
    .default("dev"),

  PORT: z.coerce.number().positive().default(3000),

  DATABASE_URL: z.string().startsWith("postgresql://"),

  JWT_SECRET: z
    .string()
    .min(32, "Must be 32 chars long"),

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
import { env as loadEnv } from "custom-env";
import { z } from "zod";
import { process } from "zod/v4/core";

process.env.APP_STAGE = process.env.APP_STAGE || "dev";

const isProduction = process.env.APP_STAGE === "production";
const isDevelopment = process.env.APP_STAGE === "dev";
const isTest = process.env.APP_STAGE === "test";

if (isDevelopment) {
  loadEnv();
} else if (isTest) {
  loadEnv("test");
}
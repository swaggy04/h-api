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
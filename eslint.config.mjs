import nextConfig from "eslint-config-next/core-web-vitals"
import { defineConfig } from "eslint/config"

export default defineConfig([
  ...nextConfig,
  {
    files: ["app/**/*.tsx", "lib/**/*.ts", "components/**/*.tsx"],
    rules: {
      "no-duplicate-imports": "error",
      "no-unused-vars": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-unused-expressions": "warn",
      "max-lines": ["error", { max: 200 }],
      "max-params": ["error", { max: 5 }],
    },
  },
])

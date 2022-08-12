import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/node_modules", "**/dist", ".git" ],
    passWithNoTests: true,
    coverage: {
      enabled: true,
      all: true,
      reporter: ["text", "lcov", "cobertura"],
      include: ["src"],
      exclude: [
        "**/*.{interface,type,d}.ts",
        "**/index.{js,ts}",
      ],
    },
  },
});

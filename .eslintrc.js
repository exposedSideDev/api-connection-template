module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json", "./tsconfig.dev.json"],
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
    "eslintrc.js",
  ],
  plugins: ["@typescript-eslint", "import"],
  rules: {
    quotes: ["error", "double"],
    "no-tabs": 0,
    semi: ["error", "never"],
    "max-len": ["error", { code: 120 }],
    "arrow-parens": "off",
    "object-curly-spacing": ["error", "always"],
    "new-cap": "off",
    "no-explicit-any": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
}

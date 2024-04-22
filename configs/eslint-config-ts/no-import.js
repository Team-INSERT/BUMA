module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["jsdoc", "@typescript-eslint"],
  extends: [
    "@buma/eslint-config-js/no-import",
    "plugin:jsdoc/recommended-typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "@typescript-eslint/no-empty-function": ["off"],
    "@typescript-eslint/no-unused-vars": "error",
  },
};

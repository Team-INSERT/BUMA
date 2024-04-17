/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ["@buma/eslint-config"],
  ignorePatterns: ["dist", "coverage"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "tsconfig.json",
  },
};

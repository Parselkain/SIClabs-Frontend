import js from "@eslint/js";
import globals from "globals";
import parser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import tseslint from "typescript-eslint";
import jestPlugin from "eslint-plugin-jest";

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  jestPlugin.configs["flat/recommended"],
  {
    files: ["src/**/*.{ts,tsx,cts,mts}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        process: "readable",
      },
      parser: parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      ["prettier"]: prettierPlugin,
      ["@typescript-eslint"]: tseslint.plugin,
      ["react"]: reactPlugin,
      ["jest"]: jestPlugin,
    },
    rules: {
      quotes: 2,
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
      "no-shadow": "off",
      "no-console": "error",
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      ...jestPlugin.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];

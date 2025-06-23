const typescript = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const playwright = require('eslint-plugin-playwright');

module.exports = [
  {
    files: ['**/*.ts'],
    plugins: {
      '@typescript-eslint': typescript,
      playwright: playwright,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...playwright.configs['flat/recommended'].rules,
      'no-console': 'warn',
    },
  },
  {
    ignores: ['node_modules', 'dist', 'test-results', 'playwright-report'],
  },
];

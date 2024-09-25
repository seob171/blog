const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ['@typescript-eslint', 'import'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['node_modules/'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',

    'prefer-const': 'error',
    'sort-imports': [
      'warn',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'property',
        format: ['camelCase'],
      },
    ],
  },
  overrides: [
    {
      files: [',*.ts', ',*.tsx', ',*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
};

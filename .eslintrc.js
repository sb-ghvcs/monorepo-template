const { resolve } = require('node:path');

const { JAVASCRIPT_FILES } = require('@vercel/style-guide/eslint/constants');

const project = resolve(__dirname, 'tsconfig.json');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
  ],
  parserOptions: {
    project: [project],
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: [project],
      },
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    '@typescript-eslint/no-confusing-void-expression': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowAny: false,
        allowBoolean: false,
        allowNullish: false,
        allowRegExp: false,
        allowNever: false,
      },
    ],
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'sort-imports': [
      'warn',
      {
        ignoreDeclarationSort: true,
      },
    ],
  },
  overrides: [
    /**
     * JS files are using @babel/eslint-parser, so typed linting doesn't work there.
     * @see {@link https://github.com/vercel/style-guide/blob/canary/eslint/_base.js}
     * @see {@link https://typescript-eslint.io/linting/typed-linting#how-can-i-disable-type-aware-linting-for-a-subset-of-files}
     */
    {
      files: JAVASCRIPT_FILES,
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
    // Next.js App Router and Prettier will have default export
    {
      files: [
        '*.config.{mjs,ts}',
        '**/src/app/**/{page,layout,not-found}.tsx',
        '**/src/app/**/{sitemap,robots}.ts',
      ],
      rules: {
        'import/no-default-export': 'off',
        // 'import/prefer-default-export': ['error', { target: 'any' }],
      },
    },
    // Module declaration files will have default export
    {
      files: ['**/*.d.ts'],
      rules: { 'import/no-default-export': 'off' },
    },
    // Electron source files will have console statements and any typing
    {
      files: ['main/index.ts', 'main/preload.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    // Scripts for package.json and build scripts
    {
      files: ['scripts/*'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};

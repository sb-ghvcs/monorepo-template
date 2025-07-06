const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['../../.eslintrc.js'],
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      // These files are created by shadcn automatically and should not be linted
      files: [
        'src/components/ui/*.tsx',
        'src/lib/utils.ts',
        'src/hooks/use-mobile.tsx',
      ],
      rules: {
        'import/order': 'off',
        'sort-imports': 'off',
        'no-param-reassign': 'off',
        'no-implicit-coercion': 'off',
        'jsx-a11y/heading-has-content': 'off',
        'react/jsx-sort-props': 'off',
        'react/jsx-no-leaked-render': 'off',
        'react/button-has-type': 'off',
        'react/no-unknown-property': 'off',
        'react/no-unstable-nested-components': 'off',
        'react/function-component-definition': 'off',
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/no-unnecessary-condition': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off',
        '@typescript-eslint/no-unnecessary-template-expression': 'off',
      },
    },
  ],
};

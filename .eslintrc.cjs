/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'next',
    'plugin:tailwindcss/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/typescript',
    'plugin:import/warnings',
    'plugin:import/errors',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: { version: '18.3' },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/require-default-props': 'off',
      },
    },
  ],
  plugins: [
    'react-refresh',
    '@typescript-eslint',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'import/extensions': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'external',
          'builtin',
          'internal',
          'sibling',
          'parent',
          'index',
        ],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
    'import/prefer-default-export': 'off',
    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-a11y/media-has-caption': ['warn', {
      audio: ['Audio'],
      video: ['Video'],
      track: ['Track'],
    }],
    'jsx-quotes': ['error', 'prefer-single'],
    'max-len': 'warn',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react-refresh/only-export-components': 'off',
    semi: ['warn', 'never'],
  },
}

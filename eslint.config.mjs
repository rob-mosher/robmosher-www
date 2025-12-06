import js from '@eslint/js';
import nextConfig from 'eslint-config-next';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import tailwindcssPlugin from 'eslint-plugin-tailwindcss';

export default [
  {
    ignores: ['dist', '.next', 'out', 'node_modules', 'coverage', '*.config.{js,mjs,ts}'],
  },
  {
    files: ['**/__tests__/**', '**/*.test.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        jest: 'readonly',
        describe: 'readonly',
        test: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
      },
    },
  },
  js.configs.recommended,
  ...nextConfig,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@typescript-eslint': tseslint,
      'react-refresh': reactRefreshPlugin,
      tailwindcss: tailwindcssPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        jest: 'readonly',
        describe: 'readonly',
        test: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
      },
    },
    settings: {
      react: {
        version: '18.3',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      // TypeScript ESLint recommended
      ...tseslint.configs.recommended.rules,
      
      // Tailwind CSS recommended
      ...tailwindcssPlugin.configs.recommended.rules,
      
      // Custom rules
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
      'jsx-a11y/media-has-caption': [
        'warn',
        {
          audio: ['Audio'],
          video: ['Video'],
          track: ['Track'],
        },
      ],
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
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'react/require-default-props': 'off',
    },
  },
];

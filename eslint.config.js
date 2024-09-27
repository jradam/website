import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import wcPlugin from 'eslint-plugin-wc'

export default [
  wcPlugin.configs['flat/best-practice'], // Web component specific linting
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { project: './tsconfig.json' },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        { assertionStyle: 'never' },
      ],
      'max-depth': ['error', 2],
      'no-console': 'warn',
      'no-debugger': 'warn',
      'prefer-const': 'error',
      eqeqeq: 'error',

      // BUG: Currently broken as per: https://github.com/43081j/eslint-plugin-wc/issues/139
      'wc/no-child-traversal-in-connectedcallback': 'off',
      // Allowing direct class manipulation for simplicity
      'wc/no-self-class': 'off',
    },
  },
]

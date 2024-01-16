module.exports = {
  globals: {
    module: 'readonly',
  },
  env: {
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    // By extending from a plugin config, we can get recommended rules without having to add them manually.
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'eslint-config-prettier',
  ],
  plugins: ['prettier'],
  settings: {
    // Tells eslint how to resolve imports.
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'no-console': 'off', // Allow console logging in backend code.
    'prettier/prettier': 'error',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignore unused function arguments starting with _
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }], // Allow variable hoisting for easier-to-read code.
    'prefer-const': 'error', // Encourage use of const where possible.
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Function: false, // Allow use of the 'Function' type.
        },
        extendDefaults: true,
      },
    ],
  },
  ignorePatterns: ['node_modules/', 'package-lock.json', 'dist/', 'tests/'],
};

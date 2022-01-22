module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  rules: {
    "vue/max-len": ["error", {
      "code": 80,
      "template": 80,
      "tabWidth": 2,
      "comments": 120,
      "ignorePattern": "",
      "ignoreComments": false,
      "ignoreTrailingComments": false,
      "ignoreUrls": false,
      "ignoreStrings": false,
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": false,
      "ignoreHTMLAttributeValues": false,
      "ignoreHTMLTextContents": false,
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      }
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
  },
}
module.exports = {
  '*.{js,ts}': 'eslint --fix',
  '*.scss': "pnpm -F shayne-portfolio-frontend stylelint --fix '**/*.vue'",
  '*.vue': [
    "pnpm -F shayne-portfolio-frontend stylelint --fix '**/*.vue'",
    'eslint --fix',
  ],
  '**/*.vue?(x)': () => 'pnpm run lint:types',
  '**/*.ts?(x)': () => 'pnpm run lint:types',
};

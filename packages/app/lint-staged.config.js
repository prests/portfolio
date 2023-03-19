module.exports = {
  '*.{js,ts}': 'eslint --fix',
  '*.scss': "pnpm stylelint --fix '**/*.scss'",
  '*.vue': [
    "pnpm -F shayne-project-frontend stylelint --fix '**/*.vue'",
    'eslint --fix',
  ],
};

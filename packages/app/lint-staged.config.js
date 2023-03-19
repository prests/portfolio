module.exports = {
  '*.{js,ts}': 'eslint --fix',
  '*.scss': 'stylelint --fix',
  '*.vue': ['stylelint --fix', 'eslint --fix'],
};

module.exports = {
  '*.{js,ts}': 'eslint --fix',
  '*.{scss}': 'stylelint --fix',
  '*.{vue}': ['stylelint --fix', 'exlinst --fix'],
};

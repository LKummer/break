module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-prettier'
  ],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'at-rules',
      'declarations',
      'rules'
    ],
    'order/properties-alphabetical-order': true
  }
};

/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  plugins: ['@builder.io/mitosis', 'prettier'],
  extends: ['plugin:@builder.io/mitosis/recommended', 'plugin:storybook/recommended'],
  rules: {
    // Use this to configure rules individually
    '@builder.io/mitosis/css-no-vars': 'error',
    '@builder.io/mitosis/no-unused-expressions': 'off',
    '@builder.io/mitosis/no-var-name-same-as-state-property': 'error',
    '@builder.io/mitosis/jsx-callback-arg-name': 'error',
    '@builder.io/mitosis/jsx-callback-arrow-function': 'error',
    '@builder.io/mitosis/no-assign-props-to-state': 'error',
    '@builder.io/mitosis/no-conditional-logic-in-component-render': 'error',
    '@builder.io/mitosis/no-state-destructuring': 'error'
  }
};
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'max-len'                                   : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/html-closing-bracket-newline'          : 'off',
    'vue/max-attributes-per-line'               : ['error', {
      'singleline': { 'max': 4 },
      'multiline' : { 'max': 1 }
    }],
    'vue/multiline-html-element-content-newline': ['error', { 'allowEmptyLines': true }]
  }
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  globals: {},
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended' // 解决ESlint和Prettier冲突
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // 关闭any类型警告
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-vars': 'off',
    // 允许props、emit可以声明不使用
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'all', varsIgnorePattern: 'props|emit', ignoreRestSiblings: false }
    ],
    // 关闭vue文件和组件命名校验
    'vue/multi-word-component-names': 0,
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': 0,
    'vue/comment-directive': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/no-v-html': 'off',
    // 自动关闭标签定义
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    // 在标记的右括号前换行
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never'
      }
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        endOfLine: 'auto' // 不让prettier检测文件每行结束的格式
      }
    ],
    '@typescript-eslint/no-namespace': [
      'error',
      {
        allowDeclarations: true
      }
    ]
  }
}

// prettier的默认配置文件
module.exports = {
  printWidth: 100, // 一行最多 100 字符
  tabWidth: 2, // 使用 2 个空格缩进
  useTabs: false, // 不使用缩进符，而使用空格
  semi: false, // 不尾随分号
  singleQuote: true, // 使用单引号
  trailingComma: 'none', // 多行逗号分割的语法中，最后一行不加逗号
  bracketSameLine: true, // 标签换行后>单独一行
  vueIndentScriptAndStyle: true,
  bracketSpacing: true, // 对象大括号内两边是否加空格 { a:0 }
  jsxBracketSameLine: true, // jsx > 是否另起一行
  arrowParens: 'always', // (x) => {} 是否要有小括号
  requirePragma: false, // 不需要写文件开头的 @prettier
  insertPragma: false, // 不需要自动在文件开头插入 @prettier
  endOfLine: 'auto' // 不让prettier检测文件每行结束的格式
}

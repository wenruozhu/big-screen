/*
 * @Description: 
 * @Author: Vergil
 * @Date: 2021-09-04 18:06:25
 * @LastEditTime: 2021-09-08 10:36:10
 * @LastEditors: Vergil
 */
// 具体配置可以参考 https://prettier.io/docs/en/options.html
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: false, // 未尾逗号
  vueIndentScriptAndStyle: true,
  singleQuote: true, // 单引号
  quoteProps: 'as-needed',
  bracketSpacing: true,
  trailingComma: 'none', // 未尾分号
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  arrowParens: 'always',
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'lf'
};

const { init, getVersionFilePath } = require('./src/state')
const { parse, unParse } = require('./src/parse')
module.exports = function (source, map) {
  init()
  const loaderContext = this
  const {
    resourcePath,
    resourceQuery
  } = loaderContext

  loaderContext.addDependency(getVersionFilePath())
  const ast = parse(source)
  const s = unParse(ast, { resourcePath })

  return s
}

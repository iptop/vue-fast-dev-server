const { getRuntimePath, getActiveRoute } = require('./state')
function parse (source) {
  const reg = new RegExp('{[\\d\\D]*?component[\\d\\D]*?import[\\d\\D]*?}', 'g')
  const length = source.length
  let lastIndex = 0
  const ast = []

  function extractStaticText (s, e) {
    const staticText = source.substr(s, e - s)
    ast.push({
      type: 'static',
      raw: staticText
    })
  }

  function extractRoute (s) {
    ast.push({
      type: 'route',
      raw: s
    })
  }

  while (true) {
    const nrt = reg.exec(source)
    if (nrt) {
      const s = nrt[0]
      const is = nrt.index
      extractStaticText(lastIndex, is)
      extractRoute(s)
      const l = s.length
      lastIndex = is + l
    } else {
      extractStaticText(lastIndex, length)
      break
    }
  }

  return ast
}

function getRouteName (s) {
  const reg = new RegExp("name: \\'(.*?)\\'", 'g')
  const rt = reg.exec(s)
  if (rt) {
    return rt[1]
  } else {
    return ''
  }
}

function unParse (ast, { resourcePath }) {
  let str = ''
  for (const s of ast) {
    switch (s.type) {
      case 'static':
        str += s.raw
        break
      case 'route':
        const routerName = getRouteName(s.raw)

        const activeRoute = getActiveRoute()

        if (activeRoute[routerName]) {
          str += s.raw
        } else {
          const reg = new RegExp('(component[\\d\\D]*?import\\().*?(\\))', 'g')
          const np = getRuntimePath().replace(new RegExp('\\\\', 'g'), '/')
          const ns = s.raw.replace(reg, `$1 '${np}' $2`)
          str += ns
        }

        break
    }
  }
  return str
}

module.exports = {
  parse,
  unParse
}

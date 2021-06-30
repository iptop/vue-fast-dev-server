let isInit = false
let version = 0
const path = require('path')
const fs = require('fs')
const activeRoutes = {}
function getVersionFilePath () {
  return path.join(process.cwd(), 'node_modules', 'lazy-route-loader-version')
}

function setVersion () {
  version++
  const fileName = getVersionFilePath()
  fs.writeFileSync(fileName, version.toString())
}

function init () {
  if (isInit) {
    return
  }
  isInit = true
  setVersion()
}

function getRuntimePath () {
  return path.join(require.resolve('./runtime.vue'))
}

function setActive (name) {
  if (activeRoutes[name]) {

  } else {
    activeRoutes[name] = true
    setVersion()
  }
}

function getActiveRoute () {
  return activeRoutes
}

module.exports = {
  init,
  getVersionFilePath,
  getRuntimePath,
  setActive,
  getActiveRoute
}

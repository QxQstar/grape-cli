import { isExternal } from "./validate"
import { routes } from "../router";

/**
 * 解析跳转路径
 * @param basicPath 路径的基础路径
 * @param path 路径
 * @returns {*}
 */
function resolvePath(basicPath,path) {
  if(!path) return ''
  if (isExternal(path)) return path
  if(isExternal(basicPath)) return basicPath
  if(path[0] === '/') return path
  return  routes.getValidPath(basicPath+'/'+path)
}

function getValidPath(path) {
  return routes.getValidPath(path)
}

export {
  resolvePath,
  getValidPath
}

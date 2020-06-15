import { isExternal } from "./validate"
import { routes } from "../router";

/**
 * 解析跳转路径
 * @param path 路径
 * @returns {*}
 */
function resolvePath(path) {
  if(!path) return ''
  if (isExternal(path)) return path

  return routes.getValidPath(path)
}


export {
  resolvePath
}

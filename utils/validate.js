/**
 * @description 判读是否为外链
 * @param path
 * @returns {boolean}
 */
isExternal.pattern = /^(https?:|mailto:|tel:)/
isExternal.message = '格式不正确'
export function isExternal(path) {
  return isExternal.pattern.test(path)
}

/**
 * @description 判读是否router  path
 * @param path
 * @returns {boolean}
 */
isPath.pattern = /^\/?[A-Za-z0-9\/]*$/
isPath.message = '格式不正确'
export function isPath(value) {
  return isPath.pattern.test(value)
}

/**
 * @description 校验密码是否小于6位
 * @param value
 * @returns {boolean}
 */
isUsername.pattern = /^[\W\w]{1,63}$/
isUsername.message = '格式(字母开头，允许2-16字节，允许字母数字下划线)'
export function isUsername(value) {
  return isUsername.pattern.test(value)
}

isPassword.pattern = /^[a-zA-Z][\w!@#$%^&*()_+<>?:,./;’，。、‘：“《》？~！@#￥%……（）]{5,63}$/
isPassword.message = '格式(字母开头，允许6-64字节，允许字母数字下划线)'
export function isPassword(value) {
  return isPassword.pattern.test(value)
}

/**
 * @description 判断是否为数字
 * @param value
 * @returns {boolean}
 */
isNumber.pattern = /^[0-9]*$/
isNumber.message = '请输入数字'
export function isNumber(value) {
  return isNumber.pattern.test(value)
}

/**
 * @description 判断是否是名称
 * @param value
 * @returns {boolean}
 */
isName.pattern = /^[\u4e00-\u9fa5a-zA-Z0-9\s]+$/
isName.message = '格式(中文字母数字)'
export function isName(value) {
  return isName.pattern.test(value)
}

/**
 * @description 判断是否为IP
 * @param ip
 * @returns {boolean}
 */
isIP.pattern =
  /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
isIP.message = '格式不正确'
export function isIP(ip) {
  return isIP.pattern.test(ip)
}

/**
 * @description 判断是否是传统网站
 * @param url
 * @returns {boolean}
 */
isUrl.pattern =
  /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
isUrl.message = '只能输入链接地址'
export function isUrl(url) {
  return isUrl.pattern.test(url)
}

/**
 * @description 判断是否是小写字母
 * @param value
 * @returns {boolean}
 */
isLowerCase.pattern = /^[a-z]+$/
isLowerCase.message = '格式不正确'
export function isLowerCase(value) {
  return isLowerCase.pattern.test(value)
}

/**
 * @description 判断是否是大写字母
 * @param value
 * @returns {boolean}
 */
isUpperCase.pattern = /^[A-Z]+$/
isUpperCase.message = '格式不正确'
export function isUpperCase(value) {
  return isUpperCase.pattern.test(value)
}

/**
 * @description 判断是否是大写字母开头
 * @param value
 * @returns {boolean}
 */
isAlphabets.pattern = /^[A-Za-z0-9\s]+$/
isAlphabets.message = '格式不正确(大小写字母数字)'
export function isAlphabets(value) {
  return isAlphabets.pattern.test(value)
}

/**
 * @description 判断是否是字符串
 * @param value
 * @returns {boolean}
 */
export function isString(value) {
  return typeof value === 'string' || value instanceof String
}

/**
 * @description 判断是否是数组
 * @param arg
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

/**
 * @description 判断是否是端口号
 * @param value
 * @returns {boolean}
 */
export function isPort(value) {
  const reg =
    /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/
  return reg.test(value)
}

/**
 * @description 判断是否是手机号
 * @param value
 * @returns {boolean}
 */
isPhone.pattern = /^([1][3,4,5,6,7,8,9])\d{9}$/
isPhone.message = '格式不正确'
export function isPhone(value) {
  return isPhone.pattern.test(value)
}

/**
 * @description 判断是否是身份证号(第二代)
 * @param value
 * @returns {boolean}
 */
isIdCard.pattern =
  /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
isIdCard.message = '格式不正确'
export function isIdCard(value) {
  return isIdCard.pattern.test(value)
}

/**
 * @description 判断是否是邮箱
 * @param value
 * @returns {boolean}
 */
isEmail.pattern = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
isEmail.message = '格式不正确'
export function isEmail(value) {
  return isEmail.pattern.test(value)
}

/**
 * @description 判断是否中文
 * @param value
 * @returns {boolean}
 */
export function isChina(value) {
  const reg = /^[\u4E00-\u9FA5]{2,4}$/
  return reg.test(value)
}

/**
 * @description 判断是否为空
 * @param value
 * @returns {boolean}
 */
export function isBlank(value) {
  return (
    value == null ||
    false ||
    value === '' ||
    value.trim() === '' ||
    value.toLocaleLowerCase().trim() === 'null'
  )
}

/**
 * @description 判断是否为固话
 * @param value
 * @returns {boolean}
 */
isTel.pattern =
  /^(400|800)([0-9\\-]{7,10})|(([0-9]{4}|[0-9]{3})([- ])?)?([0-9]{7,8})(([- 转])*([0-9]{1,4}))?$/
isTel.message = '格式不正确'
export function isTel(value) {
  return isTel.pattern.test(value)
}

/**
 * @description 判断是否为数字且最多两位小数
 * @param value
 * @returns {boolean}
 */
isNum.pattern = /^([-+])?\d+(\.[0-9]{1,2})?$/
isNum.message = '数字且最多两位小数'
export function isNum(value) {
  return isNum.pattern.test(value)
}

/**
 * @description 判断是否为json
 * @param value
 * @returns {boolean}
 */
export function isJson(value) {
  if (typeof value == 'string') {
    try {
      const obj = JSON.parse(value)
      return !!(typeof obj == 'object' && obj)
    } catch (e) {
      return false
    }
  }
}

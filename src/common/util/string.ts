/**
 * 카멜케이스를 케밥케이스로 변경하는 함수
 *
 * @param {string} str - 카멜케이스 string
 * @returns {string} 케밥케이스로 변환한 string
 *
 * @example
 * camelToKebab('camelCaseString'); // 'camel-case-string'
 */
export function camelToKebab(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

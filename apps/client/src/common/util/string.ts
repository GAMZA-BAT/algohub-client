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

export const colorToRgba = (hex: string, opacity: number) => {
  const r = Number.parseInt(hex.slice(1, 3), 16);
  const g = Number.parseInt(hex.slice(3, 5), 16);
  const b = Number.parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

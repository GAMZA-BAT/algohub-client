/**
 * 로그인 없이 접근 가능한 경로
 * @type {string[]}
 */
export const publicRoutes: string[] = ["/", "/login", "/signup"];

/**
 * 이 접두사로 시작하는 경로는 API 인증 목적으로 사용
 * @type {string}
 */
export const apiAuthPrefix: string = "/api";

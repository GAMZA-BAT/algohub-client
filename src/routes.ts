/**
 * 로그인 없이 접근 가능한 경로
 * @type {string[]}
 */
export const publicRoutes: string[] = ["/", "/login", "/signup"];

/**
 * 로그인 유저가 publicRoutes에 접근할 경우 리다이렉트 할 경로
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/user";

/**
 * 이 접두사로 시작하는 경로는 API 인증 목적으로 사용
 * @type {string}
 */
export const apiAuthPrefix: string = "/api";


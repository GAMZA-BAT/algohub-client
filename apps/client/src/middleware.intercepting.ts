import type { Session } from "next-auth";
import { NextResponse } from "next/server";

// 인터셉트할 라우트 설정
type InterceptingRouteConfig = {
  pattern: RegExp;
  getRedirectPath: (match: RegExpMatchArray, auth?: Session | null) => string;
  /** redirectPath 접속 후 이동시킬 목적지 path. 지정하지 않으면 pathname과 동일하게 설정 */
  getTargetPath?: (match: RegExpMatchArray, auth?: Session | null) => string;
};
/*
 * pattern: /^\/group\/([^/]+)\/notice(\/.*)?$/
 * pathname: "/group/[groupId]/notice/create"
 * match[0]: "/group/[groupId]/notice/create" (전체 문자열)
 * match[1]: "[groupId]" (첫 번째 캡쳐 - [^/]+)
 * match[2]: "/create" (두 번째 캡쳐(선택) - (\/.*)?)
 */
const interceptingRoutesConfig: InterceptingRouteConfig[] = [
  {
    // /group/[groupId]/notice/:match[1] -> /group/[groupId] + modal-path-cookie
    pattern: /^\/group\/([^/]+)\/notice(\/.*)?$/,
    getRedirectPath: (match) => `/group/${match[1]}`,
  },
  {
    // /[user]/create-group -> /[user] + modal-path-cookie
    pattern: /^\/([^/]+)\/create-group$/,
    getRedirectPath: (match) => `/${match[1]}`,
  },
  {
    // /group/[groupId]/solved-detail/[id] -> /[user]/my-solved + modal-path-cookie
    pattern: /^\/group\/([^/]+)\/solved-detail(\/.*)?$/,
    getRedirectPath: (_, auth) => `/${auth?.user?.nickname}/my-solved`,
  },
];

type InterceptingRouteParams = {
  url: string;
  pathname: string;
  auth: Session | null;
  isSoftNavigation: string | null;
};

/**
 * Intercepting Routes를 확인하고, 해당하는 경우 쿠키를 설정하고 redirect 합니다.
 * Soft navigation이 아닐 때(새로고침, 직접 URL 입력)만 동작합니다.
 */
export const handleInterceptingRoutes = (params: InterceptingRouteParams) => {
  const { isSoftNavigation, pathname, url, auth } = params;

  if (isSoftNavigation) {
    return;
  }

  for (const {
    pattern,
    getRedirectPath,
    getTargetPath,
  } of interceptingRoutesConfig) {
    const match = pathname.match(pattern);
    if (match) {
      const redirectPath = getRedirectPath(match, auth);
      const targetPath = getTargetPath?.(match, auth) || pathname;

      return createInterceptResponse({
        url,
        redirectPath,
        targetPath,
      });
    }
  }

  return;
};

const createInterceptResponse = ({
  url,
  redirectPath,
  targetPath,
}: {
  url: string;
  redirectPath: string;
  targetPath: string;
}) => {
  const response = NextResponse.redirect(new URL(redirectPath, url));

  response.cookies.set("modal-path", targetPath, {
    path: "/",
    maxAge: 5,
  });

  return response;
};

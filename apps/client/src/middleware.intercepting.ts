import type { Session } from "next-auth";
import { NextResponse } from "next/server";

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
    getRewritePath: (match) => `/group/${match[1]}`,
  },
  {
    // /[user]/create-group -> /[user] + modal-path-cookie
    pattern: /^\/([^/]+)\/create-group$/,
    getRewritePath: (match) => `/${match[1]}`,
  },
  {
    // /group/[groupId]/solved-detail/[id] -> /[user]/my-solved + modal-path-cookie
    pattern: /^\/group\/([^/]+)\/solved-detail(\/.*)?$/,
    getRewritePath: (_, auth) => `/${auth?.user?.nickname}/my-solved`,
    getTargetPath: (match) => `${match[0]}`,
  },
];

type InterceptingRouteParams = {
  url: string;
  pathname: string;
  auth: Session | null;
  isSoftNavigation: string | null;
};

// 인터셉트할 라우트 설정
type InterceptingRouteConfig = {
  pattern: RegExp;
  getRewritePath: (match: RegExpMatchArray, auth?: Session | null) => string;
  /** rewritePath 접속 후 목적지 path. 지정하지 않으면 pathname과 동일하게 설정 */
  getTargetPath?: (match: RegExpMatchArray, auth?: Session | null) => string;
};

/**
 * Intercepting Routes를 확인하고, 해당하는 경우 URL을 rewrite하고 쿠키를 설정합니다.
 * Soft navigation이 아닐 때(새로고침, 직접 URL 입력)만 동작합니다.
 */
export const handleInterceptingRoutes = (params: InterceptingRouteParams) => {
  const { isSoftNavigation, pathname, url, auth } = params;

  if (isSoftNavigation) {
    return;
  }

  for (const {
    pattern,
    getRewritePath,
    getTargetPath,
  } of interceptingRoutesConfig) {
    const match = pathname.match(pattern);
    if (match) {
      const rewritePath = getRewritePath(match, auth);
      const targetPath = getTargetPath?.(match, auth) || pathname;

      return createInterceptResponse({
        url,
        rewritePath,
        targetPath,
      });
    }
  }

  return;
};

const createInterceptResponse = ({
  url,
  rewritePath,
  targetPath,
}: {
  url: string;
  rewritePath: string;
  targetPath: string;
}) => {
  const rewriteUrl = new URL(rewritePath, url);
  const response = NextResponse.rewrite(rewriteUrl);

  response.cookies.set("modal-path", targetPath, {
    path: "/",
    maxAge: 5,
  });

  return response;
};

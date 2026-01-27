import type { KyRequest } from "ky";

interface ErrorLogParams {
  request: KyRequest;
  status: number;
  errorData: string;
}

export const isHTTPError = (
  error: unknown,
): error is { response: { status: number } } => {
  return (
    typeof error === "object" &&
    error !== null &&
    "response" in error &&
    error.response !== null &&
    typeof error.response === "object" &&
    "status" in error.response
  );
};

const NODE_COLORS = {
  reset: "\x1b[0m", // 색 설정 초기화
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  bgRed: "\x1b[41m",
};

const styles = {
  header:
    "color: #721c24; background-color: #f8d7da; padding: 2px 4px; border-radius: 3px;",
  method: "color: #0f5132; background-color: #d1e7dd; padding: 2px 4px;",
  path: "color: #084298; background-color: #cfe2ff; padding: 2px 4px;",
  status: `color: white; background-color: "#dc3545"; padding: 2px 4px;`,
  error: "color: #664d03; background-color: #fff3cd; padding: 2px 4px;",
};

const isNode = typeof window === "undefined";

export const logError = ({
  request,
  status,
  errorData,
}: ErrorLogParams): void => {
  const urlPath = new URL(request.url).pathname;

  if (isNode) {
    console.warn(
      `${NODE_COLORS.bgRed}🚨 API ERROR ${NODE_COLORS.reset}\n` +
        `${NODE_COLORS.green}${request.method.padEnd(7)} ${urlPath}${NODE_COLORS.reset}\n` +
        `${NODE_COLORS.magenta}STATUS: ${status}${NODE_COLORS.reset}\n` +
        `${NODE_COLORS.yellow}ERROR: ${errorData}${NODE_COLORS.reset}`,
    );
  } else {
    console.warn(
      `%c🚨 API Error\n%c${request.method.padEnd(7)}%c${urlPath}\n%cSTATUS: ${status}\n%cERROR: %O`,
      styles.header,
      styles.method,
      styles.path,
      styles.status,
      styles.error,
      errorData,
    );
  }
};

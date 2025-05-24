export const HTTP_ERROR_STATUS = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  PAYLOAD_TOO_LARGE: 413,
  CONFLICT: 409,
  GONE: 410,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export type HTTPErrorStatusValues =
  (typeof HTTP_ERROR_STATUS)[keyof typeof HTTP_ERROR_STATUS];
export const NO_RETRY_STATUSES = Object.values(HTTP_ERROR_STATUS) as number[];

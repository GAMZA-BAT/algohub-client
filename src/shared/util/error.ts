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

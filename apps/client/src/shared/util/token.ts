export const [getAccessToken, setAccessToken] = (() => {
  let accessToken: string | undefined;
  const getAccessToken = () => accessToken;
  const setAccessToken = (token?: string) => {
    accessToken = token;
  };
  return [getAccessToken, setAccessToken];
})();

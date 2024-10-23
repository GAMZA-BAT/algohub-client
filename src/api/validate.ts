// 중복 검사 api mock, TODO: 실제 중복 검사 api로 교체하기
export const validateNickname = (nickname: string) => {
  return new Promise<boolean>((resolve) => {
    if (!nickname.length) return resolve(true);
    setTimeout(() => {
      nickname.at(-1) === "t" ? resolve(true) : resolve(false);
    }, 1000);
  });
};

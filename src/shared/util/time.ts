export const getFormattedCreatedAt = (createdAt: string) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDate = new Date().getDate();
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();

  const createdYear = new Date(createdAt).getFullYear();
  const createdMonth = new Date(createdAt).getMonth() + 1;
  const createdDate = new Date(createdAt).getDate();
  const createdHour = new Date(createdAt).getHours();
  const createdMinute = new Date(createdAt).getMinutes();

  if (currentYear > createdYear) {
    return `${currentYear - createdYear}년 전`;
  }
  if (currentMonth > createdMonth) {
    return `${currentMonth - createdMonth}달 전`;
  }
  if (currentDate > createdDate) {
    return `${currentDate - createdDate}일 전`;
  }
  if (currentHour > createdHour) {
    return `${currentHour - createdHour}시간 전`;
  }

  return currentMinute - createdMinute > 0
    ? `${currentMinute - createdMinute}분 전`
    : "방금 전";
};

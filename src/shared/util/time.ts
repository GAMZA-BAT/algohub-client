export const getDateInfo = (date: Date) => {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
};

export const getFormattedcreateAt = (createAt: string) => {
  const {
    year: currentYear,
    month: currentMonth,
    date: currentDate,
    hour: currentHour,
    minute: currentMinute,
  } = getDateInfo(new Date());

  const {
    year: createdYear,
    month: createdMonth,
    date: createdDate,
    hour: createdHour,
    minute: createdMinute,
  } = getDateInfo(new Date(createAt));

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

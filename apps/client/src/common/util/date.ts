import { format, formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

export const formatDistanceDate = (date: string) => {
  const d = new Date(date);
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000;

  if (diff < 60) {
    return "방금 전";
  }

  if (diff < 60 * 60 * 24) {
    return formatDistanceToNow(d, { addSuffix: true, locale: ko });
  }

  return format(d, "yyyy.MM.dd");
};

export const getDaysDifference = (dateString: string): number => {
  const targetDate = new Date(dateString);
  const today = new Date();

  // 날짜만 비교하기 위해 시간을 00:00:00으로 설정
  const targetDateOnly = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate());
  const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  // 밀리초를 일로 변환
  const diffTime = todayOnly.getTime() - targetDateOnly.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};

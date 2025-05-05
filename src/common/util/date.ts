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

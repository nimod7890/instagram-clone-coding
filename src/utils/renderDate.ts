const HOUR = 60;
const DAY = 24 * HOUR;
const MONTH = 30 * DAY;

export default function renderDate(date: Date) {
  const targetDate = new Date(date);
  const currentDate = new Date();

  const timeDiff = Math.floor(
    (currentDate.getTime() - targetDate.getTime()) / (1000 * HOUR)
  );

  if (timeDiff < HOUR) {
    return `${timeDiff}분 전`;
  }

  if (timeDiff < DAY) {
    return `${Math.floor(timeDiff / HOUR)}시간 전`;
  }

  if (timeDiff < MONTH) {
    return `${Math.floor(timeDiff / DAY)}일 전`;
  }

  const month = targetDate.getMonth() + 1;
  const day = targetDate.getDate();

  return `${month}월 ${day}일`;
}

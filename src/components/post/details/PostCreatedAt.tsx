import { Typography } from "src/components/@common";

type PostCreatedAtProps = { date: Date };

export default function PostCreatedAt({ date }: PostCreatedAtProps) {
  return (
    <Typography type="CaptionRegular" color="gray300">
      {renderPostDate(date)}
    </Typography>
  );
}

/** utils */

const HOUR = 60;
const DAY = 24 * HOUR;
const MONTH = 30 * DAY;

function renderPostDate(date: Date) {
  const postDate = new Date(date);
  const currentDate = new Date();

  const timeDiff = Math.floor(
    (currentDate.getTime() - postDate.getTime()) / (1000 * HOUR)
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

  const month = postDate.getMonth() + 1;
  const day = postDate.getDate();

  return `${month}월 ${day}일`;
}

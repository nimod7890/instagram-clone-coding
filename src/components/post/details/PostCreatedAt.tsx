import { Typography } from "src/components/@common";
import { renderDate } from "src/utils";

type PostCreatedAtProps = { date: Date };

export default function PostCreatedAt({ date }: PostCreatedAtProps) {
  return (
    <Typography type="CaptionRegular" color="gray300">
      {renderDate(date)}
    </Typography>
  );
}

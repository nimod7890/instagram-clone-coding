import React from "react";
import { Typography } from "src/components/@common";
import styled from "styled-components";

type ProfileSummaryButtonProps = { label: string; value: number } & Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
>;

export default function ProfileSummaryButton({
  label,
  value,
  ...prosp
}: ProfileSummaryButtonProps) {
  return (
    <Button {...prosp}>
      <Typography type="body1Light">{label}</Typography>
      <Typography type="body1SemiBold">{value}</Typography>
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
`;

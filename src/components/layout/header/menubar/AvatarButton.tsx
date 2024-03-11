import React, { ForwardedRef, forwardRef } from "react";
import { Avatar } from "src/components/@common";

type AvatarButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
>;

const AvatarButton = forwardRef<HTMLButtonElement, AvatarButtonProps>(
  (props, ref) => {
    return (
      <button ref={ref as ForwardedRef<HTMLButtonElement>} {...props}>
        <Avatar />
      </button>
    );
  }
);

export default AvatarButton;

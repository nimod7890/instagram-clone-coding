import { Icon } from "src/components/@common";
import { theme } from "src/styles";
import styled from "styled-components";

type AvatarProps = {
  size?: number;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export default function Avatar({ size = 35, src, ...props }: AvatarProps) {
  return (
    <Container size={size}>
      {src ? (
        <img alt="프로필" {...props} />
      ) : (
        <Icon icon="user" color="gray300" size={`${size}px`} />
      )}
    </Container>
  );
}

const Container = styled.div<{ size: number }>`
  background-color: ${theme.palette.white};

  color: ${theme.palette.gray500};

  width: ${({ size }) => size};
  height: ${({ size }) => size};

  border: 1px solid ${theme.palette.gray300};
  border-radius: 100px;

  overflow: hidden;
`;

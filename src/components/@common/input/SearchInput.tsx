import { Input } from "src/components/@common";
import { InputProps } from "src/components/@common/input";
import { css } from "styled-components";

type SearchInputProps = Omit<
  InputProps,
  "isError" | "startIcon" | "displayErrorStatusIcon" | "containerStyle"
>;

export default function SearchInput(props: SearchInputProps) {
  return (
    <Input startIcon="search" containerStyles={containerStyles} {...props} />
  );
}

const containerStyles = css`
  width: 100%;
  max-width: 282px;
  height: 22px;

  border-radius: 8px;
  padding: 10px 14px;
`;

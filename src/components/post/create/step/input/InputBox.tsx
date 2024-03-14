import { Typography } from "src/components/@common";
import { theme } from "src/styles";
import styled from "styled-components";

type InputBoxProps = {
  value: string;
  onChange: (text: string) => void;
};

export default function InputBox({ value, onChange }: InputBoxProps) {
  return (
    <>
      <InputArea
        value={value}
        maxLength={1000}
        onChange={(event) => onChange(event.target.value.slice(0, 1000))}
        placeholder="입력"
      />
      <Typography
        type="body2Regular"
        color="gray300"
        style={{ textAlign: "end", padding: "15px 20px" }}
      >
        {value.length}/1,000
      </Typography>
    </>
  );
}

const InputArea = styled.textarea`
  resize: none;

  width: calc(100% - 40px);
  height: 300px;
  min-height: 300px;

  overflow-y: auto;

  margin: 0 2px;
  padding: 0 18px;

  ${theme.typography.TitleRegular}

  ::placeholder {
    color: ${theme.palette.gray500};
    font-weight: 400;
  }
`;

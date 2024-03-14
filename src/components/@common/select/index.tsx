import { ForwardedRef, forwardRef } from "react";
import { Icon } from "src/components/@common";
import { theme } from "src/styles";
import styled from "styled-components";

export type SelectProps = {
  value?: number;
  placeholder?: string;
  endAdornment?: string;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> &
  (ObjectItemsProps | StringItemsProps);

type ObjectItemsProps = {
  items: { [key: string]: any }[];
  idField: string;
  displayField: string;
};

type StringItemsProps = {
  items: string[] | number[];
  idField?: never;
  displayField?: never;
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      value = "",
      placeholder,
      items,
      idField,
      displayField,
      endAdornment,
      ...props
    },
    ref
  ) => {
    return (
      <Container>
        <StyledSelect
          value={value}
          ref={ref as ForwardedRef<HTMLSelectElement>}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {items.map((item, index) => {
            if (typeof item === "object") {
              return (
                <option key={item.idField} value={item.idField}>
                  {item.displayField}
                  {endAdornment}
                </option>
              );
            }

            return (
              <option key={`${item}-${index}`} value={item}>
                {item}
                {endAdornment}
              </option>
            );
          })}
        </StyledSelect>
        <Icon icon="chevron-down" size="20px" />
      </Container>
    );
  }
);

export default Select;

/** styles */

const Container = styled.div`
  width: 81px;
  height: 22px;

  display: flex;
  align-items: center;

  gap: 8px;
  padding: 10px 14px;

  border: 1px solid ${theme.palette.gray300};
  border-radius: 8px;

  background-color: ${theme.palette.white};

  ${theme.typography.body1Regular};
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 100%;

  border: none;
  ${theme.typography.body1Regular};

  color: ${theme.palette.gray500};

  & + div {
    color: ${theme.palette.black};
  }

  :focus {
    outline: none;
  }

  option[value=""][disabled] {
    display: none;
  }

  cursor: pointer;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

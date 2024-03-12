import { Select } from "src/components/@common";
import { DateSelectFormType } from "src/types";
import styled from "styled-components";

type DateSelectProps = {
  value: DateSelectFormType;
  onChange: (value: DateSelectFormType) => void;
};

const DateObject = {
  date: Array.from({ length: 31 }, (_, index) => index + 1),
  month: Array.from({ length: 12 }, (_, index) => index + 1),
  year: Array.from({ length: 2015 - 1919 + 1 }, (_, index) => index + 1919),
};

export default function DateSelect({ value, onChange }: DateSelectProps) {
  const { year, month, date } = value;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value: updatedValue } = event.target;

    onChange({ ...value, [id]: Number(updatedValue) });
  };

  return (
    <Container>
      <Select
        id="date"
        value={date}
        items={DateObject.date}
        endAdornment="일"
        onChange={handleChange}
      />
      <Select
        id="month"
        value={month}
        items={DateObject.month}
        endAdornment="월"
        onChange={handleChange}
      />
      <Select
        id="year"
        value={year}
        items={DateObject.year}
        endAdornment="년"
        onChange={handleChange}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;

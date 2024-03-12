import { Select } from "src/components/@common";
import { DateSelectFormType } from "src/types";
import styled from "styled-components";

type DateSelectProps = {
  value: DateSelectFormType;
  onChange: (value: DateSelectFormType) => void;
};

const DateObject = {
  day: Array.from({ length: 31 }, (_, index) => index + 1),
  month: Array.from({ length: 12 }, (_, index) => index + 1),
  year: Array.from({ length: 2015 - 1919 + 1 }, (_, index) => 2015 - index),
};

export default function DateSelect({ value, onChange }: DateSelectProps) {
  const { year, month, day } = value;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value: updatedValue } = event.target;

    onChange({ ...value, [id]: Number(updatedValue) });
  };

  return (
    <Container>
      <Select
        id="day"
        placeholder="일"
        value={day === 0 ? undefined : day}
        items={DateObject.day}
        endAdornment="일"
        onChange={handleChange}
      />
      <Select
        id="month"
        value={month === 0 ? undefined : month}
        items={DateObject.month}
        placeholder="월"
        endAdornment="월"
        onChange={handleChange}
      />
      <Select
        id="year"
        value={year === 0 ? undefined : year}
        items={DateObject.year}
        placeholder="년"
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

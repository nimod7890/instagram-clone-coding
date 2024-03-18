import React, { PropsWithChildren } from "react";
import styled from "styled-components";

type GridProps = {
  spacing?: number;
  columns?: number;
};

const GridContainer = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns = 3 }) => columns}, 1fr);
  gap: ${({ spacing = 0 }) => spacing}px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(${({ columns = 2 }) => columns}, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(${({ columns = 1 }) => columns}, 1fr);
  }
`;

const GridItem = styled.div`
  width: 100%;
`;

const Grid = ({
  spacing = 0,
  columns = 4,
  children,
}: PropsWithChildren<GridProps>) => {
  return (
    <GridContainer spacing={spacing} columns={columns}>
      {React.Children.map(children, (child, index) => (
        <GridItem key={index}>{child}</GridItem>
      ))}
    </GridContainer>
  );
};

export default Grid;

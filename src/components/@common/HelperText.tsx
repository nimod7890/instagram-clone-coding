/** styles */
import { theme } from "src/styles";
import styled from "styled-components";

const HelperText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: max-content;

  padding: 100px 0;

  ${theme.typography.Title2SemiBold}
  color: ${theme.palette.gray500};
`;

export default HelperText;

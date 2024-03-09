import { css } from "styled-components";

const typography = {
  /** size 16; weight 500 */
  body1Regular: css`
    font-size: 16;
    font-weight: 500;
    font-family: "Sofia Pro";
  `,
  /** size 16; weight 600 */
  body1Bold: css`
    font-size: 16;
    font-weight: 600;
    font-family: "Sofia Pro SemiBold";
  `,
  /** size 14; weight 500 */
  body2Regular: css`
    font-size: 14;
    font-weight: 500;
    font-family: "Sofia Pro";
  `,
  /** size 14; weight 600 */
  body2Bold: css`
    font-size: 14;
    font-weight: 600;
    font-family: "Sofia Pro SemiBold";
  `,
} as const;

export default typography;

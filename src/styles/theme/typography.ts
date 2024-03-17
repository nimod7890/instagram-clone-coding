import { css } from "styled-components";

const typography = {
  /** size 38; weight 500 */
  Title1Regular: css`
    font-size: 30px;
    font-weight: 500;
    font-family: "Sofia Pro";
    line-height: 38px;
  `,
  /** size 18; weight 700 */
  Title2Bold: css`
    font-size: 18px;
    font-weight: 700;
    font-family: "Sofia Pro Bold";
    line-height: 28px;
  `,
  /** size 18; weight 600 */
  Title2SemiBold: css`
    font-size: 18px;
    font-weight: 600;
    font-family: "Sofia Pro SemiBold";
    line-height: 28px;
  `,
  /** size 18; weight 500 */
  Title2Regular: css`
    font-size: 18px;
    font-weight: 500;
    font-family: "Sofia Pro";
    line-height: 28px;
  `,
  /** size 16; weight 400 */
  body1Light: css`
    font-size: 16px;
    font-weight: 400;
    font-family: "Sofia Pro Regular";
    line-height: 24px;
  `,
  /** size 16; weight 500 */
  body1Regular: css`
    font-size: 16px;
    font-weight: 500;
    font-family: "Sofia Pro";
    line-height: 24px;
  `,
  /** size 16; weight 600 */
  body1SemiBold: css`
    font-size: 16px;
    font-weight: 600;
    font-family: "Sofia Pro SemiBold";
    line-height: 24px;
  `,
  /** size 14; weight 400 */
  body2Light: css`
    font-size: 14px;
    font-weight: 400;
    font-family: "Sofia Pro Regular";
    line-height: 20px;
  `,
  /** size 14; weight 500 */
  body2Regular: css`
    font-size: 14px;
    font-weight: 500;
    font-family: "Sofia Pro";
    line-height: 20px;
  `,
  /** size 14; weight 600 */
  body2SemiBold: css`
    font-size: 14px;
    font-weight: 600;
    font-family: "Sofia Pro SemiBold";
    line-height: 20px;
  `,
  /** size 14; weight 700 */
  body2Bold: css`
    font-size: 14px;
    font-weight: 700;
    font-family: "Sofia Pro Bold";
    line-height: 20px;
  `,
  /** size 12; weight 500 */
  CaptionRegular: css`
    font-size: 12px;
    font-weight: 500;
    font-family: "Sofia Pro";
    line-height: 18px;
  `,
} as const;

export default typography;

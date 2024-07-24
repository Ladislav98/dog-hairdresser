import styled, { css } from "styled-components";

//BUTTON
const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

export const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

//////////////////////////////////////////
//ROW
export const Row = styled.div`
  display: flex;
  ${(props) =>
    props.type === "horizontal" &&
    css`
      align-items: center;
      justify-content: space-between;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

//////////////////////////////////////////
//HEADING

export const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 36px;
      font-weight: 700;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 24px;
      font-weight: 700;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 18px;
      font-weight: 700;
    `}
  ${(props) =>
    props.type === "spaced" &&
    css`
      letter-spacing: 4px;
      word-spacing: 8px;
      text-align: center;
    `}
  ${(props) =>
    props.type === "subheading" &&
    css`
      font-weight: 300;
      text-align: center;
      padding: 12px;
    `}
  ${(props) =>
    props.type === "formsub" &&
    css`
      font-weight: 300;
      padding: 12px 0;
    `}

  line-height: 1.4;
`;

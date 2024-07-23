import styled, { css } from "styled-components";

const SectionWrapper = styled.section`
  background-color: var(--color-grey-0);
  /* border: 1px solid var(--color-grey-100); */
  border-radius: var(--border-radius-md);
  padding: 24px 40px;

  ${(props) =>
    props.type === "flex" &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--color-blue-100);
    `}
`;

const Section = ({ children, type }) => {
  return <SectionWrapper type={type}>{children}</SectionWrapper>;
};

export default Section;

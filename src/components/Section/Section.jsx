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
const SectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 1.2rem;
  text-align: center;
`;

const SectionSubtitle = styled.h3`
  font-size: 16px;
  margin-bottom: 36px;
  text-align: center;
  font-weight: 300;
`;

const Section = ({ children, title, subtitle, type }) => {
  return (
    <SectionWrapper type={type}>
      {title && <SectionTitle>{title}</SectionTitle>}
      {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
      {children}
    </SectionWrapper>
  );
};

export default Section;

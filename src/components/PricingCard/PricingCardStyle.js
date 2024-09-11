import styled, { css } from "styled-components";

export const PricingCardWrapper = styled.div`
  padding: 18px 0;
  border: 1px solid var(--color-grey-400);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 250px;
  gap: 12px;
  background-color: var(--color-grey-200);
  transition: background-color 0.3s;
  &:hover {
    background-color: var(--color-grey-300);
  }

  ${(props) =>
    props.$variant === "blue" &&
    css`
      background-color: var(--color-brand-100);

      &:hover {
        background-color: var(--color-brand-200);
      }
    `}
`;

export const PricingCardInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  border-bottom: 1px solid var(--color-grey-300);
`;

export const CardPrice = styled.p`
  font-size: 32px;
  font-weight: 700;
  padding: 8px 24px;
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-100);
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardList = styled.ul`
  padding: 8px;
  width: 100%;
`;

export const CardListItem = styled.li`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  padding: 4px 0;
  align-items: center;
  gap: 8px;

  &:first-child {
    border-top: none;
  }
`;

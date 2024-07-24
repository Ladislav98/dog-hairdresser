import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 1px solid var(--color-grey-200);
  border-radius: 8px;
  padding: 24px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SentenceList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const SentenceItem = styled.li`
  font-size: 24px;
  font-weight: 300;
  transition: border-left 0.2s;
  padding: 8px;
  cursor: pointer;

  ${(props) =>
    props.selected &&
    `
    border-left: 3px solid var(--color-grey-800);
  `}
`;

export const SentenceTitle = styled.p`
  font-size: 32px;
  font-weight: 600;
  padding-bottom: 4px;
`;

export const SentenceSubtitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: var(--color-grey-400);
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
`;
export const DogFigure = styled.figure`
  width: 320px;
  height: 300px;
`;

export const DogImage = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 8px;
  object-fit: cover;
  border: 1px solid var(--color-grey-300);
  border-radius: 8px;
`;

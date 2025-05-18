import styled from "styled-components";

export const MultipleDogsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  align-items: center;
`;

export const DogImage = styled.img`
  grid-area: center;
  width: 128px;
  height: 128px;
  border-radius: 8px 8px 0 0;
  object-fit: cover;
`;

export const DogCardWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 200px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DogName = styled.h2`
  font-size: 24px;
  color: #333;
`;

export const DogBreed = styled.p`
  font-size: 12px;
  color: #333;
`;

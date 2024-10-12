import styled from "styled-components";

export const StyledUserAvatar = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  color: var(--color-grey-600);
  cursor: pointer;
`;

export const Avatar = styled.img`
  display: block;
  width: 40px;
  width: 36px;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

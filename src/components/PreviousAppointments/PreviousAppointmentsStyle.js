import styled from "styled-components";

export const StyledTableContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: var(--color-grey-0);
  border-radius: 8px;
  border: 1px solid var(--color-grey-200);
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 20px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
`;

export const StyledTableData = styled.td`
  padding: 8px;
  border: 1px solid var(--color-grey-200);
  text-align: left;
  white-space: nowrap;
`;

export const StyledTableHeader = styled.th`
  padding: 12px;
  background-color: var(--color-grey-200);
  border: 1px solid var(--color-grey-300);
  text-align: left;
  font-weight: bold;
  white-space: nowrap;
`;

export const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background-color: var(--color-grey-50);
  }
  &:hover {
    background-color: var(--color-grey-200);
  }
`;

export const StyledBody = styled.tbody`
  background-color: white;
  width: 100%;
`;
export const StyledTableHead = styled.thead`
  border-bottom: 2px solid var(--color-grey-200);
`;

export const StyledTableTitle = styled.h2`
  font-size: 16px;
  color: var(--color-grey-600);
  text-align: center;
  font-weight: bold;
`;

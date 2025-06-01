import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import Select from "../Select/Select";
import { useEffect } from "react";

const StyledSort = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const sortOptions = [
  { value: "date-asc", label: "Date (asc)" },
  { value: "date-desc", label: "Date (desc)" },
  { value: "price-asc", label: "Price (low to high)" },
  { value: "price-desc", label: "Price (high to low)" },
  { value: "dogName-asc", label: "Dog Name (A-Z)" },
  { value: "dogName-desc", label: "Dog Name (Z-A)" },
];

function SortBy() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");

  function handleChange(e) {
    const selected = e.target.value;
    searchParams.set("sortBy", selected);
    setSearchParams(searchParams);
  }

  return (
    <StyledSort>
      <Select options={sortOptions} value={sortBy} onChange={handleChange} />
    </StyledSort>
  );
}

export default SortBy;

import DatePicker from "react-datepicker";
import styled from "styled-components";

export const StyledAppointmentSelection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  width: 240px;

  .react-datepicker {
    font-size: 16px;
  }
  .react-datepicker__header {
    padding-top: 12.8px;
  }
  .react-datepicker__month {
    margin: 6.4px 16px;
  }
  .react-datepicker__day-name,
  .react-datepicker__day {
    width: 30.4px;
    line-height: 30.4px;
    margin: 2.656px;
  }
  .react-datepicker__current-month {
    font-size: 16px;
  }
  .react-datepicker__navigation {
    top: 16px;
    line-height: 27.2px;
  }
  .react-datepicker__navigation--previous {
    border-right-color: #ccc;
    left: 16px;
  }
  .react-datepicker__navigation--next {
    border-left-color: #ccc;
    right: 16px;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid var(--color-grey-300);
  border-radius: 5px;
  color: var(--color-grey-700);
  margin: 0;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: var(--color-indigo-700);
    margin: 0;
  }

  &::placeholder {
    color: var(--color-grey-700);
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid var(--color-grey-300);
  border-radius: 5px;
  color: var(--color-grey-700);
  outline: none;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: var(--color-indigo-700);
  }
`;

export const AdditionalInfo = styled.p`
  font-size: 12px;
  font-weight: 300;
  margin-top: 8px;
  color: var(--color-grey-500);
`;

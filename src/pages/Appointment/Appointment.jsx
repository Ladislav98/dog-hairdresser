import Calendar from "../../components/appointments/Calendar/Calendar";
import "react-datepicker/dist/react-datepicker.css";
import Section from "../../components/Section/Section";
import styled from "styled-components";

const DateAndTimePicker = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-grey-300);
  width: 450px;
  padding: 16px;
  justify-content: center;
`;

function Appointment() {
  return (
    <Section title="Book an appointment">
      <DateAndTimePicker>
        <Calendar />
      </DateAndTimePicker>
    </Section>
  );
}

export default Appointment;

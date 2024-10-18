import AppointmentSelection from "../../components/appointments/AppointmentSelection/AppointmentSelection";
import "react-datepicker/dist/react-datepicker.css";
import Section from "../../components/Section/Section";
import styled from "styled-components";

const StyledAppointment = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  padding: 16px;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-grey-700);
`;

function Appointment() {
  return (
    <Section title="Book an appointment">
      <StyledAppointment>
        <AppointmentSelection />
      </StyledAppointment>
    </Section>
  );
}

export default Appointment;

import AppointmentSelection from "../../components/appointments/AppointmentSelection/AppointmentSelection";
import "react-datepicker/dist/react-datepicker.css";
import Section from "../../components/Section/Section";
import styled from "styled-components";

const StyledAppointment = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  justify-content: space-around;
  align-items: center;
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

import { format } from "date-fns";
import { useUserAppointments } from "../appointments/useUserAppointments";
import {
  StyledBody,
  StyledTable,
  StyledTableContainer,
  StyledTableData,
  StyledTableHead,
  StyledTableHeader,
  StyledTableRow,
  StyledTableTitle,
} from "./PreviousAppointmentsStyle";

function PreviousAppointments() {
  const { appointments, isLoading, error } = useUserAppointments();

  if (isLoading) return <p>Loading appointments...</p>;
  if (error) return <p>Error fetching appointments: {error.message}</p>;

  if (!appointments || appointments.length === 0)
    return <p>No previous appointments found.</p>;

  return (
    <StyledTableContainer>
      <StyledTableTitle>Previous Appointments</StyledTableTitle>

      <StyledTable>
        <StyledTableHead>
          <StyledTableRow>
            <StyledTableHeader>Dog</StyledTableHeader>
            <StyledTableHeader>Date</StyledTableHeader>
            <StyledTableHeader>Time</StyledTableHeader>
            <StyledTableHeader>Service</StyledTableHeader>
            {/* <StyledTableHeader>Status</StyledTableHeader> */}
            <StyledTableHeader>Price</StyledTableHeader>
          </StyledTableRow>
        </StyledTableHead>
        <StyledBody>
          {appointments.map((appointment) => (
            <StyledTableRow key={appointment.id}>
              <StyledTableData>{appointment.dogs.dogName}</StyledTableData>
              <StyledTableData>
                {format(new Date(appointment.appointmentDate), "dd/MM/yyyy")}
              </StyledTableData>
              <StyledTableData>{appointment.appointmentTime}</StyledTableData>
              <StyledTableData>{appointment.serviceName}</StyledTableData>
              {/* <StyledTableData>{appointment.status}</StyledTableData> */}
              <StyledTableData>{`${appointment.price}€`}</StyledTableData>
            </StyledTableRow>
          ))}
        </StyledBody>
      </StyledTable>
    </StyledTableContainer>
  );
}

export default PreviousAppointments;

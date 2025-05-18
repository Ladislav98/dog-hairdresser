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
import { Row } from "../../styles/generalStyles";
import { useSearchParams } from "react-router-dom";
import FilterService from "../FilterService/FilterService";

function PreviousAppointments() {
  const { appointments, isLoading, error } = useUserAppointments();
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("service") || "all";

  if (isLoading) return <p>Loading appointments...</p>;
  if (error) return <p>Error fetching appointments: {error.message}</p>;

  if (!appointments || appointments.length === 0)
    return <p>No previous appointments found.</p>;

  let filteredAppointments;
  //moze bit i reusable filter
  if (filterValue === "all") {
    filteredAppointments = appointments;
  }
  if (filterValue === "classic-plan") {
    filteredAppointments = appointments.filter(
      (appointment) => appointment.serviceName === "Classic Plan"
    );
  }
  if (filterValue === "full-plan") {
    filteredAppointments = appointments.filter(
      (appointment) => appointment.serviceName === "Full Plan"
    );
  }

  return (
    <StyledTableContainer>
      <Row type="horizontal">
        <StyledTableTitle>Previous Appointments</StyledTableTitle>
        <FilterService />
      </Row>

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
          {filteredAppointments.map((appointment) => (
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

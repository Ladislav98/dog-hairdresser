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
import SortBy from "../SortBy/SortBy";

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

  //sorting
  const sortBy = searchParams.get("sortBy") || "date-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  const sortedAppointments = [...filteredAppointments].sort((a, b) => {
    if (field === "dogName") {
      return a.dogs.dogName.localeCompare(b.dogs.dogName) * modifier;
    }
    if (field === "date") {
      return (
        (new Date(a.appointmentDate) - new Date(b.appointmentDate)) * modifier
      );
    }
    if (field === "price") {
      return (a.price - b.price) * modifier;
    }
    return 0;
  });

  return (
    <StyledTableContainer>
      <Row type="horizontal">
        <StyledTableTitle>Previous Appointments</StyledTableTitle>
        <FilterService />
        <SortBy />
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
          {sortedAppointments.map((appointment) => (
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

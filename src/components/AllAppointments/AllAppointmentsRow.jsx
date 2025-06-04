import styled from "styled-components";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

function AllAppointmentsRow({ appointment }) {
  return (
    <TableRow>
      <td>{appointment.dogName}</td>
      <td>{appointment.appointmentDate}</td>
      <td>{appointment.appointmentTime}</td>
      <td>{appointment.serviceName}</td>
      <td>{appointment.status}</td>
      <td>{appointment.price}</td>
    </TableRow>
  );
}

export default AllAppointmentsRow;

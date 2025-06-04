import styled from "styled-components";
import { Row } from "../../styles/generalStyles";
import AllAppointmentsRow from "./AllAppointmentsRow";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

//write fake data for appointments
const appointments = [
  {
    id: 1,
    dogName: "Buddy",
    appointmentDate: "2023-10-01",
    appointmentTime: "10:00 AM",
    serviceName: "Full Plan",
    status: "Completed",
    price: "120€",
  },
  {
    id: 2,
    dogName: "Bella",
    appointmentDate: "2023-10-02",
    appointmentTime: "11:00 AM",
    serviceName: "Classic Plan",
    status: "Pending",
    price: "50€",
  },
  // Add more appointments as needed
];

function AllAppointments() {
  return (
    <div>
      <Table>
        <TableHeader>
          <div>Dog</div>
          <div>Date</div>
          <div>Time</div>
          <div>Service</div>
          <div>Status</div>
          <div>Price</div>
        </TableHeader>
        <tbody>
          {appointments.map((appointment) => (
            <AllAppointmentsRow
              appointment={appointment}
              key={appointment.id}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AllAppointments;

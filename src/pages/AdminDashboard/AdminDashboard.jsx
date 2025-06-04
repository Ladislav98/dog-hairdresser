import AllAppointments from "../../components/AllAppointments/AllAppointments";
import ProfitChart from "../../components/charts/ProfitChart/ProfitChart";
import Section from "../../components/Section/Section";

function AdminDashboard() {
  return (
    <>
      <Section title="Admin Dashboard">
        <ProfitChart />
        <AllAppointments />
      </Section>
    </>
  );
}

export default AdminDashboard;

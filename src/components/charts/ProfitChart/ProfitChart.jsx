import styled from "styled-components";
import { Heading } from "../../../styles/generalStyles";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const ChartBox = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  padding: 18px 24px;
  width: 440px;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;

const data = [
  {
    month: "January",
    profit: 4000,
  },
  {
    month: "February",
    profit: 5000,
  },
  {
    month: "March",
    profit: 3000,
  },
  {
    month: "April",
    profit: 6000,
  },
  {
    month: "May",
    profit: 7000,
  },
  {
    month: "June",
    profit: 8000,
  },
  {
    month: "July",
    profit: 9000,
  },
  {
    month: "August",
    profit: 10000,
  },
  {
    month: "September",
    profit: 11000,
  },
  {
    month: "October",
    profit: 12000,
  },
  {
    month: "November",
    profit: 2000,
  },
  {
    month: "December",
    profit: 14000,
  },
];

function ProfitChart() {
  return (
    <ChartBox>
      <Heading as="h3">Profit by month</Heading>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart width={300} height={100} data={data}>
          <Line type="monotone" dataKey="profit" stroke="#8884d8" />
          <XAxis dataKey="month" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}

export default ProfitChart;

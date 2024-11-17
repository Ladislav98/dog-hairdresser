import {
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { useSpendingDogData } from "../useSpendingDogData";
import styled from "styled-components";
import { Heading } from "../../../styles/generalStyles";

const ChartBox = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 18px 24px;

  width: 320px;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;

function DogSpendingChart({ userId }) {
  // Fetch user spending data (from useSpendingDogData hook)
  const { spendingData, isLoading, error } = useSpendingDogData({ userId });

  if (!userId) {
    return <p>Error: No user ID provided to the chart.</p>;
  }
  // Handle loading and error states
  if (isLoading) return <p>Loading chart...</p>;
  if (error) return <p>Error loading data: {error.message} </p>;

  if (!spendingData || spendingData.length === 0) {
    return <p>No data available for the chart.</p>;
  }

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1"];

  return (
    <ChartBox>
      <Heading as="h3">Spending by dog</Heading>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={spendingData}
            dataKey="total_spent"
            nameKey="dog_name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={48}
            fill="#8884d8"
          >
            {spendingData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            width="10%"
            layout="vertical"
            iconSize={15}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}

export default DogSpendingChart;

import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

const Container = styled.div`
  width: 100%;
  /* height: 350px; */
`;
interface Props {
  data: any;
}

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
};
const Chart = ({ data }: Props) => {
  // TODO: continue working on the chart to make it perfect
  return (
    <Container>
      <Line data={data} options={options} />
    </Container>
  );
};

export default Chart;

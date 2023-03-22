import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
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
  h4 {
    font-size: 16.0875px;
    line-height: 19px;
  }

  .trends_up {
  }

  .cellular {
    background: #0177fb;
    border-radius: 4.3875px;
    color: #fff;
  }

  .row {
    display: flex;
    justify-content: space-between;
    margin-right: 40px;
    margin-bottom: 15px;
  }

  .dropdown {
    border: 0.73125px solid #e5e9f4;
    border-radius: 12.9443px;
    padding: 7px;
    padding-right: 3px;
    display: flex;
    align-items: center;
  }
  .savings_group, .saving_group {
    display: flex;
    align-items: center;
  }
  .savings_group {
    column-gap: 20px;
  }
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
      <div className="chart_header">
        <div className="row">
          <h4>Money Flow</h4>
          <p>
            <TrendingUpIcon className="trends_up"/>
            <SignalCellularAltIcon className="cellular"/>
          </p>
        </div>
        <div className="row">
          <div className="savings_group">
            <div className="saving_group">
              <TrendingUpIcon/> <span>Savings</span>
            </div>
            <div className="saving_group">
              <TrendingUpIcon/> <span>+6.79%</span>
            </div>
          </div>
          <div className="dropdown">
            Week <ArrowDropDownIcon/>
          </div>
        </div>
      </div>
      <Line data={data} options={options} />
    </Container>
  );
};

export default Chart;

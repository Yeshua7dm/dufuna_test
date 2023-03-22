import React from "react";
import styled from "styled-components";
import TabIcon from "@mui/icons-material/Tab";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HubIcon from "@mui/icons-material/Hub";
import StatOption from "./StatOption";

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 14.625px 80.4375px -21.9375px rgba(43, 37, 37, 0.12);
  border-radius: 10.2375px;
  padding: 41px 30px;

  .stats_items {
    display: flex;
    justify-content: space-between;
    column-gap: 7px;
    width: 100%;
    margin-bottom: 20px;
  }
`;

const items = [
  {
    icon: <HubIcon sx={{ color: "#7468E4" }} />,
    color: "#EFECFD",
    number: "220k",
    text: "customers",
  },
  {
    icon: <TabIcon sx={{ color: "#51D5EC" }} />,
    color: "#E4F8FB",
    number: "230k",
    text: "Remittance",
  },
  {
    icon: <ShoppingCartIcon sx={{ color: "#22B573" }} />,
    color: "#E5F7ED",
    number: "270k",
    text: "Donation",
  },
  {
    icon: <AccessTimeIcon sx={{ color: "#FFB648" }} />,
    color: "#FDF1E2",
    number: "130k",
    text: "Watchtime",
  },
];
const Statistics = () => {
  return (
    <Container>
      <h3 className="stat_title">Statistics</h3>
      <div className="stats_items">
        {items.map((item, index) => (
          <StatOption
            key={index}
            icon={item.icon}
            number={item.number}
            text={item.text}
            color={item.color}
          />
        ))}
      </div>
    </Container>
  );
};

export default Statistics;

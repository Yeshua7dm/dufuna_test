import React, { useState } from "react";
import styled from "styled-components";
import RecentTransactions from "../components/RecentTransactions";
import Statistics from "../components/Statistics";
import Chart from "../components/Chart";
import RecentContacts from "../components/RecentContacts";
import GroupParty from "../components/GroupParty";
import { data as userData } from "../data/chartData";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 45px;

  .money_flow_contacts {
    display: grid;
    grid-template-columns: 3fr 2fr;
    column-gap: 30px;
  }

  .contact_party {
    display: flex;
    flex-direction: column;
    row-gap: 23px;
  }
`;

const Data = () => {
  const [data, setData] = useState({
    labels: userData.map((data) => `${data.month} ${data.day}`),
    datasets: [
      {
        label: "Savings",
        data: userData.map((data) => data.income),
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        cubicInterpolationMode: "monotone",
        
      },
    ],
  });

  return (
    <Container>
      <div className="money_flow_contacts">
        <Chart data={data} />
        <div className="contact_party">
          <RecentContacts />
          <GroupParty />
        </div>
      </div>
      <RecentTransactions />
      <Statistics />
    </Container>
  );
};

export default Data;

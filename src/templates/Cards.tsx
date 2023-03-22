import React from "react";
import styled from "styled-components";
import CreditCard from "../components/CreditCard";
import SendMoney from "../components/SendMoney";
import QuickTransfer from "../components/QuickTransfer";

const Container = styled.div`
  width: 205px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  height: 100vh;
`;

const Cards = () => {
  return (
    <Container>
      <CreditCard />
      <SendMoney/>
      <QuickTransfer/>
    </Container>
  );
};

export default Cards;

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px 57px;
  column-gap: 60px;
  align-items: center;

  img {
    width: 29.25px;
    height: 29.25px;
    background: #e8edff;
    border-radius: 50%;
  }
  .flex {
    display: flex;
    align-items: center;
  }
  .txn_details {
    justify-content: space-between;
  }

  .txn_status {
    border-radius: 3.65625px;
    align-items: center;
    text-align: center;
    padding: 4px;
  }
  .success {
    color: #61bb84;
    background: #ebfff3;
  }
  .pending {
    color: #ffaa90;
    background: #fff1ed;
  }
`;

// type status = "Pending" | "Success" | "Failed";
interface Props {
  icon: any;
  transaction: string;
  date: string;
  card: string;
  status: string;
  amount: string;
}
const Transaction = ({
  icon,
  transaction,
  date,
  card,
  status,
  amount,
}: Props) => {
  return (
    <Container>
      <div className="txn_image flex">
        <img src={icon} alt={transaction} />
        <p>{transaction}</p>
      </div>
      <div className="txn_details flex">
        <p>{date}</p>
        <p>{card}</p>
        <p>{amount}</p>
      </div>
      <p
        className={
          status == "Success" ? `txn_status success` : "txn_status pending"
        }
      >
        {status}
      </p>
    </Container>
  );
};

export default Transaction;

import React from "react";
import styled from "styled-components";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Transaction from "./Transaction";

import bitcoin from "../assets/bitcoin.svg";
import txn2 from "../assets/txn_2.svg";
import paypal from "../assets/paypal.svg";

const Container = styled.div`
  width: 100%;

  .transactions_title_head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    p,
    .small {
      font-size: 10px;
      line-height: 12px;
      color: #5e636a;
    }
    p {
      text-align: center;
      align-items: center;
      cursor: pointer;
    }
  }

  .transactions {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }
`;

const transactions = [
  {
    icon: bitcoin,
    transaction: "Bitcoin Transactions",
    date: "Jan 16, 2020",
    card: "*****45242",
    status: "Success",
    amount: "-$853.00",
  },
  {
    icon: txn2,
    transaction: "Send to anitonia",
    date: "Jan 16, 2020",
    card: "*****87212",
    status: "Pending",
    amount: "-$153.00",
  },
  {
    icon: paypal,
    transaction: "Withdraw Paypal",
    date: "Jan 16, 2020",
    card: "*****36275",
    status: "Success",
    amount: "+$223.00",
  },
];
const RecentTransactions = () => {
  return (
    <Container>
      <div className="transactions_title_head">
        <h3>Recent Transactions</h3>
        <p>
          View all <NavigateNextIcon className="small" />
        </p>
      </div>
      <div className="transactions">
        {transactions.map(
          ({ icon, card, date, status, transaction, amount }, index) => (
            <Transaction
              key={index}
              icon={icon}
              card={card}
              date={date}
              status={status}
              amount={amount}
              transaction={transaction}
            />
          )
        )}
      </div>
    </Container>
  );
};

export default RecentTransactions;

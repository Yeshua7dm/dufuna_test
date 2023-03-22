import React from "react";
import styled from "styled-components";
import logo from "../assets/Mastercard-logo.svg";
import TransferOption from "./TransferOption";

import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";

const Container = styled.div`
  border: 0.566969px solid #e8e8e8;
  border-radius: 10.2375px;
  padding: 14px 12px;

  h3 {
    font-size: 11.3394px;
    line-height: 13px;
    color: #141736;
  }

  .card_one,
  .amount_split,
  .recipient_name {
    display: flex;
    justify-content: space-between;
  }
  label {
    color: #a8b1bf;
  }
  .card_one {
    padding: 15px;
    align-items: center;
    margin-top: 10px;
    color: #798ba3;

    .debit {
      font-size: 8.775px;
      line-height: 10px;
      display: flex;
      align-items: center;
    }
    .logo {
      height: 15px;
    }
    .amount_selected {
      text-align: right;
      /* width: fit-content; */
    }
    .card_type {
      display: flex;
      justify-content: flex-start;
      column-gap: 3px;
    }
  }

  .card_amount {
    border: 1.13394px solid #819cfd;
    border-radius: 7.93757px;
    background: #fff;
    padding: 10px;
    color: #3d424b;

    .title_bar {
      font-size: 10.2375px;
      line-height: 12px;
      color: #798ba3;
      align-items: center;
      display: flex;
      column-gap: 8px;
    }

    .amount_split,
    .amount_split input {
      font-size: 14.7412px;
      line-height: 17px;
      font-weight: 500;
    }

    .amount_input {
      display: flex;
      padding: 6px 0 0 0;
    }
    input {
      border: none;
      width: 70px;
      font-size: 14.7412px;
      line-height: 17px;
      font-weight: 500;
    }
  }

  .transfer_options {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 7px;
    width: 100%;
    margin-bottom: 20px;
  }
`;

const options = [
  { icon: <IosShareOutlinedIcon sx={{ color: "#A789FF" }} />, text: "Send" },
  {
    icon: <IosShareOutlinedIcon sx={{ color: "#83DEA4" }} />,
    text: "Receive",
  },
  {
    icon: <ReceiptOutlinedIcon sx={{ color: "#FCE37E" }} />,
    text: "Invoicing",
  },
  { icon: <WidgetsOutlinedIcon sx={{ color: "#436CFB" }} />, text: "More" },
];
const QuickTransfer = () => {
  return (
    <Container>
      <h3>Quick Transfer</h3>

      <div className="card_one">
        <div className="card_type">
          <img src={logo} alt="logo" className="logo" />
          <p className="debit">Debit</p>
        </div>
        <div className="amount_selected">
          <p>
            <span className="currency">$</span>10.680
          </p>
        </div>
      </div>

      <div className="card_amount">
        <div className="title_bar">
          <label htmlFor="amount">Enter amount</label>
        </div>
        <div className="amount_split">
          <div className="amount_input">
            <span className="currency">$</span>
            <input type="text" name="amount" id="amount" placeholder="800.00" />
          </div>
          <div className="flags_merge"></div>
        </div>
      </div>

      <div className="transfer_options">
        {options.map((option, index) => (
          <TransferOption icon={option.icon} text={option.text} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default QuickTransfer;

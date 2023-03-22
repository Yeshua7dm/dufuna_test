import React from "react";
import styled from "styled-components";
import logo from "../assets/Mastercard-logo.svg";
import sender from "../assets/send_money.svg";
import astrid from "../assets/astrid.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  div {
    width: 100%;
  }

  .btn {
    background: #0177fb;
    border-radius: 16px;
    padding: 15px;
    display: flex;
    justify-content: center;
    text-align: center;
    color: #fff;
    margin: 20px 0;
  }
  .card_one,
  .amount_split,
  .recipient_name {
    display: flex;
    justify-content: space-between;
  }

  .card_one {
    box-shadow: 0px 10.9688px 21.9375px rgba(122, 122, 122, 0.2);
    border-radius: 10.2375px;
    padding: 15px;
    align-items: center;
    margin-top: 10px;

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

  .currency {
    color: #a4b4cb;
  }

  /* card 2 */
  .card_amount {
    box-shadow: 0px 10.9688px 21.9375px rgba(118, 118, 118, 0.2);
    border-radius: 10px;
    background: #fff;
    margin: 20px 0;
    padding: 5px 15px;

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
      font-size: 21.2062px;
      line-height: 25px;
    }

    .amount_input {
      display: flex;
      padding: 13px 0;
      column-gap: 3px;
    }
    input {
      border: none;
      width: 70px;
      /* display: inline; */
    }
  }

  .recipient_name {
    font-size: 11.7px;
    line-height: 14px;
    color: #000000;

    .addBtn {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #dff3fe;
      color: #0177fb;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .recipient {
      display: flex;
      align-items: center;
      column-gap: 10px;
      font-weight: 500;
    }
  }
`;

const SendMoney = () => {
  return (
    <Container>
      <h2>Send Money</h2>
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
          <img src={sender} alt="sender" className="image_icon" />
          <label htmlFor="amount">Enter the amount</label>
        </div>
        <div className="amount_split">
          <div className="amount_input">
            <span className="currency">$</span>
            <input type="text" name="amount" id="amount" placeholder="800.00" />
          </div>
          <div className="flags_merge"></div>
        </div>
      </div>

      <div className="recipient_name">
        <div className="recipient">
          <img src={astrid} alt="astrid" className="recipient_icon" />
          <p className="recipient_name">Astrid Hayes</p>
        </div>
        <div className="addBtn">+</div>
      </div>
      <div className="btn">Send Money</div>
    </Container>
  );
};

export default SendMoney;

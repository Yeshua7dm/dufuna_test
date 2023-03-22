import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 110px;
  width: 100%;
  border-radius: 12px;
  /* background: linear-gradient(
    210.62deg,
    rgba(1, 119, 251, 0) -10.57%,
    #1d88ff 40.86%,
    rgba(1, 119, 251, 0) 105.6%
  ); */
  background: #0177fb;
  padding: 10px 20px 6px 10px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .card_details {
    display: flex;
    justify-content: space-between;
  }
  .name_title {
    font-size: 8px;
    line-height: 10px;
  }
  .holder_name {
    font-size: 13px;
    line-height: 15px;
  }
  .card_number {
    font-size: 10.2375px;
    line-height: 12px;
  }
  .card_exp {
    font-size: 8px;
    line-height: 9px;
  }
`;

const CreditCard = () => {
  return (
    <Container>
      <div className="name">
        <p className="name_title">Name</p>
        <p className="holder_name">Carla Rosser</p>
      </div>
      <div className="card_details">
        <div className="card_info">
          <p className="card_number">1200 01452 54215</p>
          <span className="card_exp">08/21</span>
        </div>
        <p className="card_issuer">VISA</p>
      </div>
    </Container>
  );
};

export default CreditCard;

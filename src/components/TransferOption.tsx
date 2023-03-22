import React from "react";
import styled from "styled-components";
const Container = styled.div`
text-align: center;
  p {
    font-size: 9.50625px;
    line-height: 11px;
  }
  .icon_container {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    border: 0.73125px solid #f2f2f2;
    justify-content: center;
    border-radius: 7.3125px;
    margin: 15px 0;
  }
`;
interface Prop {
  icon: any;
  text: string;
}
const TransferOption = ({ icon, text }: Prop) => {
  return (
    <Container>
      <div className="icon_container">{icon}</div>
      <p>{text}</p>
    </Container>
  );
};

export default TransferOption;

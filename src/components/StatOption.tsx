import React from "react";
import styled from "styled-components";

const Container = styled.div`
display: flex;
align-items: center;

  .icon_container {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 15px 0;
  }
`;
interface Prop {
  icon: any;
  number: string;
  text: string;
  color: string;
}

const StatOption = ({ icon, number, text, color }: Prop) => {
  return (
    <Container>
      <div className="icon_container" style={{ backgroundColor: `${color}` }}>
        {icon}
      </div>
      <div className="text_data">
        <p className="number_data">{number}</p>
        <p className="text">{text}</p>
      </div>
    </Container>
  );
};

export default StatOption;

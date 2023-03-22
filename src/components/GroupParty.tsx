import React from "react";
import styled from "styled-components";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import member1 from "../assets/member1.svg";

import member2 from "../assets/member2.svg";
import member3 from "../assets/member3.svg";
import dokota from "../assets/dokota.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100;
  padding: 13px 16px;
  background: #ffffff;
  box-shadow: 0px 3.65625px 16.8187px rgba(0, 0, 0, 0.06);
  border-radius: 8.04375px;

  .flex {
    display: flex;
    align-items: center;
  }

  .title {
    font-size: 11.7px;
    line-height: 14px;

    .fade {
      color: #7c8ca6;
    }
    .dark {
      color: #141736;
    }
  }

  .group_members {
    justify-content: space-between;

    .member_icons img {
      /* width: 17.55px;
        height: 17.55px; */
    }

    .shift {
      margin-left: -3px;
      border: 2px solid white;
      border-radius: 50%;
    }

    .member_count {
      font-size: 10.9688px;
      line-height: 13px;
      border: 0.7px dashed #dde5f0;
      color: #0176fa;
      border-radius: 50%;
      margin-left: 15px;
    }

    .messages {
      color: #92929d;
    }
  }

  .group_user {
    justify-content: space-between;
    margin: 10px 0;

    .name {
      line-height: 14px;
      font-size: 11.7px;
      font-weight: 500;
      color: #131635;
    }

    .income {
      font-size: 10.2375px;
      line-height: 12px;
      color: #7d8da6;
    }
    .user_data {
      margin-left: 12px;
    }
    .next {
      color: #a5b4cb;
    }
  }
`;

const GroupParty = () => {
  return (
    <Container>
      <div className="title">
        <span className="fade">Group </span>
        <span className="dark">Party</span>
      </div>
      <div className="group_members flex">
        <div className="members flex">
          <div className="member_icons flex">
            <img src={member1} alt="image" />
            <img className="shift" src={member2} alt="image" />
            <img className="shift" src={member3} alt="image" />
          </div>
          <p className="member_count">+5</p>
        </div>
        <MarkChatUnreadOutlinedIcon className="messages" />
      </div>
      <div className="group_user flex">
        <div className="user flex">
          <img src={dokota} alt="dokota" />
          <div className="user_data">
            <p className="name">Dakota Milk</p>
            <p className="income">$ 420.00</p>
          </div>
        </div>
        <NavigateNextIcon className="next" />
      </div>
    </Container>
  );
};

export default GroupParty;

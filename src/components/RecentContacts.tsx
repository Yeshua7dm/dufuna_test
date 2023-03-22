import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import CreateIcon from "@mui/icons-material/Create";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import contact2 from "../assets/DS.svg";
import contact1 from "../assets/txn_2.svg";
import contact3 from "../assets/contact1.svg";
import contact4 from "../assets/contact4.svg";
import contact5 from "../assets/contact5.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 11px;

  .contacts_icons_list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0 15px 0;

    img {
      width: 24px;
      height: 24px;
      background: #ffeff0;
      border-radius: 50%;
    }
  }

  .contacts_title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .top {
      font-size: 13.1625px;
      line-height: 15px;
      /* identical to box height */

      color: #131635;
    }

    .top_icon {
      color: #1e1f20;
      font-size: 10px;
    }
  }
`;

const RecentContacts = () => {
  return (
    <Container>
      <div className="contacts_title">
        <p className="top">Recent Contacts</p>
        <div className="icons">
          <CreateIcon className="top_icon" />{" "}
          <SearchIcon className="top_icon" />
        </div>
      </div>
      <div className="recipients">18 recipients</div>
      <div className="contacts_icons_list flex">
        <img src={contact1} alt="contact" />
        <img src={contact2} alt="contact" />
        <img src={contact3} alt="contact" />
        <img src={contact4} alt="contact" />
        <img src={contact5} alt="contact" />
        <NavigateNextIcon />
      </div>
    </Container>
  );
};

export default RecentContacts;

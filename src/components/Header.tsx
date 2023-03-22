import React from "react";
import styled from "styled-components";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SearchIcon from "@mui/icons-material/Search";
import main_user from "../assets/main_user.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0 25px 3px;

  nav {
    display: flex;
    column-gap: 20px;
    color: #c1c1c1;
  }
`;

const Header = () => {
  return (
    <Container>
      <h2 className="header_title">My Card</h2>
      <nav>
        <SearchIcon />
        <NotificationsActiveIcon />
        <img src={main_user} alt="user" />
      </nav>
    </Container>
  );
};

export default Header;

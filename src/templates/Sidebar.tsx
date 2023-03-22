import React, { useState } from "react";
import styled from "styled-components";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import { NavLink } from "react-router-dom";

const SideNav = styled.div`
  width: 175px;
  height: 100vh;
  padding: 20px;
  font-size: 11px;
  border-right: 2px solid #e8ecf5;

  .sideItem {
    display: flex;
    align-items: center;
    padding: 8px;
    cursor: pointer;
    column-gap: 10px;
    text-decoration: none;
  }

  .activeItem {
    background: #e5f1ff;
    border-radius: 4px;
    color: #0177fd;
    font-weight: 500;
  }
  main {
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 20px;
    justify-content: space-between;
  }
`;

const navData = [
  {
    icon: <HomeOutlinedIcon />,
    text: "Dashboard",
    link: "/",
  },
  {
    icon: <ReceiptOutlinedIcon />,
    text: "Invoices",
    link: "/i",
  },
  {
    icon: <SmsOutlinedIcon />,
    text: "Messages",
    link: "/m",
  },
  {
    icon: <CreditCardOutlinedIcon />,
    text: "My Wallets",
    link: "/w",
  },
  {
    icon: <PieChartOutlinedIcon />,
    text: "Activity",
    link: "/a",
  },
  {
    icon: <InsertChartOutlinedIcon />,
    text: "Analytics",
    link: "/n",
  },
];

const Sidebar = () => {
  return (
    <SideNav>
      <div>
        <header>
          <img src={""} alt="logo" />
          <h1>OpenPay</h1>
        </header>
        <main>
          <div className="main">
            {navData.map((item, index) => (
              <NavLink
                key={index}
                className={({ isActive }) =>
                  isActive ? "sideItem activeItem" : "sideItem"
                }
                to={item.link}
                onClick={(e) => {
                  console.log(e, item);
                }}
              >
                {item.icon}
                <span className="linkText">{item.text}</span>
              </NavLink>
            ))}
          </div>
        </main>
      </div>
    </SideNav>
  );
};

export default Sidebar;

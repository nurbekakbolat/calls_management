import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Typography } from "@mui/material";

import { Link } from "react-router-dom";

import {
  BsGraphUp,
  BsTelephone,
  BsCheck2All,
  BsPerson,
  BsBriefcase,
} from "react-icons/bs";

import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePeople } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { BiBookReader } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

export function Sbar() {
  const sbarList = [
    { icon: <BsGraphUp size={12} />, caption: "Итоги", link: "/results" },
    { icon: <BsCheck2All size={12} />, caption: "Заказы", link: "/orders" },
    {
      icon: <AiOutlineMail size={12} />,
      caption: "Сообщения",
      link: "/messages",
    },
    { icon: <BsTelephone size={12} />, caption: "Звонки", link: "/calls" },
    {
      icon: <MdOutlinePeople size={12} />,
      caption: "Контрагенты",
      link: "/agents",
    },
    { icon: <GrDocumentText size={12} />, caption: "Документы", link: "/docs" },
    {
      icon: <BsPerson size={12} />,
      caption: "Исполнители",
      link: "/contractors",
    },
    { icon: <BsBriefcase size={12} />, caption: "Отчеты", link: "/reports" },
    {
      icon: <BiBookReader size={12} />,
      caption: "База знаний",
      link: "/database",
    },
    { icon: <FiSettings size={12} />, caption: "Настройки", link: "/settings" },
  ];

  return (
    <Sidebar
      width="240px"
      style={{
        height: "100vh",
        position: "sticky",
        top: 0,
        overflow: "auto",
        backgroundColor: "#091336",
        opacity: 1,
      }}
    >
      <Menu style={{ textAlign: "left" }}>
        <MenuItem
          component={<Link to="/" />}
          style={{
            textAlign: "left",
            margin: "20px auto",
            marginBottom: "50px",
            color: "#FFD500",
          }}
        >
          <Typography variant="h4">Skilla JS</Typography>
        </MenuItem>

        {sbarList.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            component={
              <Link
                to={item.link}
                style={{
                  marginLeft: 0,
                }}
              />
            }
          >
            <Typography variant="body2" style={{ fontSize: "14px" }}>
              {item.caption}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Sidebar>
  );
}

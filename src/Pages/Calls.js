import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { NativeSelect, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsChevronLeft, BsChevronRight, BsCalendar } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiFillPlusCircle } from "react-icons/ai";

import { MdCallReceived, MdCallMade } from "react-icons/md";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import axios from "axios";
import Topbar from "../Components/Topbar";
import Filterbar from "../Components/Filtersbar";
import "./Calls.css";
import data from "../SampleData.json";
function Calls() {
  const [calls, setCalls] = useState([]);
  const [tempCalls, setTempCalls] = useState([]);
  const [openTypes, setOpenTypes] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [typeCaption, setTypeCaption] = useState("Все типы");

  const token = "testtoken";
  const loadCalls = async () => {
    const startDate = "2022-01-01";
    const endDate = "2023-01-01";
    const url = `https://api.skilla.ru/mango/getList`;

    const requestData = {
      date_start: startDate,
      date_end: endDate,
      in_out: "0",
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios
      .post(url, requestData, config)
      .then((response) => {
        console.log("Response:", response.data);
        setTempCalls(response.data.results);
        setCalls(response.data.results);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    // setCalls(data);
    // setTempCalls(data);
    loadCalls();
  }, []);
  const getTime = (dateString) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleTimeString("en-GB", { timeStyle: "short" });
  };
  const sortByCalls = (type) => {
    if (type === "in") {
      const inCalls = tempCalls.filter((call) => call.in_out === 1);
      setTypeCaption("Исходящие");
      setCalls(inCalls);
    } else if (type === "out") {
      const outCalls = tempCalls.filter((call) => call.in_out === 0);
      setTypeCaption("Входящие");
      setCalls(outCalls);
    } else {
      setTypeCaption("Все звонки");
      setCalls(tempCalls);
    }
    console.log(calls);
  };
  const handleButtonClick = (event) => {
    if (anchorEl === event.currentTarget) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const getDate = (filteredCalls) => {
    console.log("Filtered Calls:", filteredCalls);
    setCalls(filteredCalls);
  };
  return (
    <Box>
      <Topbar props={calls} />
      <Filterbar calls={tempCalls} filterDate={getDate} />
      <Box sx={{ margin: "0 120px 10px 120px" }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "#e5e5e5" }}
          elevation={0}
        >
          <Toolbar>
            <Grid container>
              <Grid item xs={4}>
                <IconButton type="button" sx={{ p: "8px" }} aria-label="search">
                  <BiSearchAlt2 style={{ fontSize: "14px" }} />
                </IconButton>
                <InputBase
                  placeholder="Поиск по звонкам"
                  inputProps={{
                    style: {
                      fontSize: "12px",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={8}>
                <Grid container spacing={1.6}>
                  <Grid
                    item
                    xs={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Button
                      variant="text"
                      color="inherit"
                      sx={{
                        textTransform: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                      onClick={handleButtonClick}
                    >
                      <Typography
                        fontSize={14}
                        color="#5E7793"
                        sx={{ opacity: 0.87 }}
                        noWrap
                      >
                        {typeCaption} Все типы
                      </Typography>

                      <RiArrowDropDownLine color="#ADBFDF" />
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={() => setAnchorEl(null)}
                        elevation={0}
                        sx={{
                          "& .MuiMenuItem-root": {
                            fontSize: "14px", // Customize the font size here
                          },
                        }}
                      >
                        <MenuItem onClick={() => sortByCalls()}>
                          Все звонки
                        </MenuItem>
                        <MenuItem onClick={() => sortByCalls("in")}>
                          Входящие
                        </MenuItem>
                        <MenuItem onClick={() => sortByCalls("out")}>
                          Исходящие
                        </MenuItem>
                      </Menu>
                    </Button>
                  </Grid>

                  <Grid
                    item
                    xs={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography
                      fontSize={14}
                      color={"#5E7793"}
                      sx={{ opacity: 0.87 }}
                      noWrap
                    >
                      Все сотрудники
                    </Typography>
                    <RiArrowDropDownLine color="#ADBFDF" />
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Button
                      variant="text"
                      color="inherit"
                      sx={{
                        textTransform: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                      onClick={sortByCalls}
                    >
                      <Typography
                        fontSize={14}
                        color="#5E7793"
                        sx={{ opacity: 0.87 }}
                        noWrap
                      >
                        Все звонки
                      </Typography>
                      <RiArrowDropDownLine color="#ADBFDF" />
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography
                      fontSize={14}
                      color={"#5E7793"}
                      sx={{ opacity: 0.87 }}
                      noWrap
                    >
                      Все источники
                    </Typography>
                    <RiArrowDropDownLine color="#ADBFDF" />
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography
                      fontSize={14}
                      color={"#5E7793"}
                      sx={{ opacity: 0.87 }}
                      noWrap
                    >
                      Все оценки
                    </Typography>
                    <RiArrowDropDownLine color="#ADBFDF" />
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography
                      fontSize={14}
                      color={"#5E7793"}
                      sx={{ opacity: 0.87 }}
                      noWrap
                    >
                      Все ошибки
                    </Typography>
                    <RiArrowDropDownLine color="#ADBFDF" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Paper
          sx={{
            paddingLeft: "15px",
            background: "#FFFFFF",
            boxShadow: "0px 4px 5px #E9EDF3",
            borderRadius: "8px",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#899CB1" }}>Тип</TableCell>
                <TableCell sx={{ color: "#899CB1" }}>Время</TableCell>
                <TableCell sx={{ color: "#899CB1" }}>Сотрудник</TableCell>
                <TableCell sx={{ color: "#899CB1" }}>Звонок</TableCell>
                <TableCell sx={{ color: "#899CB1" }}>Источник</TableCell>
                <TableCell sx={{ color: "#899CB1" }}>Оценка</TableCell>
                <TableCell align="right" sx={{ color: "#899CB1" }}>
                  Длительность
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {calls.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {item.in_out ? (
                      <MdCallReceived
                        fontSize={"18px"}
                        color={
                          item.status === "Не дозвонился"
                            ? "#EA1A4F"
                            : "#005FF8"
                        }
                      />
                    ) : (
                      <MdCallMade
                        fontSize={"18px"}
                        color={
                          item.status === "Не дозвонился"
                            ? "#EA1A4F"
                            : "#28A879"
                        }
                      />
                    )}
                  </TableCell>
                  <TableCell>{getTime(item.date)}</TableCell>
                  <TableCell>
                    <Avatar alt="avatar" src={item.person_avatar} />
                  </TableCell>
                  <TableCell>
                    {item.in_out ? item.from_number : item.to_number}
                  </TableCell>
                  <TableCell>{item.partner_data.name}</TableCell>
                  <TableCell>
                    {item.errors.length ? item.errors[0] : "Хорошо"}
                  </TableCell>
                  <TableCell align="right">
                    {item.time
                      ? Math.floor(item.time / 60) + ":" + (item.time % 60)
                      : ""}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Box>
    </Box>
  );
}

export default Calls;

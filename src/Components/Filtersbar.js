import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { NativeSelect, Typography, TextField } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsChevronLeft, BsChevronRight, BsCalendar } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiFillPlusCircle } from "react-icons/ai";
import IconButton from "@mui/material/IconButton";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

function Filterbar({ calls, filterDate }) {
  const [dateValue, setDateValue] = useState(dayjs("2022-04-17"));

  useEffect(() => {
    const newCalls = calls.filter(
      (call) => call.date_notime === dateValue.format("YYYY-MM-DD")
    );
    filterDate(newCalls);
  }, [dateValue]);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#e5e5e5" }} elevation={0}>
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#ffffff",
            alignItems: "center",
            borderRadius: "30px",
            justifyContent: "center",
            p: 0.5,
            pl: 2,
            height: "40px",
          }}
        >
          <Typography sx={{ color: "#899CB1", fontSize: "12px" }}>
            Баланс:
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "black", fontSize: "14px" }}
          >
            249 $
          </Typography>
          <IconButton>
            <AiFillPlusCircle color="#005FF8" />
          </IconButton>
        </Box>
        <Box
          sx={{
            ml: 3,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: "#005FF8",
            mr: 3,
          }}
        >
          <IconButton sx={{ p: 1 }}>
            <BsChevronLeft color="#899CB1" fontSize={"14px"} />
          </IconButton>
          <Box width={"150px"} height={"75px"} sx={{ mt: "31px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={dateValue}
                onChange={(newValue) => setDateValue(newValue)}
                inputFormat="DD MMM YYYY"
                sx={{ fontSize: "12px" }}
                renderInput={(props) => (
                  <TextField
                    {...props}
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          aria-label="toggle date picker"
                          onClick={props.onClick}
                          edge="end"
                          sx={{ p: 1 }}
                        >
                          <BsCalendar color="#899CB1" fontSize={"16px"} />
                        </IconButton>
                      ),
                    }}
                  />
                )}
                showDaysOutsideCurrentMonth
              />
            </LocalizationProvider>
          </Box>
          <Typography fontSize={"14px"} sx={{ ml: 1, mr: 0.5 }}>
            3 дня
          </Typography>
          <IconButton sx={{ p: 1 }}>
            <BsChevronRight color="#899CB1" fontSize={"14px"} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Filterbar;

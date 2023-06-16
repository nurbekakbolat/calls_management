import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

import InputBase from "@mui/material/InputBase";
import { BiSearchAlt2 } from "react-icons/bi";
import IconButton from "@mui/material/IconButton";
import { RiArrowDropDownLine } from "react-icons/ri";
function Topbar(props) {
  const newCallsBar = () => {
    return props.props.reduce((count, call) => {
      const res = call.results || [];
      const isNew = res.some((item) => item.type === "is_new");
      return count + (isNew ? 1 : 0);
    }, 0);
  };

  return (
    <Grid
      sx={{ backgroundColor: "#FFFFFF", height: "8vh" }}
      container
      direction="row"
      alignItems="center"
    >
      <Grid item xs={2}>
        <Typography sx={{ ml: 10, color: "#899CB1" }}>Среда, 13 окт</Typography>
      </Grid>
      <Grid item xs={4}>
        <Grid container spacing={2}>
          <Grid item xs={4} style={{}}>
            <Typography fontSize={14}>Новые звонки</Typography>
            <LinearProgress variant="determinate" value={newCallsBar()} />
          </Grid>
          <Grid item xs={4} style={{ fontSize: "12px" }}>
            <Typography fontSize={14}> Качество разговора</Typography>
          </Grid>
          <Grid item xs={4} style={{ fontSize: "12px" }}>
            <Typography fontSize={14}> Конверсия в заказ</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid sx={{ display: "flex" }} item xs={2}>
        <InputBase
          inputProps={{
            style: {
              fontSize: "12px",
            },
          }}
        />
        <IconButton type="button" sx={{ p: "8px" }} aria-label="search">
          <BiSearchAlt2 style={{ fontSize: "14px" }} />
        </IconButton>
      </Grid>
      <Grid sx={{ display: "flex" }} item xs={4}>
        <Typography sx={{ fontSize: "15px" }}>
          ИП Сидорова Александра Михайловича
        </Typography>

        <IconButton type="button" sx={{ p: "4px" }} aria-label="dropdown">
          <RiArrowDropDownLine />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default Topbar;

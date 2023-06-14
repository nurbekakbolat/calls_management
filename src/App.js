import React from "react";
import { Sbar as SideBar } from "./Components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Calls from "./Pages/Calls";
import Grid from "@mui/material/Grid";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Grid container>
          <Grid item style={{ flexBasis: 240 }}>
            <SideBar />
          </Grid>
          <Grid item style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calls" element={<Calls />} />
            </Routes>
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default App;

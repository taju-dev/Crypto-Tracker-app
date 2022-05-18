import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Crypto } from "../CryptoContext";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const { currency, setCurrency } = useContext(Crypto);
  console.log(currency);

  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography
            variant="h4"
            className="logo-bar"
            onClick={() => navigate("/")}
          >
            Crypto Tracker
          </Typography>
          {/* <Typography
            variant="h6"
            className="logo-bar"
            onClick={() => navigate("/")}
          >
            news
          </Typography> */}
          <Select
            style={{
              width: 100,
              heigh: 40,
              marginRight: 15,
            }}
            variant="outlined"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

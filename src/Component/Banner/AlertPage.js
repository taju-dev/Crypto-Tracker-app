import { Snackbar } from "@mui/material";
import React, { useContext } from "react";
import { Crypto } from "../../CryptoContext";
import { Alert } from "@mui/material";

const AlertPage = () => {
  const { alert, setAlert } = useContext(Crypto);

  console.log(alert);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ open: false });
  };

  return (
    <Snackbar open={alert.open} autoHideDuration={5000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        elevation={10}
        variant="filled"
        severity={alert.type}
      >
        {alert.message}
      </Alert>
    </Snackbar>
  );
};

export default AlertPage;

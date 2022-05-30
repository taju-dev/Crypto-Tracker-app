import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { Crypto } from "../../CryptoContext";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "@firebase/auth";

const SignUp = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { setAlert } = useContext(Crypto);

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setAlert({
        open: true,
        message: "Password does not match",
        type: "error",
      });
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setAlert({
        open: true,
        message: `Sign Up Successful. Welcome ${result.user.email}`,
      });
      handleClose();
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
      return;
    }
  };

  return (
    <Box
      p={3}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <TextField
        label="Enter Email"
        variant="outlined"
        type="email"
        value={email}
        fullWidth
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Enter Password"
        variant="outlined"
        type="password"
        value={password}
        fullWidth
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Confirm Password"
        variant="outlined"
        type="password"
        value={confirmPassword}
        fullWidth
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "#EEBC1D" }}
        onClick={handleSubmit()}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUp;

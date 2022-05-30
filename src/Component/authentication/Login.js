import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { Crypto } from "../../CryptoContext";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";

const Login = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAlert } = useContext(Crypto);

  const handleSubmit = async () => {
    if (!email || !password) {
      setAlert({
        open: true,
        message: "Please fill all the Fields",
        type: "error",
      });
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setAlert({
        open: true,
        message: `Login Successful. Welcome ${result.user.email}`,
      });
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
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

      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "#EEBC1D" }}
        onClick={handleSubmit}
      >
        Log in
      </Button>
    </Box>
  );
};

export default Login;

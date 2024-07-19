"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  TestF,
} from "../lib/store/features/AccountAuth/AccountAuthSlice";
import { AppDispatch } from "../lib/store/store";
function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Signup() {
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email") as string; // Ensure email and password are strings
    const password = data.get("password") as string;
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      data,
    });
    try {
      await dispatch(login({ email, password })).unwrap();
    } catch (error) {
      console.log("ERROR -------------", error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mr: 1,
              fontWeight: "bold",
              fontSize: "28px",
              textTransform: "none",
            }}
          >
            Social Media Content Aggregator
          </Typography>
          <Typography
            variant="h5"
            sx={{ mr: 1, fontWeight: "bold", mt: 6, textTransform: "none" }}
          >
            Create Account
          </Typography>
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="p" sx={{ mr: 1, fontWeight: "" }}>
            Enter your Email to register for this app
          </Typography>
          {/* <Typography component="h1" variant="h5">
            Login
          </Typography> */}
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid> */}
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "black",
                    px: 12,
                    py: 1,
                    textTransform: "none",

                    color: "white",
                    width: 100,
                    "&:hover": {
                      backgroundColor: "darkgray",
                    },
                  }}
                >
                  Signup
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Typography
                component="p"
                sx={{ mr: 1, fontWeight: "", color: "gray" }}
              >
                or continue with
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  mt: 2,
                  width: 200,
                  fontFamily: "bold",
                  background: "#D9D9D9",
                  border: "none",
                  color: "black",
                  px: 12,
                  py: 1,
                  textTransform: "none",
                }}
                startIcon={<FcGoogle />}
              >
                Google
              </Button>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

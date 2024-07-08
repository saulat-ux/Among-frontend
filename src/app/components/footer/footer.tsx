import React from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#333",
        color: "white",
        py: 4,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1} borderColor="white" mb={2}>
              Help
            </Box>
            <Box>
              <Link
                href="/"
                color="inherit"
                underline="none"
                sx={{ "&:hover": { color: "#bbb" } }}
              >
                Contact
              </Link>
            </Box>
            <Box>
              <Link
                href="/"
                color="inherit"
                underline="none"
                sx={{ "&:hover": { color: "#bbb" } }}
              >
                Support
              </Link>
            </Box>
            <Box>
              <Link
                href="/"
                color="inherit"
                underline="none"
                sx={{ "&:hover": { color: "#bbb" } }}
              >
                Privacy
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1} borderColor="white" mb={2}>
              Account
            </Box>
            <Box>
              <Link
                href="/"
                color="inherit"
                underline="none"
                sx={{ "&:hover": { color: "#bbb" } }}
              >
                Login
              </Link>
            </Box>
            <Box>
              <Link
                href="/"
                color="inherit"
                underline="none"
                sx={{ "&:hover": { color: "#bbb" } }}
              >
                Register
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1} borderColor="white" mb={2}>
              Messages
            </Box>
            <Box>
              <Link
                href="/"
                color="inherit"
                underline="none"
                sx={{ "&:hover": { color: "#bbb" } }}
              >
                Backup
              </Link>
            </Box>
            <Box>
              <Link
                href="/"
                color="inherit"
                underline="none"
                sx={{ "&:hover": { color: "#bbb" } }}
              >
                History
              </Link>
            </Box>
            <Box>
              <Link
                href="/"
                color="inherit"
                underline="none"
                sx={{ "&:hover": { color: "#bbb" } }}
              >
                Roll
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={5} pb={2}>
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

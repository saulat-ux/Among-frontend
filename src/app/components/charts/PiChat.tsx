"use client";
import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Typography } from "@mui/material";

export default function BasicPie({ textPosition, label }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: 2,
      }}
    >
      {textPosition === "above" && (
        <Typography variant="h6" sx={{ mb: 1, mr: 9 }}>
          {label}
        </Typography>
      )}
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "Happy" },
              { id: 1, value: 15, label: "Sad" },
              { id: 2, value: 20, label: "withdraw" },
              { id: 3, value: 30, label: "provoked" },

              { id: 4, value: 6, label: "abstain" },
            ],
          },
        ]}
        width={400}
        height={200}
      />
      {textPosition === "below" && (
        <Typography variant="h6" sx={{ mt: 1 }}>
          {label}
        </Typography>
      )}
    </Box>
  );
}

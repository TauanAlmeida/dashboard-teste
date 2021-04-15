import React from "react";
import { Bar } from "react-chartjs-2";
import { vendaDepartamento } from "../../services/api";
import { useTheme } from "@material-ui/core";

export default function BarChart() {
  const theme = useTheme();
  const data = {
    labels: vendaDepartamento.map((item) => item.name),
    datasets: [
      {
        backgroundColor: theme.palette.primary.main,
        borderWidth: 1,
        hoverBackgroundColor: theme.palette.primary.main,
        hoverBorderColor: theme.palette.primary.main,
        data: vendaDepartamento.map((item) => item.value),
      },
    ],
  };
  return (
    <Bar
      data={data}
      height={80}
      options={{
        maintainAspectRatio: true,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                autoSkip: false,
                maxRotation: 0,
                minRotation: 0,
                fontColor: theme.palette.text.primary,
              },
              gridLines:
                theme.palette.type === "light"
                  ? { color: "#EFF3F9", zeroLineColor: "#EFF3F9" }
                  : { color: "#4D4D4D", zeroLineColor: "#4D4D4D" },
            },
          ],
          yAxes: [
            {
              ticks: {
                autoSkip: false,
                maxRotation: 0,
                minRotation: 0,
                fontColor: theme.palette.text.primary,
              },
              gridLines:
                theme.palette.type === "light"
                  ? { color: "#EFF3F9", zeroLineColor: "#EFF3F9" }
                  : { color: "#4D4D4D", zeroLineColor: "#4D4D4D" },
            },
          ],
        },
        defaultColor: "white",
      }}
    />
  );
}

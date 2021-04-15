import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import { useTheme } from "@material-ui/core";
import { vendasMeioPagamento } from "../../services/api";

const HorizontalBarChart = () => {
  const theme = useTheme();
  const data = {
    labels: vendasMeioPagamento.map((item) => item.name),
    datasets: [
      {
        data: vendasMeioPagamento.map((item) => item.value),
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        borderWidth: 1,
      },
    ],
  };
  return (
    <HorizontalBar
      data={data}
      height={100}
      options={{
        maintainAspectRatio: true,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              gridLines:
                theme.palette.type === "light"
                  ? { color: "#EFF3F9", zeroLineColor: "#EFF3F9" }
                  : { color: "#4D4D4D", zeroLineColor: "#4D4D4D" },
              ticks: {
                fontColor: theme.palette.text.primary,
              },
            },
          ],
          xAxes: [
            {
              gridLines:
                theme.palette.type === "light"
                  ? { color: "#EFF3F9", zeroLineColor: "#EFF3F9" }
                  : { color: "#4D4D4D", zeroLineColor: "#4D4D4D" },
              ticks: {
                fontColor: theme.palette.text.primary,
              },
            },
          ],
        },
      }}
    />
  );
};

export default HorizontalBarChart;

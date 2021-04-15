import React from "react";
import { Line } from "react-chartjs-2";
import { vendas } from "../../services/api";
import { useTheme } from "@material-ui/core";

const { valorTotal } = vendas;
const { custoMercadoria } = vendas;
function LineChart() {
  const theme = useTheme();

  const data = {
    labels: valorTotal.map((item) => item.name),
    datasets: [
      {
        label: "Valor Total Vendas",
        fill: false,
        lineTension: 0.1,
        borderColor: theme.palette.primary.main,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: theme.palette.primary.main,
        pointBackgroundColor: theme.palette.primary.main,
        pointBorderWidth: 6,
        pointHoverRadius: 5,
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,

        borderWidth: 3,
        pointHoverBackgroundColor: theme.palette.primary.main,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [...valorTotal.map((item) => item.value)],
      },
      {
        label: "Custo mercadoria vendida",
        fill: false,
        lineTension: 0.1,
        borderColor: theme.palette.secondary.main,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: theme.palette.secondary.main,
        pointBackgroundColor: theme.palette.secondary.main,
        pointBorderWidth: 6,
        pointHoverRadius: 5,
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,

        borderWidth: 3,
        pointHoverBackgroundColor: theme.palette.secondary.main,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [...custoMercadoria.map((item) => item.value)],
      },
    ],
  };
  return (
    <Line
      data={data}
      height={150}
      options={{
        maintainAspectRatio: true,
        scales: {
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
          yAxes: [
            {
              gridLines:
                theme.palette.type === "light"
                  ? { color: "#EFF3F9", zeroLineColor: "#EFF3F9" }
                  : { color: "#4D4D4D", zeroLineColor: "#4D4D4D" },
              ticks: {
                fontSize: 11,
                fontColor: theme.palette.text.primary,
              },
            },
          ],
        },
      }}
    />
  );
}

export default LineChart;

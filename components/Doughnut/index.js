import React from "react";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [],
  datasets: [
    {
      data: [75, 25],
      backgroundColor: ["#80ED99", "#C7F9CC"],
      hoverBackgroundColor: ["#57CC99", "#C7F9CC"],
    },
  ],
};

export default function DoughnutChart() {
  return (
    <div>
      <h2>Green Index</h2>
      <Doughnut data={data} width={400} height={400} />
    </div>
  );
}

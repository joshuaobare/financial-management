import { LineController, Chart } from "../../node_modules/chart.js/auto/auto";
Chart.register(LineController);

// Renders chart of values from Stocks API
const renderInvestmentChart = (
  ctx: HTMLCanvasElement,
  dates: string[],
  values: number[],
  asset: string
) => {
  ctx.getContext("2d");
  const data = {
    labels: [...dates],
    datasets: [
      {
        label: "Date",
        data: [...values],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const chart = new Chart(ctx, {
    type: "line",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: asset,
        },
      },
    },
  });
  return chart;
};

export { renderInvestmentChart };

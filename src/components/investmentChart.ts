import { LineController, Chart } from "../../node_modules/chart.js/auto/auto";
Chart.register(LineController);

const renderInvestmentChart = (
  ctx: HTMLCanvasElement,
  dates: string[],
  values: number[]
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
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        title: {
          display: true,
          text: "Asset",
        },
      },
    },
  });
  return chart;
};

export { renderInvestmentChart };

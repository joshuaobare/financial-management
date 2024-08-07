import { LineController, Chart } from "../../node_modules/chart.js/auto/auto";
Chart.register(LineController);

const renderInvestmentChart = (
  ctx: HTMLCanvasElement,
  dates: string[],
  values: string[]
) => {
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
  new Chart(ctx, {
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
};

export { renderInvestmentChart };

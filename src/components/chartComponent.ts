import FinanceCalculator from "../helpers/FinanceCalculator";
import {
  DoughnutController,
  Chart,
} from "../../node_modules/chart.js/auto/auto";
Chart.register(DoughnutController);

const renderChart = (ctx: HTMLCanvasElement, financeData: any) => {
  ctx.getContext("2d");
  const financeCalculator = new FinanceCalculator(financeData);
  const data = {
    labels: ["Bills", "Personal", "Savings", "Other"],
    datasets: [
      {
        label: "Monthly Expense",
        data: [
          financeCalculator.financeCategoryCalculator("Bills"),
          financeCalculator.financeCategoryCalculator("Personal"),
          financeCalculator.financeCategoryCalculator("Savings"),
          financeCalculator.financeCategoryCalculator("Other"),
        ],
        borderWidth: 1,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(27, 33, 33, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(27, 33, 33, 0.2)",
        ],
      },
    ],
  };

  const allZero = financeCalculator.totalMonthlySpend() === 0;

  const noDataPlugin = {
    id: "noData",
    afterDraw(chart: Chart) {
      const { datasets } = chart.data;
      let hasData = false;

      for (const dataset of datasets) {
        if (dataset.data.some((value) => value !== 0)) {
          hasData = true;
          break;
        }
      }

      if (!hasData) {
        const { ctx, width, height } = chart;
        ctx.save();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "16px sans-serif";
        ctx.fillText("No data to visualize", width / 2, height / 2);
        ctx.restore();
      }
    },
  };

  new Chart(ctx, {
    type: "doughnut",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: !allZero, // Hide legend when no data
          position: "bottom",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return allZero ? "No data" : context.label;
            },
          },
        },
      },
    },
    plugins: [noDataPlugin],
  });
};

export { renderChart };

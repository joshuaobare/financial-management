import { Transaction } from "../interfaces/transactionInterfact";
import { BarController, Chart } from "../../node_modules/chart.js/auto/auto";
Chart.register(BarController);
import FinanceCalculator from "../helpers/FinanceCalculator";

// Renders comparison data between current month and previous month
const renderMonthlySpendingChart = (
  ctx: HTMLCanvasElement,
  currMonth: Transaction[],
  prevMonth: Transaction[]
) => {
  ctx.getContext("2d");
  const prevMonthCalculator = new FinanceCalculator(prevMonth);
  const currMonthCalculator = new FinanceCalculator(currMonth);
  const data = {
    labels: ["Income", "Bills", "Personal", "Savings", "Other"],
    datasets: [
      {
        label: "Last Month",
        data: [
          prevMonthCalculator.financeCategoryCalculator("Income"),
          prevMonthCalculator.financeCategoryCalculator("Bills"),
          prevMonthCalculator.financeCategoryCalculator("Personal"),
          prevMonthCalculator.financeCategoryCalculator("Savings"),
          prevMonthCalculator.financeCategoryCalculator("Other"),
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(27, 33, 33, 0.2)",
          "rgba(217, 233, 33, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(27, 33, 33, 0.2)",
          "rgba(217, 233, 33, 0.2)",
        ],
        borderWidth: 1,
      },
      {
        label: "This Month",
        data: [
          currMonthCalculator.financeCategoryCalculator("Income"),
          currMonthCalculator.financeCategoryCalculator("Bills"),
          currMonthCalculator.financeCategoryCalculator("Personal"),
          currMonthCalculator.financeCategoryCalculator("Savings"),
          currMonthCalculator.financeCategoryCalculator("Other"),
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(27, 33, 33, 0.2)",
          "rgba(217, 233, 33, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(27, 33, 33, 0.2)",
          "rgba(217, 233, 33, 0.2)",
        ],
        borderWidth: 1,
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
          text: "Last month vs This month spending",
        },
      },
    },
  });
};

export { renderMonthlySpendingChart };

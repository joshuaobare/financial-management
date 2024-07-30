import { Transaction } from "../interfaces/transactionInterfact";
import { BarController, Chart } from "../../node_modules/chart.js/auto/auto";
Chart.register(BarController);
import FinanceCalculator from "../helpers/FinanceCalculator";

const monthlySpendingChart = (
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
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
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
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };
  new Chart(ctx, {
    type: "bar",
    data,
  });
};

export { monthlySpendingChart };

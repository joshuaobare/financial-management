import {
  Chart,
  ChartConfiguration,
  Colors,
} from "../../node_modules/chart.js/dist/types";
import FinanceCalculator from "./FinanceCalculator";

const renderChart = (ctx: HTMLCanvasElement, financeData: any) => {
  const financeCalculator = new FinanceCalculator(financeData);
  const data = {
    labels: ["Bills", "Personal", "Savings", "Other"],
    datasets: [
      {
        label: "Bills",
        data: financeCalculator.financeCategoryCalculator("Bills"),
      },
      {
        label: "Personal",
        data: financeCalculator.financeCategoryCalculator("Personal"),
      },
      {
        label: "Savings",
        data: financeCalculator.financeCategoryCalculator("Savings"),
      },
      {
        label: "Other",
        data: financeCalculator.financeCategoryCalculator("Other"),
      },
    ],
  };
  const chart = new Chart(ctx, {
    type: "doughnut",
    data,
  });

  return chart;
};

export { renderChart };

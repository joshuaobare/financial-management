import { Budget } from "../interfaces/budgetInterface";
import { Transaction } from "../interfaces/transactionInterfact";
import { createInsightsCalendar } from "../components/insightsCalendar";

const createInsightsModule = (
  budgetData: Budget[],
  transactionData: Transaction[]
) => {
  const insights = document.createElement("div");
  insights.appendChild(createInsightsCalendar(budgetData, transactionData));

  return insights;
};

export { createInsightsModule };

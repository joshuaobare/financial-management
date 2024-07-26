import { Budget } from "../interfaces/budgetInterface";
import { Transaction } from "../interfaces/transactionInterfact";

const createInsightsModule = (
  budgetData: Budget[],
  transactionData: Transaction[]
) => {
  const insights = document.createElement("div");

  return insights;
};

export { createInsightsModule };

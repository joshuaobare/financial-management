import { Goal } from "../interfaces/goalInterface";
import { Transaction } from "../interfaces/transactionInterfact";

const createGoalsModule = (
  transactionData: Transaction[],
  goalData: Goal[]
) => {
  const goals = document.createElement("div");

  return goals;
};

export { createGoalsModule };

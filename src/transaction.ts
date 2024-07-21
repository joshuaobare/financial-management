import { createCalendar } from "./calendar";
import { Budget } from "./interfaces/budgetInterface";

const createTransaction = (transactionData: Budget[]) => {
  const transaction = document.createElement("div");
  transaction.className = "transaction";

  const calendar = createCalendar(transactionData);
  transaction.appendChild(calendar);

  return transaction;
};

export { createTransaction };

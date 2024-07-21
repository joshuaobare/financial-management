import { createCalendar } from "./calendar";
import { Transaction } from "./interfaces/transactionInterfact";

const createTransaction = (transactionData: Transaction[]) => {
  const transaction = document.createElement("div");
  transaction.className = "transaction";

  const calendar = createCalendar(transactionData);
  transaction.appendChild(calendar);

  return transaction;
};

export { createTransaction };

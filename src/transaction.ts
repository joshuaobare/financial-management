import { createCalendar } from "./calendar";
import { Transaction } from "./interfaces/transactionInterfact";
import "../styles/transaction.css";

const createTransaction = (transactionData: Transaction[]) => {
  const transaction = document.createElement("div");
  transaction.className = "transaction";

  const calendar = createCalendar(transactionData, "Transaction");
  transaction.appendChild(calendar);

  return transaction;
};

export { createTransaction };

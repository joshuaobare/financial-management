import { createCalendar } from "./calendar";
import { Transaction } from "./interfaces/transactionInterfact";
import "../styles/transaction.css";

const transactionDialog = <HTMLDialogElement>(
  document.getElementById("transaction-dialog")
);

const editTransactionDialog = <HTMLDialogElement>(
  document.getElementById("edit-transaction-dialog")
);
const closeTransactionDialog = document.getElementById(
  "transaction-dialog-close"
);
const clostEditTransactionDialog = document.getElementById(
  "edit-transaction-dialog-close"
);

closeTransactionDialog?.addEventListener("click", () => {
  transactionDialog.close();
});

const createTransaction = (transactionData: Transaction[]) => {
  const transaction = document.createElement("div");
  transaction.className = "transaction";

  const calendar = createCalendar(transactionData, "Transaction");
  transaction.appendChild(calendar);

  return transaction;
};

export { createTransaction };

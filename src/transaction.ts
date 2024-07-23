import { createCalendar } from "./calendar";
import { Transaction } from "./interfaces/transactionInterfact";
import { config } from "./config";
import { openTransaction } from "./index";
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

const getTransactionFormValues = () => {
  const category = (<HTMLInputElement>(
    document.getElementById("transaction-form-category-select")
  )).value;
  const amount = (<HTMLInputElement>(
    document.getElementById("transaction-form-amount")
  )).value;
  const title = (<HTMLInputElement>(
    document.getElementById("transaction-form-title")
  )).value;
  const description = (<HTMLTextAreaElement>(
    document.getElementById("transaction-form-description")
  )).value;
  const user_id = localStorage.getItem("user_id");

  const calendarHeaderDate = document.getElementById("cal-curr-date");
  const unparsedDate: string[] = calendarHeaderDate?.dataset.date?.split(" ")!;
  const month = parseInt(unparsedDate[0]);
  const year = parseInt(unparsedDate[1]);
  const start_date = new Date();
  start_date.setFullYear(year, month, 1);
  const end_date = new Date();
  end_date.setFullYear(year, month + 1, 0);

  return {
    category,
    amount,
    title,
    description,
    user_id,
    start_date,
    end_date,
  };
};

const resetTransactionForm = () => {
  const amount = ((<HTMLInputElement>(
    document.getElementById("transaction-form-amount")
  )).value = "");
  const title = ((<HTMLInputElement>(
    document.getElementById("transaction-form-title")
  )).value = "");
  const description = ((<HTMLTextAreaElement>(
    document.getElementById("transaction-form-description")
  )).value = "");
};

const submitTransactionForm = async () => {
  try {
    const request = await fetch(config.BASE_URL + "createTransaction.php", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(getTransactionFormValues()),
    });
    const response = await request.json();

    if (response.message) {
      resetTransactionForm();
      transactionDialog.close();
      openTransaction();
    }
  } catch (error) {
    console.error(error);
  }
};
export { createTransaction };

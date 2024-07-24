import { createCalendar } from "./calendar";
import { Transaction } from "./interfaces/transactionInterfact";
import { config } from "./config";
import { openTransaction } from "./index";
import "../styles/transaction.css";
import { TransactionService } from "./TransactionService";
import { Helper } from "./Helper";

const transactionFormDialog = <HTMLDialogElement>(
  document.getElementById("transaction-dialog")
);
const transactionForm = document.getElementById("transaction-form");

const editTransactionDialog = <HTMLDialogElement>(
  document.getElementById("edit-transaction-dialog")
);
const closeTransactionDialog = document.getElementById(
  "transaction-dialog-close"
);
const clostEditTransactionDialog = document.getElementById(
  "edit-transaction-dialog-close"
);

const transactionService = new TransactionService();
const helper = new Helper();

closeTransactionDialog?.addEventListener("click", () => {
  transactionFormDialog.close();
});

const createTransactionModule = (transactionData: Transaction[]) => {
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
  const { start_date, end_date } =
    helper.getMonthStartAndEndDates(calendarHeaderDate);

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

transactionForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const transactionFormValues = getTransactionFormValues();
  transactionService.createTransaction(transactionFormValues);
});

export { createTransactionModule, resetTransactionForm, transactionFormDialog };

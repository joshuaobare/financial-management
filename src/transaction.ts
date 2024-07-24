import { createCalendar } from "./calendar";
import { Transaction } from "./interfaces/transactionInterfact";
import { config } from "./config";
import { openTransaction } from "./index";
import "../styles/transaction.css";
import { TransactionService } from "./services/TransactionService";
import { Helper } from "./helpers/Helper";

const transactionFormDialog = <HTMLDialogElement>(
  document.getElementById("transaction-dialog")
);
const transactionForm = <HTMLFormElement>(
  document.getElementById("transaction-form")
);

const editTransactionFormDialog = <HTMLDialogElement>(
  document.getElementById("edit-transaction-dialog")
);
const editTransactionForm = <HTMLFormElement>(
  document.getElementById("edit-transaction-form")
);
const transactionDialogCloseBtn = document.getElementById(
  "transaction-dialog-close"
);
const editTransactionDialogCloseBtn = document.getElementById(
  "edit-transaction-dialog-close"
);

const transactionService = new TransactionService();
const helper = new Helper();

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

// this function gathers and values from the edit transaction form for use while
// updating a transaction record
const getEditTransactionFormValues = () => {
  const category = (<HTMLInputElement>(
    document.getElementById("edit-transaction-form-category-select")
  )).value;
  const amount = (<HTMLInputElement>(
    document.getElementById("edit-transaction-form-amount")
  )).value;
  const title = (<HTMLInputElement>(
    document.getElementById("edit-transaction-form-title")
  )).value;
  const description = (<HTMLTextAreaElement>(
    document.getElementById("edit-transaction-form-description")
  )).value;
  const transaction_id = (<HTMLInputElement>(
    document.getElementById("edit-transaction-form-transaction-id")
  )).value;
  const user_id = localStorage.getItem("user_id")!.toString();

  // the calendar header node is passed into the helper function to get start and end dates
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
    transaction_id,
  };
};

// this function populates the edit form fields with the record
// that needs to be edited
const populateEditTransactionForm = (transactionData: Transaction) => {
  const category = <HTMLInputElement>(
    document.getElementById("edit-transaction-form-category-select")
  );
  category.value = transactionData.category;
  const amount = <HTMLInputElement>(
    document.getElementById("edit-transaction-form-amount")
  );
  amount.value = transactionData.amount.toString();
  const title = <HTMLInputElement>(
    document.getElementById("edit-transaction-form-title")
  );
  title.value = transactionData.title;
  const description = <HTMLTextAreaElement>(
    document.getElementById("edit-transaction-form-description")
  );
  description.value = transactionData.description;
  const startDate = <HTMLInputElement>(
    document.getElementById("edit-transaction-form-start-date")
  );
  startDate.value = transactionData.start_date.toString();
  const endDate = <HTMLInputElement>(
    document.getElementById("edit-transaction-form-end-date")
  );
  endDate.value = transactionData.end_date.toString();
  const transactionId = <HTMLInputElement>(
    document.getElementById("edit-transaction-form-transaction-id")
  );
  transactionId.value = transactionData.transaction_id.toString();
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

editTransactionForm?.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const transactionData = {
    ...getEditTransactionFormValues(),
    created_at: null,
  };
  transactionService.updateTransaction(transactionData);
});

transactionDialogCloseBtn?.addEventListener("click", () => {
  transactionFormDialog.close();
});

editTransactionDialogCloseBtn?.addEventListener("click", () => {
  editTransactionFormDialog!.close();
});

export {
  createTransactionModule,
  resetTransactionForm,
  transactionFormDialog,
  editTransactionFormDialog,
  populateEditTransactionForm,
};

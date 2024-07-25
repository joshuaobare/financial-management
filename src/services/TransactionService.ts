import { config } from "../config";
import {
  resetTransactionForm,
  transactionFormDialog,
  editTransactionFormDialog,
} from "../transaction";
import { openTransaction as resetTransactionModule } from "../index";
import { Transaction } from "../interfaces/transactionInterfact";

class TransactionService {
  constructor() {}

  fetchTransactions = async () => {
    const userId = localStorage.getItem("user_id");
    try {
      const request = await fetch(
        config.BASE_URL + `fetchTransactions.php?user_id=${userId}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      );
      const response = await request.json();

      if (response.transactions) {
        return response.transactions;
      }
    } catch (error) {
      console.error(error);
    }
  };

  createTransaction = async (
    transactionFormValues: any,
    resetModule: boolean
  ) => {
    try {
      const request = await fetch(config.BASE_URL + "createTransaction.php", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(transactionFormValues),
      });
      const response = await request.json();

      if (response.message) {
        resetTransactionForm();
        transactionFormDialog.close();
        if (resetModule) resetTransactionModule();
      }
    } catch (error) {
      console.error(error);
    }
  };

  updateTransaction = async (transactionData: Transaction) => {
    try {
      const request = await fetch(config.BASE_URL + "updateTransaction.php", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(transactionData),
      });
      const response = await request.json();
      if (response.message) {
        editTransactionFormDialog.close();
        resetTransactionModule();
      }
    } catch (error) {
      console.error(error);
    }
  };

  deleteTransaction = async (transaction_id: string) => {
    try {
      const request = await fetch(
        config.BASE_URL +
          `deleteTransaction.php?transaction_id=${transaction_id}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      );
      const response = await request.json();

      if (response.message) {
        resetTransactionModule();
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export { TransactionService };

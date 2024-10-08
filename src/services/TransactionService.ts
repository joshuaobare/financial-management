import { config } from "../config";
import {
  resetTransactionForm,
  transactionFormDialog,
  editTransactionFormDialog,
} from "../modules/transaction";
import { openTransaction as resetTransactionModule } from "../index";
import { Transaction } from "../interfaces/transactionInterfact";

// class facilitates CRUD functionality for the transaction table
class TransactionService {
  constructor() {}

  fetchTransactions = async (userId: string) => {
    try {
      const request = await fetch(
        config.BASE_URL + `transactionFetch.php?user_id=${userId}`,
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

  createTransaction = async (transactionFormValues: any) => {
    try {
      const request = await fetch(config.BASE_URL + "transactionCreate.php", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(transactionFormValues),
      });
      const response = await request.json();

      if (response.message) {
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  updateTransaction = async (transactionData: Transaction) => {
    try {
      const request = await fetch(config.BASE_URL + "transactionUpdate.php", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(transactionData),
      });
      const response = await request.json();
      if (response.message) {
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  deleteTransaction = async (transaction_id: string) => {
    try {
      const request = await fetch(
        config.BASE_URL +
          `transactionDelete.php?transaction_id=${transaction_id}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      );
      const response = await request.json();

      if (response.message) {
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };
}

export { TransactionService };

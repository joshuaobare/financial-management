import { config } from "./config";
import { resetTransactionForm, transactionFormDialog } from "./transaction";
import { openTransaction as resetTransactionModule } from "./index";

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

  createTransaction = async (transactionFormValues: any) => {
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
        resetTransactionModule();
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export { TransactionService };

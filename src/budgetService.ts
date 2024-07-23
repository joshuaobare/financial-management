import { config } from "./config";
import { Budget } from "./interfaces/budgetInterface";
import { openBudget } from "./index";
import {
  budgetFormDialog,
  resetBudgetForm,
  editBudgetFormDialog,
} from "./budget";

class BudgetService {
  constructor() {}

  fetchBudgetData = async () => {
    const userId = localStorage.getItem("user_id");
    try {
      const request = await fetch(
        config.BASE_URL + `fetchBudget.php?user_id=${userId}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      );
      const response = await request.json();

      if (response.budgets) {
        return response.budgets;
      }
    } catch (error) {
      console.error(error);
    }
  };

  submitBudgetForm = async (budgetFormValues: any) => {
    try {
      const request = await fetch(config.BASE_URL + "createBudget.php", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(budgetFormValues),
      });
      const response = await request.json();

      if (response.message) {
        resetBudgetForm();
        budgetFormDialog.close();
        openBudget();
      }
    } catch (error) {
      console.error(error);
    }
  };

  updateBudget = async (budgetData: Budget) => {
    try {
      const request = await fetch(
        "http://localhost:8080/financial-management/php/updateBudget.php",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(budgetData),
        }
      );
      const response = await request.json();
      if (response.message) {
        editBudgetFormDialog.close();
        openBudget();
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export { BudgetService };

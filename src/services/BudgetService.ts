import { config } from "../config";
import { Budget } from "../interfaces/budgetInterface";
import { openBudget as resetBudgetComponent } from "../index";
import {
  budgetFormDialog,
  resetBudgetForm,
  editBudgetFormDialog,
} from "../modules/budget";

class BudgetService {
  constructor() {}

  fetchBudget = async () => {
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

  createBudget = async (budgetFormValues: any) => {
    try {
      const request = await fetch(config.BASE_URL + "createBudget.php", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(budgetFormValues),
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

  updateBudget = async (budgetData: Budget) => {
    try {
      const request = await fetch(config.BASE_URL + "updateBudget.php", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(budgetData),
      });
      const response = await request.json();
      if (response.message) {
        editBudgetFormDialog.close();
        resetBudgetComponent();
      }
    } catch (error) {
      console.error(error);
    }
  };

  deleteBudget = async (budget_id: string) => {
    try {
      const request = await fetch(
        config.BASE_URL + `deleteBudget.php?budget_id=${budget_id}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      );
      const response = await request.json();

      if (response.message) {
        resetBudgetComponent();
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export { BudgetService };

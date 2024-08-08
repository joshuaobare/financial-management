import { config } from "../config";
import { Budget } from "../interfaces/budgetInterface";

// class facilitates CRUD operations for the budget table
class BudgetService {
  constructor() {}

  fetchBudget = async (userId: string) => {
    try {
      const request = await fetch(
        config.BASE_URL + `budgetFetch.php?user_id=${userId}`,
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
      const request = await fetch(config.BASE_URL + "budgetCreate.php", {
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
      const request = await fetch(config.BASE_URL + "budgetUpdate.php", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(budgetData),
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

  deleteBudget = async (budget_id: string) => {
    try {
      const request = await fetch(
        config.BASE_URL + `budgetDelete.php?budget_id=${budget_id}`,
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

export { BudgetService };

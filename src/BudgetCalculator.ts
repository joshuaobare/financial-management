import { Budget } from "./interfaces/budgetInterface";
class BudgetCalculator {
  constructor() {}

  budgetCategoryCalculator(categoryData: Budget[]) {
    let sum = 0;

    categoryData.forEach((item) => (sum += item.amount));

    return sum;
  }

  totalMonthlyAllocation(budgetData: Budget[]) {
    let sum = 0;

    budgetData.forEach((item) => {
      if (item.category === "Income" || item.category === "Savings") return;
      sum += item.amount;
    });

    return sum;
  }

  monthlyExcessCalculator(budgetData: Budget[]) {
    let incomeTotal = 0;
    let totalSpend = 0;

    budgetData.forEach((item) => {
      if (item.category === "Income") {
        incomeTotal += item.amount;
        return;
      }
      if (item.category === "Savings") return;
      totalSpend += item.amount;
    });

    return incomeTotal - totalSpend;
  }
}

export default BudgetCalculator;

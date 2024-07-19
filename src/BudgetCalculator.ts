import { Budget } from "./interfaces/budgetInterface";
class BudgetCalculator {
  constructor() {}

  budgetCategoryCalculator(categoryData: Budget[]) {
    let sum = 0;

    categoryData.forEach((item) => (sum += item.amount));

    return sum;
  }

  totalMonthlyAllocation(budgetData: Budget[]) {}

  monthlyExcessCalculator() {}
}

export default BudgetCalculator;

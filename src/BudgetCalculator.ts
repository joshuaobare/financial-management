import { Budget } from "./interfaces/budgetInterface";
class BudgetCalculator {
  budgetData: Budget[] = [];

  constructor(budgetData: Budget[]) {
    this.budgetData = budgetData;
  }

  budgetCategoryCalculator(category: string) {
    let sum = 0;

    this.budgetData.forEach((item) => {
      if (item.category === category) {
        sum += item.amount;
      }
    });

    return sum;
  }

  totalMonthlyAllocation() {
    let sum = 0;

    this.budgetData.forEach((item) => {
      if (item.category === "Income" || item.category === "Savings") return;
      sum += item.amount;
    });

    return sum;
  }

  monthlyExcessCalculator() {
    let incomeTotal = 0;
    let totalSpend = 0;

    this.budgetData.forEach((item) => {
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

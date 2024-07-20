import { Budget } from "./interfaces/budgetInterface";
class BudgetCalculator {
  budgetData: Budget[] = [];

  constructor(budgetData: Budget[]) {
    this.budgetData = budgetData;
  }

  budgetCategoryCalculator(category: string): number {
    let sum = 0;

    this.budgetData.forEach((item) => {
      if (item.category === category) {
        sum += parseInt(item.amount);
      }
    });

    return sum;
  }

  totalMonthlyAllocation(): number {
    let sum = 0;

    this.budgetData.forEach((item) => {
      if (item.category === "Income" || item.category === "Savings") return;
      sum += parseInt(item.amount);
    });

    return sum;
  }

  monthlyExcessCalculator(): number {
    let incomeTotal = 0;
    let totalSpend = 0;

    this.budgetData.forEach((item) => {
      if (item.category === "Income") {
        incomeTotal += parseInt(item.amount);
        return;
      }
      if (item.category === "Savings") return;
      totalSpend += parseInt(item.amount);
    });

    return incomeTotal - totalSpend;
  }
}

export default BudgetCalculator;

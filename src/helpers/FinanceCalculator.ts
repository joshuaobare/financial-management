import { Budget } from "../interfaces/budgetInterface";
import { Transaction } from "../interfaces/transactionInterfact";
class FinanceCalculator {
  private financeData: Budget[] | Transaction[] = [];

  constructor(financeData: Budget[] | Transaction[]) {
    this.financeData = financeData;
  }

  getCategories(): string[] {
    let categorySet: Set<string> = new Set();
    this.financeData.forEach((item) => categorySet.add(item.category));
    const categories = [...categorySet];

    return categories;
  }

  financeCategoryCalculator(category: string): number {
    let sum = 0;

    this.financeData.forEach((item) => {
      if (item.category === category) {
        sum += parseInt(item.amount);
      }
    });

    return sum;
  }

  totalMonthlySpend(): number {
    let sum = 0;

    this.financeData.forEach((item) => {
      if (item.category === "Income" || item.category === "Savings") return;
      sum += parseInt(item.amount);
    });

    return sum;
  }

  monthlyExcessCalculator(): number {
    let incomeTotal = 0;
    let totalSpend = 0;

    this.financeData.forEach((item) => {
      if (item.category === "Income") {
        incomeTotal += parseInt(item.amount);
        return;
      }
      if (item.category === "Savings") return;
      totalSpend += parseInt(item.amount);
    });

    return incomeTotal - totalSpend;
  }

  maxValueCategory() {
    let maxValue = 0;
    let maxCategory = "";
    const counter = new Map();

    this.financeData.forEach((item) => {
      if (item.category === "Income") return;
      if (item.category === "Savings") return;
      if (counter.has(item.category)) {
        const counterVal = counter.get(item.category);
        const updatedVal = counterVal + parseInt(item.amount);
        counter.set(item.category, updatedVal);

        if (updatedVal > maxValue) {
          maxCategory = item.category;
          maxValue = updatedVal;
        }
      } else {
        counter.set(item.category, parseInt(item.amount));
      }
    });

    return { maxValue, maxCategory };
  }

  categoriesNearBudgetLimit(transactionData: Transaction[]) {
    const transactionCalculator = new FinanceCalculator(transactionData);
    const categories = this.getCategories();
    const result: [string, number][] = [];

    categories.forEach((category) => {
      if (category === "Income") return;
      if (category === "Savings") return;
      const budget = this.financeCategoryCalculator(category);
      const transaction =
        transactionCalculator.financeCategoryCalculator(category);
      const diff = budget - transaction;
      if (diff < 0.1 * budget) {
        result.push([category, diff]);
      }
    });

    return result;
  }
}

export default FinanceCalculator;

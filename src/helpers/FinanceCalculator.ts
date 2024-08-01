import { Budget } from "../interfaces/budgetInterface";
import { Transaction } from "../interfaces/transactionInterfact";
class FinanceCalculator {
  financeData: Budget[] | Transaction[] = [];

  constructor(financeData: Budget[] | Transaction[]) {
    this.financeData = financeData;
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
    return [];
  }
}

export default FinanceCalculator;

import BudgetCalculator from "../src/BudgetCalculator";
import { budgetData, categoryData } from "./testValues";

const budgetCalculator = new BudgetCalculator();

describe("For a category, return total of its values", () => {
  test("return total for a category", () => {
    expect(budgetCalculator.budgetCategoryCalculator(categoryData)).toEqual(
      9200
    );
  });
  test("return zero if array is empty", () => {
    expect(budgetCalculator.budgetCategoryCalculator([])).toEqual(0);
  });
});

describe("Budget allocation except Income and Savings", () => {
  test("return total spend for the entire budget", () => {
    expect(budgetCalculator.totalMonthlyAllocation(categoryData)).toEqual(
      8245210
    );
  });
  test("return zero if array is empty", () => {
    expect(budgetCalculator.totalMonthlyAllocation([])).toEqual(0);
  });
});

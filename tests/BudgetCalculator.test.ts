import BudgetCalculator from "../src/BudgetCalculator";
import { budgetData } from "./testValues";

describe("For a category, return total of its values", () => {
  let budgetCalculator = new BudgetCalculator(budgetData);
  test("return total for a category", () => {
    expect(budgetCalculator.budgetCategoryCalculator("Bills")).toEqual(104200);
  });
  test("needs to work for all categories", () => {
    expect(budgetCalculator.budgetCategoryCalculator("Income")).toEqual(760000);
  });
  test("return zero if array is empty", () => {
    budgetCalculator = new BudgetCalculator([]);
    expect(budgetCalculator.budgetCategoryCalculator("Bills")).toEqual(0);
  });
});

describe("Total monthly allocation fn ignores Income and Savings", () => {
  let budgetCalculator = new BudgetCalculator(budgetData);
  test("return total spend for the entire budget", () => {
    expect(budgetCalculator.totalMonthlyAllocation()).toEqual(8245210);
  });
  test("return zero if array is empty", () => {
    budgetCalculator = new BudgetCalculator([]);
    expect(budgetCalculator.totalMonthlyAllocation()).toEqual(0);
  });
});

describe("Monthly excess is diff between income and all other expenses", () => {
  let budgetCalculator = new BudgetCalculator(budgetData);
  test("return diff between total spending and income", () => {
    expect(budgetCalculator.monthlyExcessCalculator()).toEqual(-7485210);
  });
  test("return zero if array is empty", () => {
    budgetCalculator = new BudgetCalculator([]);
    expect(budgetCalculator.monthlyExcessCalculator()).toEqual(0);
  });
});

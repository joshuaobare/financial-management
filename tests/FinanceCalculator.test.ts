import FinanceCalculator from "../src/helpers/FinanceCalculator";
import { budgetData, transactionData, transactionData2 } from "./testValues";

describe("For a category, return total of its values", () => {
  let budgetCalculator = new FinanceCalculator(budgetData);
  test("return total for a category", () => {
    expect(budgetCalculator.financeCategoryCalculator("Bills")).toEqual(104200);
  });
  test("needs to work for all categories", () => {
    expect(budgetCalculator.financeCategoryCalculator("Income")).toEqual(
      760000
    );
  });
  test("return zero if array is empty", () => {
    budgetCalculator = new FinanceCalculator([]);
    expect(budgetCalculator.financeCategoryCalculator("Bills")).toEqual(0);
  });
});

describe("Total monthly allocation fn ignores Income and Savings", () => {
  let budgetCalculator = new FinanceCalculator(budgetData);
  test("return total spend for the entire budget", () => {
    expect(budgetCalculator.totalMonthlySpend()).toEqual(8245210);
  });
  test("return zero if array is empty", () => {
    budgetCalculator = new FinanceCalculator([]);
    expect(budgetCalculator.totalMonthlySpend()).toEqual(0);
  });
});

describe("Monthly excess is diff between income and all other expenses", () => {
  let budgetCalculator = new FinanceCalculator(budgetData);
  test("return diff between total spending and income", () => {
    expect(budgetCalculator.monthlyExcessCalculator()).toEqual(-7485210);
  });
  test("return zero if array is empty", () => {
    budgetCalculator = new FinanceCalculator([]);
    expect(budgetCalculator.monthlyExcessCalculator()).toEqual(0);
  });
});

describe("For a given dataset, return the category with the max value and its value", () => {
  let budgetCalculator = new FinanceCalculator(budgetData);
  let transactionCalculator = new FinanceCalculator(transactionData2);
  test("return max category and value", () => {
    expect(budgetCalculator.maxValueCategory()).toEqual({
      maxValue: 8070000,
      maxCategory: "Other",
    });
  });
  test("return max category and value", () => {
    expect(transactionCalculator.maxValueCategory()).toEqual({
      maxValue: 5000,
      maxCategory: "Other",
    });
  });
});

describe("get categories close to budget", () => {
  let budgetCalculator = new FinanceCalculator(budgetData);

  test("returns categories that are within 10% of the budget and their values", () => {
    const result = budgetCalculator.categoriesNearBudgetLimit(transactionData);
    expect(result).toMatchObject([
      ["Bills", 10200],
      ["Personal", 0],
      ["Other", -100],
    ]);
  });
});

describe("get all categories", () => {
  let budgetCalculator = new FinanceCalculator(budgetData);
  test("returns all categories within the dataset", () => {
    const result = budgetCalculator.getCategories();
    result.sort();
    expect(result).toEqual(["Bills", "Income", "Other", "Personal"]);
  });
});

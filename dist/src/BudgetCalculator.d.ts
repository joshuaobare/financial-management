import { Budget } from "./interfaces/budgetInterface";
declare class BudgetCalculator {
    constructor();
    budgetCategoryCalculator(categoryData: Budget[]): number;
    totalMonthlyAllocation(budgetData: Budget[]): number;
    monthlyExcessCalculator(budgetData: Budget[]): number;
}
export default BudgetCalculator;

import { Budget } from "./interfaces/budgetInterface";
declare class BudgetCalculator {
    constructor();
    budgetCategoryCalculator(categoryData: Budget[]): number;
    totalMonthlyAllocation(budgetData: Budget[]): void;
    monthlyExcessCalculator(): void;
}
export default BudgetCalculator;

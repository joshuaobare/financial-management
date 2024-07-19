class BudgetCalculator {
    constructor() { }
    budgetCategoryCalculator(categoryData) {
        let sum = 0;
        categoryData.forEach((item) => (sum += item.amount));
        return sum;
    }
    totalMonthlyAllocation(budgetData) { }
    monthlyExcessCalculator() { }
}
export default BudgetCalculator;
//# sourceMappingURL=BudgetCalculator.js.map
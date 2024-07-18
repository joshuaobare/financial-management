import { Budget } from "./interfaces/budgetInterface.js";
declare const _default: {
    updateBudget: (budgetData: Budget) => Promise<void>;
    getEditBudgetFormValues: () => {
        category: string;
        amount: number;
        title: string;
        description: string;
        user_id: number;
        start_date: Date;
        end_date: Date;
        budget_id: number;
    };
    populateBudgetForm: (budgetData: Budget) => void;
};
export default _default;

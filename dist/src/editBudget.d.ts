import { Budget } from "./interfaces/budgetInterface.js";
declare const _default: {
    updateBudget: (budgetData: Budget) => Promise<void>;
    getEditBudgetFormValues: () => {
        category: string;
        amount: string;
        title: string;
        description: string;
        user_id: string | null;
        start_date: Date;
        end_date: Date;
    };
    populateBudgetForm: (budgetData: Budget) => void;
};
export default _default;

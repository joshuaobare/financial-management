import { Budget } from "./interfaces/budgetInterface.js";
declare const _default: {
    createBudget: (budgetData: Budget[]) => HTMLDivElement;
    resetBudgetForm: () => void;
    getBudgetFormValues: () => {
        category: string;
        amount: string;
        title: string;
        description: string;
        user_id: string | null;
        start_date: Date;
        end_date: Date;
    };
};
export default _default;

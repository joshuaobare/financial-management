import { Budget } from "../src/interfaces/budgetInterface";
import { Transaction } from "../src/interfaces/transactionInterfact";

const budgetData: Budget[] = [
  {
    budget_id: "5",
    user_id: "1",
    title: "Farm",
    category: "Income",
    amount: "80000.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-13 20:58:37",
  },
  {
    budget_id: "6",
    user_id: "1",
    title: "Salary",
    category: "Income",
    amount: "560000.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:26:36",
  },
  {
    budget_id: "7",
    user_id: "1",
    title: "Water",
    category: "Bills",
    amount: "7500.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:27:57",
  },
  {
    budget_id: "8",
    user_id: "1",
    title: "Gas",
    category: "Bills",
    amount: "1700.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:29:03",
  },
  {
    budget_id: "9",
    user_id: "1",
    title: "Internet",
    category: "Bills",
    amount: "5000.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:30:48",
  },
  {
    budget_id: "10",
    user_id: "1",
    title: "Car Insurance",
    category: "Bills",
    amount: "30000.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:34:53",
  },
  {
    budget_id: "11",
    user_id: "1",
    title: "Capital Gains",
    category: "Income",
    amount: "70000.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:36:34",
  },
  {
    budget_id: "12",
    user_id: "1",
    title: "Haircut",
    category: "Personal",
    amount: "10.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:37:02",
  },
  {
    budget_id: "14",
    user_id: "1",
    title: "Tax Returns",
    category: "Income",
    amount: "50000.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:39:23",
  },
  {
    budget_id: "15",
    user_id: "1",
    title: "Gym",
    category: "Personal",
    amount: "60000.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:41:23",
  },
  {
    budget_id: "16",
    user_id: "1",
    title: "Personal Trainer",
    category: "Personal",
    amount: "10000.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:41:38",
  },
  {
    budget_id: "17",
    user_id: "1",
    title: "Rent",
    category: "Bills",
    amount: "50000.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:50:03",
  },
  {
    budget_id: "18",
    user_id: "1",
    title: "Movies",
    category: "Personal",
    amount: "1000.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:50:46",
  },
  {
    budget_id: "19",
    user_id: "1",
    title: "Political Campaigns",
    category: "Other",
    amount: "8000000.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:58:26",
  },
  {
    budget_id: "21",
    user_id: "1",
    title: "Subscriptions",
    category: "Bills",
    amount: "10000.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:59:07",
  },
  {
    budget_id: "22",
    user_id: "1",
    title: "Offering",
    category: "Other",
    amount: "70000.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-18 20:25:56",
  },
];

const transactionData: Transaction[] = [
  {
    transaction_id: "5",
    user_id: "1",
    title: "Farm",
    category: "Income",
    amount: "80000.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-13 20:58:37",
  },
  {
    transaction_id: "6",
    user_id: "1",
    title: "Salary",
    category: "Income",
    amount: "560000.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:26:36",
  },
  {
    transaction_id: "7",
    user_id: "1",
    title: "Water",
    category: "Bills",
    amount: "7500.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:27:57",
  },
  {
    transaction_id: "8",
    user_id: "1",
    title: "Gas",
    category: "Bills",
    amount: "1700.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:29:03",
  },
  {
    transaction_id: "9",
    user_id: "1",
    title: "Internet",
    category: "Bills",
    amount: "5000.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:30:48",
  },
  {
    transaction_id: "10",
    user_id: "1",
    title: "Car Insurance",
    category: "Bills",
    amount: "19800.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:34:53",
  },
  {
    transaction_id: "11",
    user_id: "1",
    title: "Capital Gains",
    category: "Income",
    amount: "70000.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:36:34",
  },
  {
    transaction_id: "12",
    user_id: "1",
    title: "Haircut",
    category: "Personal",
    amount: "10.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:37:02",
  },
  {
    transaction_id: "14",
    user_id: "1",
    title: "Tax Returns",
    category: "Income",
    amount: "50000.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:39:23",
  },
  {
    transaction_id: "15",
    user_id: "1",
    title: "Gym",
    category: "Personal",
    amount: "60000.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:41:23",
  },
  {
    transaction_id: "16",
    user_id: "1",
    title: "Personal Trainer",
    category: "Personal",
    amount: "10000.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:41:38",
  },
  {
    transaction_id: "17",
    user_id: "1",
    title: "Rent",
    category: "Bills",
    amount: "50000.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:50:03",
  },
  {
    transaction_id: "18",
    user_id: "1",
    title: "Movies",
    category: "Personal",
    amount: "1000.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:50:46",
  },
  {
    transaction_id: "19",
    user_id: "1",
    title: "Political Campaigns",
    category: "Other",
    amount: "8000100.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:58:26",
  },
  {
    transaction_id: "21",
    user_id: "1",
    title: "Subscriptions",
    category: "Bills",
    amount: "10000.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-17 20:59:07",
  },
  {
    transaction_id: "22",
    user_id: "1",
    title: "Offering",
    category: "Other",
    amount: "70000.00",
    description: "",
    start_date: "2024-07-01",
    end_date: "2024-07-31",
    created_at: "2024-07-18 20:25:56",
  },
];

export { budgetData, transactionData };

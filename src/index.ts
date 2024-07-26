import { createHome } from "./modules/home";
import { createBudgetModule } from "./modules/budget";
import { navbar } from "./components/navbar";
import { Budget } from "./interfaces/budgetInterface";
import { Transaction } from "./interfaces/transactionInterfact";
import { createTransactionModule } from "./modules/transaction";
import { BudgetService } from "./services/BudgetService";
import { TransactionService } from "./services/TransactionService";
import { createInsightsModule } from "./modules/insights";
import "./login";
import "./register";

const container = document.getElementById("container");
const homeBtn = document.getElementById("home-btn");
const budgetBtn = document.getElementById("budget-btn");
const mainNavCont = document.getElementById("main-nav");
const transactionBtn = document.getElementById("transaction-btn");
const insightsBtn = document.getElementById("insights-btn");
const budgetService = new BudgetService();
const transactionService = new TransactionService();

mainNavCont?.appendChild(navbar);

const openHome = () => {
  const home = createHome();
  container?.replaceChildren();
  container?.appendChild(home);
};

homeBtn?.addEventListener("click", (e: Event) => {
  openHome();
});

const openBudget = async () => {
  const user_id = localStorage.getItem("user_id");

  if (user_id) {
    const budgetData = <Budget[]>await budgetService.fetchBudget(user_id);
    container?.replaceChildren();
    const budget = createBudgetModule(budgetData);
    container?.appendChild(budget);
  }
};

budgetBtn?.addEventListener("click", (e: Event) => {
  openBudget();
});

const openTransaction = async () => {
  const user_id = localStorage.getItem("user_id");

  if (user_id) {
    const transactionData = <Transaction[]>(
      await transactionService.fetchTransactions(user_id)
    );
    container?.replaceChildren();
    const transaction = createTransactionModule(transactionData);
    container?.appendChild(transaction);
  }
};

transactionBtn?.addEventListener("click", () => {
  openTransaction();
});

const openInsights = async () => {
  const user_id = localStorage.getItem("user_id");

  if (user_id) {
    const transactionData = <Transaction[]>(
      await transactionService.fetchTransactions(user_id)
    );
    const budgetData = <Budget[]>await budgetService.fetchBudget(user_id);
    container?.replaceChildren();
    const transaction = createInsightsModule(budgetData, transactionData);
    container?.appendChild(transaction);
  }
};

insightsBtn?.addEventListener("click", () => {
  openInsights();
});

openHome();

export { openBudget, openTransaction };

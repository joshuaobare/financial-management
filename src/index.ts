import { createHome } from "./home";
import { createBudgetModule } from "./budget";
import { navbar } from "./navbar";
import { Budget } from "./interfaces/budgetInterface";
import { Transaction } from "./interfaces/transactionInterfact";
import { createTransactionModule } from "./transaction";
import { config } from "./config";
import { BudgetService } from "./budgetService";
import { TransactionService } from "./TransactionService";

const container = document.getElementById("container");
const homeBtn = document.getElementById("home-btn");
const budgetBtn = document.getElementById("budget-btn");
const mainNavCont = document.getElementById("main-nav");
const transactionBtn = document.getElementById("transaction-btn");
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
  const budgetData = <Budget[]>await budgetService.fetchBudget();
  container?.replaceChildren();
  const budget = createBudgetModule(budgetData);
  container?.appendChild(budget);
};

budgetBtn?.addEventListener("click", (e: Event) => {
  openBudget();
});

const openTransaction = async () => {
  const transactionData = <Transaction[]>(
    await transactionService.fetchTransactions()
  );
  container?.replaceChildren();
  const transaction = createTransactionModule(transactionData);
  container?.appendChild(transaction);
};

transactionBtn?.addEventListener("click", () => {
  openTransaction();
});

openHome();

export { openBudget, openTransaction };

import { createHome } from "./modules/home";
import { createBudgetModule } from "./modules/budget";
import { createNavComponent } from "./components/navbar";
import { Budget } from "./interfaces/budgetInterface";
import { Transaction } from "./interfaces/transactionInterfact";
import { createTransactionModule } from "./modules/transaction";
import { BudgetService } from "./services/BudgetService";
import { TransactionService } from "./services/TransactionService";
import { createInsightsModule } from "./modules/insights";
import { createGoalsModule } from "./modules/goals";
import "./login";
import "./register";
import { GoalService } from "./services/GoalService";
import { Goal } from "./interfaces/goalInterface";
import { UserService } from "./services/UserService";
import { createInvestmentsModule } from "./modules/investments";

const container = document.getElementById("container");
const homeBtn = document.getElementById("home-btn");
const budgetBtn = document.getElementById("budget-btn");
const mainNavCont = document.getElementById("main-nav");
const transactionBtn = document.getElementById("transaction-btn");
const insightsBtn = document.getElementById("insights-btn");
const goalsBtn = document.getElementById("goals-btn");
const investmentBtn = document.getElementById("investments-btn");
const budgetService = new BudgetService();
const transactionService = new TransactionService();
const goalService = new GoalService();
const userService = new UserService();

const renderNav = async () => {
  const userId = localStorage.getItem("user_id");

  if (userId) {
    const userData = await userService.fetchUser(userId);
    mainNavCont?.appendChild(createNavComponent(userData));
  } else {
    mainNavCont?.appendChild(createNavComponent(null));
  }
};

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

const openGoals = async () => {
  const user_id = localStorage.getItem("user_id");

  if (user_id) {
    const transactionData = <Transaction[]>(
      await transactionService.fetchTransactions(user_id)
    );
    const goalData = <Goal[]>await goalService.fetchGoals(user_id);
    const goals = createGoalsModule(transactionData, goalData);
    container?.replaceChildren();
    container?.appendChild(goals);
  }
};

goalsBtn?.addEventListener("click", () => {
  openGoals();
});

const openInvestments = () => {
  const investments = createInvestmentsModule();
  container?.replaceChildren();
  container?.appendChild(investments);
};

investmentBtn?.addEventListener("click", () => {
  openInvestments();
});

openHome();
renderNav();

export { openBudget, openTransaction, openGoals };

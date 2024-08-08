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
import { createFaqModule } from "./modules/faq";

// Get DOM elements
const container = document.getElementById("container");
const homeBtn: HTMLElement | null = document.getElementById("home-btn");
const budgetBtn: HTMLElement | null = document.getElementById("budget-btn");
const mainNavCont = document.getElementById("main-nav");
const transactionBtn: HTMLElement | null =
  document.getElementById("transaction-btn");
const insightsBtn: HTMLElement | null = document.getElementById("insights-btn");
const goalsBtn: HTMLElement | null = document.getElementById("goals-btn");
const investmentBtn: HTMLElement | null =
  document.getElementById("investments-btn");
const faqBtn: HTMLElement | null = document.getElementById("faq-btn");

// Array of all navigation buttons
const navBtns: (HTMLElement | null)[] = [
  homeBtn,
  budgetBtn,
  transactionBtn,
  insightsBtn,
  goalsBtn,
  investmentBtn,
  faqBtn,
];

// Initialize services
const budgetService = new BudgetService();
const transactionService = new TransactionService();
const goalService = new GoalService();
const userService = new UserService();

// Function to reset the color of all navigation buttons after new button is clicked
const resetNavColor = () => {
  navBtns.forEach((btn) => {
    if (btn) {
      btn!.removeAttribute("style");
    }
  });
};

// Function to render the navbar component
const renderNav = async () => {
  const userId = localStorage.getItem("user_id");

  if (userId) {
    const userData = await userService.fetchUser(userId);
    mainNavCont?.appendChild(createNavComponent(userData));
  } else {
    mainNavCont?.appendChild(createNavComponent(null));
  }
};

// Function to open the home page module
const openHome = async () => {
  const userId = localStorage.getItem("user_id");

  if (userId) {
    const goalData = <Goal[]>await goalService.fetchGoals(userId);
    const budgetData = <Budget[]>await budgetService.fetchBudget(userId);
    const userData = await userService.fetchUser(userId);
    const transactionData = <Transaction[]>(
      await transactionService.fetchTransactions(userId)
    );
    const home = createHome(goalData, budgetData, transactionData, userData);
    container?.replaceChildren();
    container?.appendChild(home);
  }
};

// Function to open the budget module
const openBudget = async () => {
  const user_id = localStorage.getItem("user_id");

  if (user_id) {
    const budgetData = <Budget[]>await budgetService.fetchBudget(user_id);
    container?.replaceChildren();
    const budget = createBudgetModule(budgetData);
    container?.appendChild(budget);
  }
};

// Function to open the transaction module
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

// Function to open the insights module
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

// Function to open the goals module
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

// Function to open the investments module
const openInvestments = () => {
  const investments = createInvestmentsModule();
  container?.replaceChildren();
  container?.appendChild(investments);
};

// Function to open the faq module
const openFAQ = () => {
  const faq = createFaqModule();
  container?.replaceChildren();
  container?.appendChild(faq);
};

// Function to start the application
const start = () => {
  openHome();
  if (homeBtn) {
    homeBtn!.style.backgroundColor = "gold";
  }
  renderNav();
};

// Event listeners
homeBtn?.addEventListener("click", (e: Event) => {
  openHome();
  resetNavColor();
  homeBtn.style.backgroundColor = "gold";
});

budgetBtn?.addEventListener("click", (e: Event) => {
  openBudget();
  resetNavColor();
  budgetBtn.style.backgroundColor = "gold";
});

transactionBtn?.addEventListener("click", () => {
  openTransaction();
  resetNavColor();
  transactionBtn.style.backgroundColor = "gold";
});

insightsBtn?.addEventListener("click", () => {
  openInsights();
  resetNavColor();
  insightsBtn.style.backgroundColor = "gold";
});

goalsBtn?.addEventListener("click", () => {
  openGoals();
  resetNavColor();
  goalsBtn.style.backgroundColor = "gold";
});

investmentBtn?.addEventListener("click", () => {
  openInvestments();
  resetNavColor();
  investmentBtn.style.backgroundColor = "gold";
});

faqBtn?.addEventListener("click", () => {
  openFAQ();
  resetNavColor();
  faqBtn.style.backgroundColor = "gold";
});

// Call the start function to initialize the application
start();

export { openBudget, openTransaction, openGoals };

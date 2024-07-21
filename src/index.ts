import { createHome } from "./home";
import { createBudget } from "./budget";
import { navbar } from "./navbar";
import { Budget } from "./interfaces/budgetInterface";
import { createTransaction } from "./transaction";

const container = document.getElementById("container");
const homeBtn = document.getElementById("home-btn");
const budgetBtn = document.getElementById("budget-btn");
const mainNavCont = document.getElementById("main-nav");
const transactionBtn = document.getElementById("transaction-btn");

mainNavCont?.appendChild(navbar);

const fetchBudgetData = async () => {
  const userId = localStorage.getItem("user_id");
  try {
    const request = await fetch(
      `http://localhost:8080/financial-management/php/fetchBudget.php?user_id=${userId}`,
      {
        method: "GET",
        headers: { "Content-type": "application/json" },
      }
    );
    const response = await request.json();

    if (response.budgets) {
      return response.budgets;
    }
  } catch (error) {
    console.error(error);
  }
};

const fetchTransactionData = async () => {
  const userId = localStorage.getItem("user_id");
  try {
    const request = await fetch(
      `http://localhost:8080/financial-management/php/fetchTransactions.php?user_id=${userId}`,
      {
        method: "GET",
        headers: { "Content-type": "application/json" },
      }
    );
    const response = await request.json();

    if (response.transactions) {
      return response.transactions;
    }
  } catch (error) {
    console.error(error);
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
  const budgetData = <Budget[]>await fetchBudgetData();
  container?.replaceChildren();
  const budget = createBudget(budgetData);
  container?.appendChild(budget);
};

budgetBtn?.addEventListener("click", (e: Event) => {
  openBudget();
});

const openTransaction = async () => {
  const transactionData = await fetchTransactionData();
  container?.replaceChildren();
  const transaction = createTransaction(transactionData);
  container?.appendChild(transaction);
};

transactionBtn?.addEventListener("click", () => {
  openTransaction();
});

openHome();

export { openBudget };

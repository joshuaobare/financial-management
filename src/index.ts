import createHome from "./home.js";
import createBudget from "./budget.js";
import navbar from "./navbar.js";
import { Budget } from "./interfaces/budgetInterface.js";

const container = document.getElementById("container");
const homeBtn = document.getElementById("home-btn");
const budgetBtn = document.getElementById("budget-btn");
const mainNavCont = document.getElementById("main-nav");

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

const openHome = () => {
  const home = createHome();
  container?.replaceChildren();
  container?.appendChild(home);
};

homeBtn?.addEventListener("click", (e: Event) => {
  openHome();
});

const openBudget = async () => {
  const budgetData = await fetchBudgetData();
  container?.replaceChildren();
  const budget = createBudget.createBudget(budgetData);
  container?.appendChild(budget);
};

budgetBtn?.addEventListener("click", (e: Event) => {
  openBudget();
});

openHome();

export default openBudget;

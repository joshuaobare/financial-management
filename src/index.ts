import createHome from "./home.js";
import createBudget from "./budget.js";
import navbar from "./navbar.js";

const container = document.getElementById("container");
const homeBtn = document.getElementById("home-btn");
const budgetBtn = document.getElementById("budget-btn");
const mainNavCont = document.getElementById("main-nav");

mainNavCont?.appendChild(navbar);

const openHome = () => {
  const home = createHome();
  container?.replaceChildren();
  container?.appendChild(home);
};

homeBtn?.addEventListener("click", (e: Event) => {
  openHome();
});

budgetBtn?.addEventListener("click", (e: Event) => {
  const budget = createBudget();
  container?.replaceChildren();
  container?.appendChild(budget);
});

openHome();

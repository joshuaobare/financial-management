import createHome from "./home.js";
import createBudget from "./budget.js";

const container = document.getElementById("container");
const homeBtn = document.getElementById("home-btn");
const budgetBtn = document.getElementById("budget-btn");

homeBtn?.addEventListener("click", (e: Event) => {
  const home = createHome();
  container?.replaceChildren();
  container?.appendChild(home);
});

budgetBtn?.addEventListener("click", (e: Event) => {
  const budget = createBudget();
  container?.replaceChildren();
  container?.appendChild(budget);
});

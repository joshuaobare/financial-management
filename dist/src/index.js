import createHome from "./home.js";
import createBudget from "./budget.js";
const container = document.getElementById("container");
const homeBtn = document.getElementById("home-btn");
const budgetBtn = document.getElementById("budget-btn");
homeBtn === null || homeBtn === void 0 ? void 0 : homeBtn.addEventListener("click", (e) => {
    const home = createHome();
    container === null || container === void 0 ? void 0 : container.replaceChildren();
    container === null || container === void 0 ? void 0 : container.appendChild(home);
});
budgetBtn === null || budgetBtn === void 0 ? void 0 : budgetBtn.addEventListener("click", (e) => {
    const budget = createBudget();
    container === null || container === void 0 ? void 0 : container.replaceChildren();
    container === null || container === void 0 ? void 0 : container.appendChild(budget);
});
//# sourceMappingURL=index.js.map
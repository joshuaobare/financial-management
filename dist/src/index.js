import createHome from "./home.js";
import createBudget from "./budget.js";
import navbar from "./navbar.js";
const container = document.getElementById("container");
const homeBtn = document.getElementById("home-btn");
const budgetBtn = document.getElementById("budget-btn");
const mainNavCont = document.getElementById("main-nav");
mainNavCont === null || mainNavCont === void 0 ? void 0 : mainNavCont.appendChild(navbar);
const openHome = () => {
    const home = createHome();
    container === null || container === void 0 ? void 0 : container.replaceChildren();
    container === null || container === void 0 ? void 0 : container.appendChild(home);
};
homeBtn === null || homeBtn === void 0 ? void 0 : homeBtn.addEventListener("click", (e) => {
    openHome();
});
budgetBtn === null || budgetBtn === void 0 ? void 0 : budgetBtn.addEventListener("click", (e) => {
    const budget = createBudget();
    container === null || container === void 0 ? void 0 : container.replaceChildren();
    container === null || container === void 0 ? void 0 : container.appendChild(budget);
});
openHome();
//# sourceMappingURL=index.js.map
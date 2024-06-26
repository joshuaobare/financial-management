import createCalendar from "./calendar.js";
const createBudget = () => {
    const budget = document.createElement("div");
    budget.className = "budget";
    //newDiv?.setAttribute("background-color", "black");
    const heading = document.createElement("h1");
    heading.textContent = "BUDGET HEADING";
    const calendar = createCalendar();
    budget.appendChild(calendar);
    return budget;
};
export default createBudget;
//# sourceMappingURL=budget.js.map
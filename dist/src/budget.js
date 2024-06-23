import createCalendar from "./calendar.js";
const createBudget = () => {
    const newDiv = document.createElement("div");
    //newDiv?.setAttribute("background-color", "black");
    const heading = document.createElement("h1");
    heading.textContent = "BUDGET HEADING";
    const calendar = createCalendar();
    newDiv.appendChild(calendar);
    return newDiv;
};
export default createBudget;
//# sourceMappingURL=budget.js.map
const createBudget = (): HTMLDivElement => {
  const newDiv = document.createElement("div");
  //newDiv?.setAttribute("background-color", "black");
  const heading = document.createElement("h1");
  heading.textContent = "BUDGET HEADING";
  newDiv.appendChild(heading);
  return newDiv;
};

export default createBudget;

import "../../styles/main.css";
import "../../styles/home.css";
import { activeGoalsComponent } from "./goals";
import { Goal } from "../interfaces/goalInterface";
import { Budget } from "../interfaces/budgetInterface";
import { Transaction } from "../interfaces/transactionInterfact";

const createHome = (
  goalData: Goal[],
  budgetData: Budget[],
  transactionData: Transaction[]
): HTMLDivElement => {
  const homeDiv = document.createElement("div");
  const header = createHeader();

  homeDiv.appendChild(header);
  homeDiv.appendChild(activeGoalsComponent(goalData, "home"));

  return homeDiv;
};

const createHeader = (): HTMLDivElement => {
  const header = document.createElement("div");

  // create and populate left and right portions of the header
  const headerLeft = document.createElement("span");
  const headerRight = document.createElement("span");
  headerLeft.textContent = "Welcome ";
  headerRight.textContent = "Jack!";
  headerLeft.className = "home-header";
  headerRight.className = "home-header home-header-right";

  header.append(headerLeft, headerRight);

  // Create a div for tag line below welcome message
  const homeTagLine = document.createElement("div");
  homeTagLine.textContent =
    "Ready to take control of your finances? Let's get started.";
  header.appendChild(homeTagLine);
  return header;
};

export { createHome };

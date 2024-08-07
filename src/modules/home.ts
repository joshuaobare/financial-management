import "../../styles/main.css";
import "../../styles/home.css";
import { activeGoalsComponent } from "./goals";
import { Goal } from "../interfaces/goalInterface";
import { Budget } from "../interfaces/budgetInterface";
import { Transaction } from "../interfaces/transactionInterfact";
import { calendarSidebar } from "../components/calendarSidebar";
import { User } from "../interfaces/userInterface";

const createHome = (
  goalData: Goal[],
  budgetData: Budget[],
  transactionData: Transaction[],
  userData: User
): HTMLDivElement => {
  const homeDiv = document.createElement("div");
  const header = createHeader(userData);

  homeDiv.appendChild(header);
  homeDiv.appendChild(activeGoalsComponent(goalData, "home"));
  const chartsCont = document.createElement("div");
  const budgetChart = document.createElement("div");
  const budgetChartHeader = document.createElement("h3");
  budgetChartHeader.textContent = "Budget";
  budgetChart.append(budgetChartHeader, calendarSidebar(budgetData));

  const transactionChart = document.createElement("div");
  const transactionChartHeader = document.createElement("h3");
  transactionChartHeader.textContent = "Transactions";
  transactionChart.append(
    transactionChartHeader,
    calendarSidebar(transactionData)
  );
  chartsCont.className = "home-charts-cont";
  chartsCont.append(budgetChart, transactionChart);
  homeDiv.appendChild(chartsCont);
  return homeDiv;
};

const createHeader = (userData: User): HTMLDivElement => {
  const header = document.createElement("div");

  // create and populate left and right portions of the header
  const headerLeft = document.createElement("span");
  const headerRight = document.createElement("span");
  headerLeft.textContent = "Welcome ";
  headerRight.textContent = `${userData.first_name}`;
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

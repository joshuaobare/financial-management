import { Goal } from "../interfaces/goalInterface";
import { Transaction } from "../interfaces/transactionInterfact";
import { Helper } from "../helpers/Helper";
import "../../styles/goals.css";

const helper = new Helper();
const goalFormDialog = <HTMLDialogElement>(
  document.getElementById("goal-dialog")
);
const goalForm = <HTMLFormElement>document.getElementById("goal-form");
const editGoalForm = <HTMLFormElement>document.getElementById("goal-form");
const goalDialogCloseBtn = document.getElementById("goal-dialog-close");
const editGoalDialogCloseBtn = document.getElementById(
  "edit-goal-dialog-close"
);

const createGoalsModule = (
  transactionData: Transaction[],
  goalData: Goal[]
) => {
  const goals = document.createElement("div");
  goals.className = "goals";
  const activeGoals = activeGoalsComponent(goalData);
  const expiredGoals = expiredGoalsComponent(goalData);
  goals.append(activeGoals, expiredGoals);

  return goals;
};

const activeGoalsComponent = (goalData: Goal[]) => {
  const activeGoals = document.createElement("div");
  activeGoals.className = "goals-active";
  const activeGoalsHeader = document.createElement("h3");
  activeGoalsHeader.textContent = "Active Goals";
  const activeGoalsBody = document.createElement("div");

  goalData.forEach((goal) => {
    activeGoalsBody.append(goalItem(goal));
  });

  const newGoalBtn = document.createElement("button");
  newGoalBtn.textContent = "Create New Goal";

  newGoalBtn.addEventListener("click", () => {
    goalFormDialog.show();
  });
  activeGoals.append(activeGoalsHeader, activeGoalsBody, newGoalBtn);
  return activeGoals;
};

const expiredGoalsComponent = (goalData: Goal[]) => {
  const expiredGoals = document.createElement("div");
  expiredGoals.className = "goals-expired";
  const expiredGoalsHeader = document.createElement("h3");
  expiredGoalsHeader.className = "goals-expired-header";
  expiredGoalsHeader.textContent = "Expired Goals";
  const expiredGoalsBody = document.createElement("div");
  expiredGoalsBody.className = "goals-expired-body";
  const accomplishedGoalData = goalData.filter((goal) => goal.is_achieved);
  const unAccomplishedGoalData = goalData.filter((goal) => !goal.is_achieved);
  const accomplishedGoals = accomplishedGoalsSection(accomplishedGoalData);
  const unaccomplishedGoals = unaccomplishedGoalsSection(
    unAccomplishedGoalData
  );
  expiredGoalsBody.append(accomplishedGoals, unaccomplishedGoals);
  expiredGoals.append(expiredGoalsHeader, expiredGoalsBody);

  return expiredGoals;
};

const accomplishedGoalsSection = (goalData: Goal[]) => {
  const accomplishedGoals = document.createElement("div");
  const accomplishedGoalsHeader = document.createElement("h4");
  accomplishedGoalsHeader.textContent = "Accomplished Goals";
  accomplishedGoals.appendChild(accomplishedGoalsHeader);

  goalData.forEach((goal) => {
    accomplishedGoals.append(goalItem(goal));
  });

  return accomplishedGoals;
};

const unaccomplishedGoalsSection = (goalData: Goal[]) => {
  const unaccomplishedGoals = document.createElement("div");
  const unAccomplishedGoalsHeader = document.createElement("h4");
  unAccomplishedGoalsHeader.textContent = "Unaccomplished Goals";
  unaccomplishedGoals.appendChild(unAccomplishedGoalsHeader);

  goalData.forEach((goal) => {
    unaccomplishedGoals.append(goalItem(goal));
  });

  return unaccomplishedGoals;
};

const goalItem = (currentGoal: Goal) => {
  const goal = document.createElement("div");
  const goalName = document.createElement("div");
  goalName.textContent = currentGoal.goal_name;
  const daysLeft = document.createElement("div");
  const days = helper.getDaysBetweenDates(
    new Date(),
    new Date(currentGoal.due_date)
  );
  daysLeft.textContent = `${days} days left`;
  const currentAmount = document.createElement("div");
  currentAmount.textContent = currentGoal.current_amount;
  const targetAmount = document.createElement("div");
  targetAmount.textContent = currentGoal.target_amount;
  const dueDate = document.createElement("div");
  dueDate.textContent = currentGoal.due_date;

  goal.append(goalName, daysLeft, currentAmount, targetAmount, dueDate);

  return goal;
};

goalDialogCloseBtn?.addEventListener("click", () => {
  goalFormDialog!.close();
});

export { createGoalsModule };

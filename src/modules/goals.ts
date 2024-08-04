import { Goal } from "../interfaces/goalInterface";
import { Transaction } from "../interfaces/transactionInterfact";
import { Helper } from "../helpers/Helper";
import "../../styles/goals.css";
import { GoalService } from "../services/GoalService";
import { openGoals } from "../index";

const helper = new Helper();
const goalFormDialog = <HTMLDialogElement>(
  document.getElementById("goal-dialog")
);
const editGoalFormDialog = <HTMLDialogElement>(
  document.getElementById("edit-goal-dialog")
);
const goalForm = <HTMLFormElement>document.getElementById("goal-form");
const editGoalForm = <HTMLFormElement>document.getElementById("goal-form");
const goalDialogCloseBtn = document.getElementById("goal-dialog-close");
const editGoalDialogCloseBtn = document.getElementById(
  "edit-goal-dialog-close"
);
const goalService = new GoalService();

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
  const accomplishedGoalData = goalData.filter(
    (goal) => goal.is_achieved && new Date(goal.due_date) < new Date()
  );
  const unAccomplishedGoalData = goalData.filter(
    (goal) => !goal.is_achieved && new Date(goal.due_date) < new Date()
  );
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
  goal.className = "goal-item";
  const goalName = document.createElement("div");
  goalName.className = "goal-item-name";
  goalName.textContent = currentGoal.goal_name;
  const daysLeft = document.createElement("div");
  daysLeft.className = "goal-item-days-left";
  const days = helper.getDaysBetweenDates(
    new Date(),
    new Date(currentGoal.due_date)
  );
  daysLeft.textContent = `${days} day${days === 1 ? "" : "s"} left`;
  const currentAmount = document.createElement("div");
  currentAmount.className = "goal-item-current-amount";
  currentAmount.textContent = `KShs. ${currentGoal.current_amount}`;
  const targetAmount = document.createElement("div");
  targetAmount.className = "goal-item-target-amount";
  targetAmount.textContent = `KShs. ${currentGoal.target_amount}`;
  const dueDate = document.createElement("div");
  dueDate.className = "goal-item-due-date";
  const dateText = new Date(currentGoal.due_date).toString().split(" ");
  dueDate.textContent = dateText.slice(0, 4).join(" ");

  goal.append(goalName, daysLeft, currentAmount, targetAmount, dueDate);

  return goal;
};

const resetGoalForm = () => {
  const goal_name = <HTMLInputElement>(
    document.getElementById("goal-form-goal-name")
  );
  goal_name.value = "";
  const target_amount = <HTMLInputElement>(
    document.getElementById("goal-form-target-amount")
  );
  target_amount.value = "";
  const description = <HTMLInputElement>(
    document.getElementById("goal-form-description")
  );
  description.value = "";
  const due_date = <HTMLInputElement>(
    document.getElementById("goal-form-due-date")
  );
  due_date.value = "";
};

const getGoalFormValues = () => {
  const goal_name = (<HTMLInputElement>(
    document.getElementById("goal-form-goal-name")
  )).value;
  const target_amount = (<HTMLInputElement>(
    document.getElementById("goal-form-target-amount")
  )).value;
  const description = (<HTMLInputElement>(
    document.getElementById("goal-form-description")
  )).value;
  const due_date = (<HTMLInputElement>(
    document.getElementById("goal-form-due-date")
  )).value;
  const user_id = localStorage.getItem("user_id");

  return {
    goal_name,
    target_amount,
    description,
    due_date,
    user_id,
    is_achieved: false,
  };
};

const createNewGoalItem = async (e: Event) => {
  e.preventDefault();
  const goalFormValues = getGoalFormValues();
  const successfulGoalSubmission = await goalService.createGoal(goalFormValues);

  if (successfulGoalSubmission) {
    resetGoalForm();
    goalFormDialog.close();
    openGoals();
  }
};

goalForm.addEventListener("submit", (e: Event) => {
  createNewGoalItem(e);
});

goalDialogCloseBtn?.addEventListener("click", () => {
  goalFormDialog!.close();
});

editGoalDialogCloseBtn?.addEventListener("click", () => {
  editGoalFormDialog!.close();
});

export { createGoalsModule };

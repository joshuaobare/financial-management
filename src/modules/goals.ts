import { Goal } from "../interfaces/goalInterface";
import { Transaction } from "../interfaces/transactionInterfact";

const createGoalsModule = (
  transactionData: Transaction[],
  goalData: Goal[]
) => {
  const goals = document.createElement("div");
  const activeGoals = activeGoalsComponent(goalData);
  const expiredGoals = document.createElement("div");
  const accomplishedGoals = document.createElement("div");
  const unaccomplishedGoals = document.createElement("div");

  expiredGoals.append(accomplishedGoals, unaccomplishedGoals);
  goals.append(activeGoals, expiredGoals);

  return goals;
};

const activeGoalsComponent = (goalData: Goal[]) => {
  const activeGoals = document.createElement("div");
  const activeGoalsHeader = document.createElement("h3");
  activeGoalsHeader.textContent = "Active Goals";
  const activeGoalsBody = document.createElement("div");

  goalData.forEach((goal) => {
    activeGoalsBody.append(goalItem(goal));
  });

  const newGoalBtn = document.createElement("button");
  newGoalBtn.textContent = "Create New Goal";
  activeGoals.append(activeGoalsHeader, activeGoalsBody, newGoalBtn);
  return activeGoals;
};

const goalItem = (currentGoal: Goal) => {
  const goal = document.createElement("div");
  const goalName = document.createElement("div");
  goalName.textContent = currentGoal.goal_name;
  const daysLeft = document.createElement("div");
  const currentAmount = document.createElement("div");
  currentAmount.textContent = currentGoal.current_amount;
  const targetAmount = document.createElement("div");
  targetAmount.textContent = currentGoal.target_amount;
  const dueDate = document.createElement("div");
  dueDate.textContent = currentGoal.due_date;

  goal.append(goalName, daysLeft, currentAmount, targetAmount, dueDate);

  return goal;
};

export { createGoalsModule };

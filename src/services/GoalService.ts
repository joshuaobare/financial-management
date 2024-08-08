import { config } from "../config";
import { Goal } from "../interfaces/goalInterface";

// class facilitates CRUD functionality for the Goals table
class GoalService {
  constructor() {}

  fetchGoals = async (userId: string) => {
    try {
      const request = await fetch(
        config.BASE_URL + `goalFetch.php?user_id=${userId}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      );
      const response = await request.json();

      if (response.goals) {
        return response.goals;
      }
    } catch (error) {
      console.error(error);
    }
  };

  createGoal = async (goalFormValues: any) => {
    try {
      const request = await fetch(config.BASE_URL + "goalCreate.php", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(goalFormValues),
      });
      const response = await request.json();

      if (response.message) {
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  updateGoal = async (goalData: Goal) => {
    try {
      const request = await fetch(config.BASE_URL + "goalUpdate.php", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(goalData),
      });
      const response = await request.json();

      if (response.message) {
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  deleteGoal = async (goalId: string) => {
    try {
      const request = await fetch(
        config.BASE_URL + `goalDelete.php?goal_id=${goalId}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      );
      const response = await request.json();

      if (response.message) {
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };
}

export { GoalService };

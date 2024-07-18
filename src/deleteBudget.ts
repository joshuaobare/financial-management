import openBudget from "./index.js";

const deleteBudget = async (budget_id: number) => {
  try {
    const request = await fetch(
      `http://localhost:8080/financial-management/php/deleteBudget.php?budget_id=${budget_id}`,
      {
        method: "GET",
        headers: { "Content-type": "application/json" },
      }
    );
    const response = await request.json();

    if (response.message) {
      openBudget();
    }
  } catch (error) {
    console.error(error);
  }
};

export default deleteBudget;

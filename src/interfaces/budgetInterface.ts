interface Budget {
  amount: string;
  budget_id: string;
  category: string;
  created_at: string | null;
  description: string;
  end_date: string;
  start_date: string;
  title: string;
  user_id: string;
}

const isBudget = (financeData: Budget): financeData is Budget => {
  return "budget_id" in financeData;
};

export { Budget, isBudget };

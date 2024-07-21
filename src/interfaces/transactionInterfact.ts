interface Transaction {
  amount: string;
  transaction_id: string;
  category: string;
  created_at: string | null;
  description: string;
  end_date: string;
  start_date: string;
  title: string;
  user_id: string;
}

const isTransaction = (
  financeData: Transaction
): financeData is Transaction => {
  return "transaction_id" in financeData;
};

export { Transaction, isTransaction };

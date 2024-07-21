export interface Transaction {
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

export interface Budget {
  amount: number;
  budget_id: number;
  category: string;
  created_at: Date | null;
  description: string;
  end_date: Date;
  start_date: Date;
  title: string;
  user_id: number;
}

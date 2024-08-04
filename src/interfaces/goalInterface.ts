interface Goal {
  goal_id: string;
  user_id: string | null;
  goal_name: string;
  target_amount: string;
  current_amount: string;
  description: string;
  is_achieved: string;
  due_date: string;
  created_at: string;
}

export { Goal };

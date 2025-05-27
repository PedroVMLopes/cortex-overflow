export interface Task {
    id: number;
    created_at?: Date;
    name: string;
    attribute?: string;
    silver_reward: number;
    gold_reward: number;
    is_completed: boolean;
    reward_given: boolean;
    user_id: 1;
}
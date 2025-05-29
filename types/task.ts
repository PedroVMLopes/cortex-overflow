export interface Task {
    id: number;
    name: string;
    silver_reward: number;
    gold_reward: number;
    is_completed: boolean;
    reward_given: boolean;
    user_id: number;
    xp_reward: number;
    attribute?: string;
    created_at?: Date;
}
import { Task } from "./task";

export interface TaskCard {
    task: Task;
    onTaskRemove: (id: number, userId: number) => void;
    onRewardUpdate: (id: number, userId: number, rewardType: 'silver_reward' | 'gold_reward', operation: 'increase' | 'decrease') => void;
}

/*
onToggleCompletion: (id: number) => void;
onRewardUpdate: (id: number, type: 'silver' | 'gold', operation: 'increase' | 'decrease') => void;
onAttributeChange: (id: number, att: string) => void;
*/
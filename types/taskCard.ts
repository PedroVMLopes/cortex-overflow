import { Task } from "./task";
import { User } from "./AppUser";

export interface TaskCard {
    task: Task;
    onTaskRemove: (id: number, userId: number) => void;
    onRewardUpdate: (id: number, userId: number, rewardType: 'silver_reward' | 'gold_reward', operation: 'increase' | 'decrease') => void;
    onToggleCompletion: (
        id: number, 
        userId: number,
        silver_reward: number, 
        gold_reward: number, 
        completionStatus: boolean, 
        wasRewardGiven: boolean,
        userData: User,
        refreshUserData: () => void,
        xpReward: number,
        attribute?: string
    ) => void;
    onToggleAttribute: (id: number, userId: number, attributeName: string) => void;
}

import { Task } from "./task";

export interface TaskCard {
    task: Task;
    onTaskRemove: (id: number, user_id: number) => void;
}

/*
onToggleCompletion: (id: number) => void;
onRewardUpdate: (id: number, type: 'silver' | 'gold', operation: 'increase' | 'decrease') => void;
onAttributeChange: (id: number, att: string) => void;
*/
import { Task } from "./task";

export interface TaskCard {
    task: Task;
    onToggleCompletion: (id: number) => void;
    onRewardUpdate: (id: number, type: 'silver' | 'gold', operation: 'increase' | 'decrease') => void;
    onTaskDelete: (id: number) => void;
    onAttributeChange: (id: number, att: string) => void;
}
import { renderHook, act } from "@testing-library/react";
import { useTasks } from "@/hooks/useTasks";
import { deleteTask, fetchTasks, updateTaskRewardOnDB } from "@/services/taskServices";
import { useUserContext } from "@/context/UserContext";

jest.mock("@/services/taskServices", () => ({
    deleteTask: jest.fn(),
    fetchTasks: jest.fn(),
    updateTaskRewardOnDB: jest.fn(),
}));

jest.mock("@/context/UserContext", () => ({
    useUserContext: jest.fn(),
}));

jest.mock("@/hooks/useUserAttributes", () => ({
    useUserAttributes: jest.fn().mockReturnValue({
        getSingleAttributeFromUser: jest.fn(),
        updateUserAttribute: jest.fn(),
    }),
}));

describe("useTasks with useUserContext and fetchTasks mock", () => {
    const mockUserData = { id: 123 };
    const fixedDate = new Date("2025-06-26T23:15:35.000Z");

    beforeEach(() => {
        jest.useFakeTimers();

        (useUserContext as jest.Mock).mockReturnValue({
            userData: mockUserData,
            refreshUserData: jest.fn(),
        });

        (fetchTasks as jest.Mock).mockResolvedValue([]);
        (updateTaskRewardOnDB as jest.Mock).mockResolvedValue(undefined);
    });

    afterEach(() => {
        jest.runOnlyPendingTimers(); // Limpa timers pendentes
        jest.useRealTimers();        // Restaura o comportamento real dos timers
    });

    it("removes the task", async () => {
        (deleteTask as jest.Mock).mockResolvedValueOnce(undefined);

        const tasksMock = [
            {
                id: 1,
                name: "name1",
                silver_reward: 0,
                gold_reward: 0,
                is_completed: false,
                reward_given: false,
                user_id: 0,
                xp_reward: 1,
                created_at: fixedDate
            },
            {
                id: 2,
                name: "name2",
                silver_reward: 0,
                gold_reward: 0,
                is_completed: false,
                reward_given: false,
                user_id: 0,
                xp_reward: 1,
                created_at: fixedDate
            },
            {
                id: 3,
                name: "name3",
                silver_reward: 0,
                gold_reward: 0,
                is_completed: false,
                reward_given: false,
                user_id: 0,
                xp_reward: 1,
                created_at: fixedDate
            }
        ];

        const { result } = renderHook(() => useTasks());

        await act(async () => {
            await Promise.resolve();
        });

        act(() => {
            result.current.setTasks(tasksMock);
        });

        await act(async () => {
            await result.current.removeTaskById(2, mockUserData.id);
        });

        expect(deleteTask).toHaveBeenCalledWith(2, mockUserData.id);
        expect(result.current.tasks).toEqual([tasksMock[0], tasksMock[2]]);
    });

    it('updates the task reward', async () => {
        const taskMock = [
            {
                id: 0,
                name: 'name1',
                silver_reward: 0,
                gold_reward: 0,
                is_completed: false,
                reward_given: false,
                user_id: 0,
                xp_reward: 1,
                created_at: fixedDate,
            },
        ];

        const { result } = renderHook(() => useTasks());

        await act(async () => {});

        act(() => {
            result.current.setTasks(taskMock);
        });

        await act(async () => {
            await result.current.updateTaskReward(0, mockUserData.id, 'silver_reward', 'increase');
        });

        // Avança o tempo do debounce para disparar a função
        act(() => {
            jest.advanceTimersByTime(2000);
        });

        expect(updateTaskRewardOnDB).toHaveBeenCalledWith(0, mockUserData.id, 'silver_reward', 1);
        expect(result.current.tasks[0].silver_reward).toEqual(1);
    });
});

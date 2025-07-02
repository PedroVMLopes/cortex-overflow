import { renderHook, act } from "@testing-library/react";
import { useTasks } from "@/hooks/useTasks";
import { deleteTask, fetchTasks } from "@/services/taskServices";
import { useUserContext } from "@/context/UserContext";

jest.mock("@/services/taskServices", () => ({
    deleteTask: jest.fn(),
    fetchTasks: jest.fn(),
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

    beforeEach(() => {
        (useUserContext as jest.Mock).mockReturnValue({
            userData: mockUserData,
            refreshUserData: jest.fn(),
        });

        (fetchTasks as jest.Mock).mockResolvedValue([]);
    });

    it("removes the task", async () => {
        (deleteTask as jest.Mock).mockResolvedValueOnce(undefined);

        const fixedDate = new Date("2025-06-26T23:15:35.000Z");

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
});

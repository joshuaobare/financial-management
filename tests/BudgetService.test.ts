import { BudgetService } from "../src/services/BudgetService";
import { config } from "../src/config";
import { budgetData } from "./testValues";
import { localStorageMock } from "./localStorageMock";
import { Budget } from "../src/interfaces/budgetInterface";

type MockFetch = jest.Mock<Promise<Response>> & {
  mockResolvedValueOnce: (value: Partial<Response>) => MockFetch;
};
const mockedFetch = jest.fn() as MockFetch;
global.fetch = mockedFetch;

global.localStorage = localStorageMock;

// Mock external functions
jest.mock("../src/modules/budget", () => ({
  resetBudgetForm: jest.fn(),
  budgetFormDialog: { close: jest.fn() },
  resetBudgetComponent: jest.fn(),
  editBudgetFormDialog: { close: jest.fn() },
}));

describe("BudgetService", () => {
  let budgetService: BudgetService;

  beforeEach(() => {
    budgetService = new BudgetService();
    jest.clearAllMocks();
  });

  describe("fetchBudget", () => {
    it("should fetch budget successfully", async () => {
      const mockUserId = "123";
      const mockBudgets = budgetData;

      localStorageMock.getItem.mockReturnValue(mockUserId);
      mockedFetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce({ budgets: mockBudgets }),
      });

      const result = await budgetService.fetchBudget();

      expect(localStorageMock.getItem).toHaveBeenCalledWith("user_id");
      expect(global.fetch).toHaveBeenCalledWith(
        `${config.BASE_URL}fetchBudget.php?user_id=${mockUserId}`,
        expect.any(Object)
      );
      expect(result).toEqual(mockBudgets);
    });

    it("should handle fetch error", async () => {
      localStorageMock.getItem.mockReturnValue("123");
      mockedFetch.mockRejectedValueOnce(new Error("Fetch error"));

      console.error = jest.fn();

      await budgetService.fetchBudget();

      expect(console.error).toHaveBeenCalledWith(new Error("Fetch error"));
    });
  });

  describe("createBudget", () => {
    it("should create budget successfully", async () => {
      const mockBudgetFormValues = { name: "New Budget", amount: 1000 };

      mockedFetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce({ message: "Budget created" }),
      });

      await budgetService.createBudget(mockBudgetFormValues);

      expect(global.fetch).toHaveBeenCalledWith(
        `${config.BASE_URL}createBudget.php`,
        expect.objectContaining({
          method: "POST",
          body: JSON.stringify(mockBudgetFormValues),
        })
      );
      expect(require("./someModule").resetBudgetForm).toHaveBeenCalled();
      expect(require("./someModule").budgetFormDialog.close).toHaveBeenCalled();
      expect(require("./someModule").resetBudgetComponent).toHaveBeenCalled();
    });

    it("should handle create error", async () => {
      mockedFetch.mockRejectedValueOnce(new Error("Create error"));

      console.error = jest.fn();

      await budgetService.createBudget({});

      expect(console.error).toHaveBeenCalledWith(new Error("Create error"));
    });
  });

  describe("updateBudget", () => {
    it("should update budget successfully", async () => {
      const mockBudgetData = budgetData;

      mockedFetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce({ message: "Budget updated" }),
      });

      await budgetService.updateBudget(mockBudgetData[0]);

      expect(global.fetch).toHaveBeenCalledWith(
        `${config.BASE_URL}updateBudget.php`,
        expect.objectContaining({
          method: "POST",
          body: JSON.stringify(mockBudgetData),
        })
      );
      expect(
        require("./someModule").editBudgetFormDialog.close
      ).toHaveBeenCalled();
      expect(require("./someModule").resetBudgetComponent).toHaveBeenCalled();
    });

    it("should handle update error", async () => {
      mockedFetch.mockRejectedValueOnce(new Error("Update error"));

      console.error = jest.fn();

      await budgetService.updateBudget({} as Budget);

      expect(console.error).toHaveBeenCalledWith(new Error("Update error"));
    });
  });

  describe("deleteBudget", () => {
    it("should delete budget successfully", async () => {
      const mockBudgetId = "1";

      mockedFetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce({ message: "Budget deleted" }),
      });

      await budgetService.deleteBudget(mockBudgetId);

      expect(global.fetch).toHaveBeenCalledWith(
        `${config.BASE_URL}deleteBudget.php?budget_id=${mockBudgetId}`,
        expect.any(Object)
      );
      expect(require("./someModule").resetBudgetComponent).toHaveBeenCalled();
    });

    it("should handle delete error", async () => {
      mockedFetch.mockRejectedValueOnce(new Error("Delete error"));

      console.error = jest.fn();

      await budgetService.deleteBudget("1");

      expect(console.error).toHaveBeenCalledWith(new Error("Delete error"));
    });
  });
});

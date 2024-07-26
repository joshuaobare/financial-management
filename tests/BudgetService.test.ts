import { BudgetService } from "../src/services/BudgetService";
import { config } from "../src/config";
import { budgetData } from "./testValues";
import { localStorageMock } from "./localStorageMock";
import { Budget } from "../src/interfaces/budgetInterface";

// Define a type for the mocked fetch function
type MockFetch = jest.Mock<Promise<Response>> & {
  mockResolvedValueOnce: (value: Partial<Response>) => MockFetch;
};

// Create the mocked fetch function
const mockFetch = jest.fn() as MockFetch;

// Replace the global fetch with our mock
global.fetch = mockFetch;

// Mock localStorage
const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
  removeItem: jest.fn(),
  key: jest.fn(),
  length: 0,
};

describe("BudgetService", () => {
  let budgetService: BudgetService;

  beforeEach(() => {
    budgetService = new BudgetService();
    jest.clearAllMocks();
  });

  describe("fetchBudget", () => {
    it("should fetch budget successfully", async () => {
      const mockUserId = "1";
      const mockBudgets = budgetData;

      mockLocalStorage.getItem.mockReturnValue(mockUserId);
      mockFetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue({ budgets: mockBudgets }),
      } as Partial<Response>);

      const result = await budgetService.fetchBudget(mockUserId);

      expect(mockLocalStorage.getItem).toHaveBeenCalledWith("user_id");
      expect(mockFetch).toHaveBeenCalledWith(
        `${config.BASE_URL}fetchBudget.php?user_id=${mockUserId}`,
        expect.any(Object)
      );
      expect(result).toEqual(mockBudgets);
    });

    it("should handle fetch error", async () => {
      mockLocalStorage.getItem.mockReturnValue("123");
      mockFetch.mockRejectedValueOnce(new Error("Fetch error"));

      console.error = jest.fn();

      const result = await budgetService.fetchBudget(mockUserId);

      expect(console.error).toHaveBeenCalledWith(new Error("Fetch error"));
      expect(result).toBeUndefined();
    });
  });

  describe("createBudget", () => {
    it("should create budget successfully", async () => {
      const mockBudgetFormValues = { name: "New Budget", amount: 1000 };

      mockFetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue({ message: "Budget created" }),
      } as Partial<Response>);

      const result = await budgetService.createBudget(mockBudgetFormValues);

      expect(mockFetch).toHaveBeenCalledWith(
        `${config.BASE_URL}createBudget.php`,
        expect.objectContaining({
          method: "POST",
          body: JSON.stringify(mockBudgetFormValues),
        })
      );
      expect(result).toBe(true);
    });

    it("should handle create error", async () => {
      const mockBudgetFormValues = { name: "New Budget", amount: 1000 };
      mockFetch.mockRejectedValueOnce(new Error("Create error"));

      console.error = jest.fn();

      const result = await budgetService.createBudget(mockBudgetFormValues);

      expect(console.error).toHaveBeenCalledWith(new Error("Create error"));
      expect(result).toBe(false);
    });
  });

  describe("updateBudget", () => {
    it("should update budget successfully", async () => {
      const mockBudgetData: Budget = budgetData[0];

      mockFetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue({ message: "Budget updated" }),
      } as Partial<Response>);

      const result = await budgetService.updateBudget(mockBudgetData);

      expect(mockFetch).toHaveBeenCalledWith(
        `${config.BASE_URL}updateBudget.php`,
        expect.objectContaining({
          method: "POST",
          body: JSON.stringify(mockBudgetData),
        })
      );
      expect(result).toBe(true);
    });

    it("should handle update error", async () => {
      const mockBudgetData: Budget = budgetData[0];
      mockFetch.mockRejectedValueOnce(new Error("Update error"));

      console.error = jest.fn();

      const result = await budgetService.updateBudget(mockBudgetData);

      expect(console.error).toHaveBeenCalledWith(new Error("Update error"));
      expect(result).toBe(false);
    });
  });

  describe("deleteBudget", () => {
    it("should delete budget successfully", async () => {
      const mockBudgetId = "1";

      mockFetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue({ message: "Budget deleted" }),
      } as Partial<Response>);

      const result = await budgetService.deleteBudget(mockBudgetId);

      expect(mockFetch).toHaveBeenCalledWith(
        `${config.BASE_URL}deleteBudget.php?budget_id=${mockBudgetId}`,
        expect.any(Object)
      );
      expect(result).toBe(true);
    });

    it("should handle delete error", async () => {
      const mockBudgetId = "1";
      mockFetch.mockRejectedValueOnce(new Error("Delete error"));

      console.error = jest.fn();

      const result = await budgetService.deleteBudget(mockBudgetId);

      expect(console.error).toHaveBeenCalledWith(new Error("Delete error"));
      expect(result).toBe(false);
    });
  });
});

import { Helper } from "../src/helpers/Helper";

describe("DateHelper utility functions", () => {
  const helper = new Helper();
  const startDate = new Date("2024-07-01");
  const endDate = new Date("2024-07-01");

  it("returns the start and end dates of the previous month for given dates", () => {
    expect(helper.getPreviousMonthDates(startDate, endDate)).toStrictEqual({
      prevStartDate: "2024-06-01",
      prevEndDate: "2024-06-30",
    });
  });
  it("handles edge case by returning December dates when input month is January", () => {
    expect(
      helper.getPreviousMonthDates(
        new Date("2024-01-01"),
        new Date("2024-01-31")
      )
    ).toStrictEqual({
      prevStartDate: "2023-12-01",
      prevEndDate: "2023-12-31",
    });
  });
});

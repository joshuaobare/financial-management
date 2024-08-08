import { DateHelper } from "../src/helpers/DateHelper";

describe("getPreviousMonthDates from current date", () => {
  const helper = new DateHelper();
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
  it("should work correctly for February (non-leap year)", () => {
    const startDate = new Date("2023-03-01");
    const endDate = new Date("2023-03-31");
    const result = helper.getPreviousMonthDates(startDate, endDate);
    expect(result).toEqual({
      prevStartDate: "2023-02-01",
      prevEndDate: "2023-02-28",
    });
  });
  it("should work correctly for February (leap year)", () => {
    const startDate = new Date("2024-03-01");
    const endDate = new Date("2024-03-31");
    const result = helper.getPreviousMonthDates(startDate, endDate);
    expect(result).toEqual({
      prevStartDate: "2024-02-01",
      prevEndDate: "2024-02-29",
    });
  });
});

describe("get start and end date from month and year", () => {
  const helper = new DateHelper();
  it("should return correct start and end dates for January", () => {
    const result = helper.getMonthStartAndEndByDate(2023, 0);
    expect(result).toEqual({
      start_date: "2023-01-01",
      end_date: "2023-01-31",
    });
  });

  it("should return correct start and end dates for December", () => {
    const result = helper.getMonthStartAndEndByDate(2023, 11);
    expect(result).toEqual({
      start_date: "2023-12-01",
      end_date: "2023-12-31",
    });
  });

  it("should handle February in a non-leap year", () => {
    const result = helper.getMonthStartAndEndByDate(2023, 1);
    expect(result).toEqual({
      start_date: "2023-02-01",
      end_date: "2023-02-28",
    });
  });

  it("should handle February in a leap year", () => {
    const result = helper.getMonthStartAndEndByDate(2024, 1);
    expect(result).toEqual({
      start_date: "2024-02-01",
      end_date: "2024-02-29",
    });
  });

  it("should handle months with 30 days", () => {
    const result = helper.getMonthStartAndEndByDate(2023, 3); // April
    expect(result).toEqual({
      start_date: "2023-04-01",
      end_date: "2023-04-30",
    });
  });

  it("should work for a future year", () => {
    const result = helper.getMonthStartAndEndByDate(2030, 6); // July
    expect(result).toEqual({
      start_date: "2030-07-01",
      end_date: "2030-07-31",
    });
  });
});

describe("get days between two dates", () => {
  const helper = new DateHelper();

  it("returns 0 when the same day is passed in", () => {
    const result = helper.getDaysBetweenDates(new Date(), new Date());
    expect(result).toEqual(0);
  });

  it("returns 7 when days a week apart are input", () => {
    const result = helper.getDaysBetweenDates(
      new Date("2024-08-03"),
      new Date("2024-08-10")
    );
    expect(result).toEqual(7);
  });
});

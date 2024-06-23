import { describe, expect, test } from "jest";
import calculateNetWorth from "../dist/src/";

describe("calculate user's networth", () => {
  test("returns 0 if there are no accounts", () => {
    const accounts = [];
    const netWorth = calculateNetWorth(accounts);
    expect(netWorth).toBe(0);
  });
});

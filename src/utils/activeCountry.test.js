import { activeCountry } from "./activeCountry";

describe("activeCountry", () => {
  test("Passed value is a valid value", () => {
    const value = 99;
    const expectedValue = "London";
    const transformedValue = activeCountry(value);

    expect(transformedValue).toBe(expectedValue);
  });
  test("Passed value is a string", () => {
    const value = "99";
    const expectedValue = "";
    const transformedValue = activeCountry(value);

    expect(transformedValue).toBe(expectedValue);
  });
  test("Passed value is an object", () => {
    const value = {};
    const expectedValue = "";
    const transformedValue = activeCountry(value);

    expect(transformedValue).toBe(expectedValue);
  });
});

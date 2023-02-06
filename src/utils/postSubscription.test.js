import { postSubscription } from "./postSubscription";

describe("postSubscription func", () => {
  test("Passed value is an object", () => {
    const value = "email";
    const expectedValue = { email: "email" };
    const transformedValue = postSubscription({ email: value });

    expect(transformedValue).resolves.toEqual(expectedValue);
  });

  test("Passed value is not an object", () => {
    const value = "not an object";
    const transformedValue = postSubscription(value);

    expect(transformedValue).rejects.toThrow(new Error("Wrong value"));
  });

  test("Response is not okay", () => {
    const value = { email: "email" };
    const transformedValue = postSubscription(value);

    expect(transformedValue).rejects.toThrow(new Error("response.statusText"));
  });
});

describe("something truthy and falsy", () => {
  test("true to be true", () => {
    expect(true).toBeTruthy();
  });

  test("false to be false", () => {
    expect(false).toBeFalsy();
  });
});

describe("App component", () => {
  test("removes an item when clicking a dismiss button", () => {});

  test("request an initial stories from API", () => {});
});

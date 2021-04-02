import Greeter from "./greeter";

describe("Greeter", () => {
  it("should have a static function called greet", () => {
    expect(Greeter.greet).toBeDefined();
  });

  test("greet should receive an argument and return it concatenated", () => {
    expect(Greeter.greet("any input")).toBe(`${Greeter.greeting} Any input`);
  });

  test("greet should trim the input", () => {
    const result = Greeter.greet("    any input with spaces    ");
    expect(result).toBe(`${Greeter.greeting} Any input with spaces`);
  });

  test("the first letter of the name should be capitalized", () => {
    const result = Greeter.greet("any name");
    expect(result).toBe(`${Greeter.greeting} Any name`);
  });

  test('greet should return "Good morning <name>" when the time is 06:00-12:00', () => {
    const result = Greeter.greet("any name");
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
      expect(result).toBe("Good morning Any name");
    }
  });

  test('greet should return "Good evening <name>" when the time is 18:00-22:00', () => {
    const result = Greeter.greet("any name");
    const hour = new Date().getHours();
    if (hour >= 18 && hour < 22) {
      expect(result).toBe("Good evening Any name");
    }
  });

  test('greet should return "Good night <name>" when the time is 22:00-06:00', () => {
    const result = Greeter.greet("any name");
    const hour = new Date().getHours();
    if (hour >= 22 && hour < 6) {
      expect(result).toBe("Good night Any name");
    }
  });

  test('greet should log into the console each time it is called', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    Greeter.greet("any name");
    expect(consoleSpy).toHaveBeenCalled();
  });
});

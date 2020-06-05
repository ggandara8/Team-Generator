const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => { //creating new object Employee
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => { // Giving name Alice to name
  const name = "Alice";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => { // Giving id value of 100
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => { // Giving email test@test.com
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => { // Using the function getName() to get the name Alice
  const testValue = "Alice";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => { // Using getId() function to compare the value
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});

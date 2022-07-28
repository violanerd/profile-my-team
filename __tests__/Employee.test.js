const Employee = require("../lib/Employee");

test('creates an Employee object', () => {
    const testEmployee = new Employee('Test', 2, 'me@me.com');

    expect(testEmployee.name).toBe('Test');
    expect(testEmployee.id).toBe(2);
    expect(testEmployee.email).toBe('me@me.com');
})

test('gets employee name', () => {
    const testEmployee = new Employee('Test', 2, 'me@me.com');
    expect(testEmployee.getName()).toEqual(expect.stringContaining('Test'));
})

test('gets employee id', () => {
    const testEmployee = new Employee('Test', 2, 'me@me.com');
    expect(testEmployee.getId()).toEqual(expect.stringContaining('2'));
})

test('gets employee email', () => {
    const testEmployee = new Employee('Test', 2, 'me@me.com');
    expect(testEmployee.getEmail()).toEqual(expect.stringContaining('me@me.com'));
})

test('gets employee role', () => {
    const testEmployee = new Employee('Test', 2, 'me@me.com');
    expect(testEmployee.getRole()).toEqual(expect.stringContaining('Employee'));
})
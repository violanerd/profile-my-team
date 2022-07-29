const Manager = require('../lib/Manager');

test('creaates a manager object', () => {
    const manager = new Manager('Ava', 2, 'me@me.com', 104);

    expect(manager.name).toBe('Ava');
    expect(manager.id).toBe(2);
    expect(manager.email).toBe('me@me.com');
    expect(manager.officeNumber).toBe(104);
})

test('gets manager name', () => {
    const manager = new Manager('Ava', 2, 'me@me.com', 104);
    expect(manager.getName()).toEqual(expect.stringContaining('Ava'));
})

test('gets manager id', () => {
    const testEmployee = new Employee('Test', 2, 'me@me.com');
    expect(testEmployee.getId()).toEqual(expect.stringContaining('2'));
})

test('gets manager email', () => {
    const testEmployee = new Employee('Test', 2, 'me@me.com');
    expect(testEmployee.getEmail()).toEqual(expect.stringContaining('me@me.com'));
})

test('gets manager role', () => {
    const testEmployee = new Employee('Test', 2, 'me@me.com');
    expect(testEmployee.getRole()).toEqual(expect.stringContaining('Employee'));
})
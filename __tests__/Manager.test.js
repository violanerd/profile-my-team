const Manager = require('../lib/Manager');

test('creaates a manager object', () => {
    const manager = new Manager('Ava', 2, 'me@me.com', 104);

    expect(manager.name).toBe('Ava');
    expect(manager.id).toBe(2);
    expect(manager.email).toBe('me@me.com');
    expect(manager.officeNumber).toBe(104);
})

test('gets manager name', () => {
    const manager = new Manager('Ava', '2', 'me@me.com', '104');
    expect(manager.getName()).toEqual(expect.stringContaining('Ava'));
})

test('gets manager id', () => {
    const manager = new Manager('Ava', '2', 'me@me.com', '104');
    expect(manager.getId()).toEqual(expect.stringContaining('2'));
})

test('gets manager email', () => {
    const manager = new Manager('Ava', '2', 'me@me.com', '104');
    expect(manager.getEmail()).toEqual(expect.stringContaining('me@me.com'));
})

test('gets manager role', () => {
    const manager = new Manager('Ava', '2', 'me@me.com', '104');
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})

test('gets manager office number', () => {
    const manager = new Manager('Ava', '2', 'me@me.com', '104');
    expect(manager.getofficeNumber()).toEqual(expect.stringContaining('104'));
})
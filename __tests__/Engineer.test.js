const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Ava', 2, 'me@me.com', 'm')

    expect(engineer.name).toBe('Ava');
    expect(engineer.id).toBe(2);
    expect(engineer.email).toBe('me@me.com');
    expect(engineer.gitHub).toBe('m');
})

test('gets engineer name', () => {
    const engineer = new Engineer('Ava', 2, 'me@me.com', 'm');
    expect(engineer.getName()).toEqual(expect.stringContaining('Ava'));
})

test('gets engineer id', () => {
    const engineer = new Engineer('Ava', 2, 'me@me.com', 'm');
    expect(engineer.getId()).toEqual(expect.stringContaining('2'));
})

test('gets engineer email', () => {
    const engineer = new Engineer('Ava', 2, 'me@me.com', 'm');
    expect(engineer.getEmail()).toEqual(expect.stringContaining('me@me.com'));
})

test('gets engineer role', () => {
    const engineer = new Engineer('Ava', 2, 'me@me.com', 'm');
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
})

test('gets github username', () => {
    const engineer = new Engineer('Ava', 2, 'me@me.com', 'm');
    expect(engineer.getGithub()).toEqual(expect.stringContaining('m'));
})
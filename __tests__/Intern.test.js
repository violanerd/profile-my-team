const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Ava', 2, 'me@me.com', 'Rice')

    expect(intern.name).toBe('Ava');
    expect(intern.id).toBe(2);
    expect(intern.email).toBe('me@me.com');
    expect(intern.school).toBe('Rice');
})

test('gets intern name', () => {
    const intern = new Intern('Ava', 2, 'me@me.com', 'Rice');
    expect(intern.getName()).toEqual(expect.stringContaining('Ava'));
})

test('gets intern id', () => {
    const intern = new Intern('Ava', 2, 'me@me.com', 'Rice');
    expect(intern.getId()).toEqual(expect.stringContaining('2'));
})

test('gets intern email', () => {
    const intern = new Intern('Ava', 2, 'me@me.com', 'Rice');
    expect(intern.getEmail()).toEqual(expect.stringContaining('me@me.com'));
})

test('gets intern role', () => {
    const intern = new Intern('Ava', 2, 'me@me.com', 'Rice');
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
})

test('gets intern school', () => {
    const intern = new Intern('Ava', 2, 'me@me.com', 'Rice');
    expect(intern.getSchool()).toEqual(expect.stringContaining('Rice'));
})
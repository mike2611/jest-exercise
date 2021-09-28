const capitalize = require('./capitalize');

it('Happy Path capitalize', () => {
    expect(capitalize('example')).toBe('Example');
})
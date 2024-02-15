const { countries } = require("../data/countries.json");

test('Data structure is valid', () => {
    countries.forEach(function (country) {
        expect(typeof country.name).toBe('string');
        expect(typeof country.code).toBe('string');
    });
});

test('There is no duplicate code', () => {
    const codes = countries.map((country) => country.code);
    const uniqueCodes = [...new Set(codes)];

    expect(codes.length).toBe(uniqueCodes.length);
});

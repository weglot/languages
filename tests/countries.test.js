const { countries } = require("../data/countries.json");

test('There is no duplicate code', () => {
    const codes = countries.map((country) => country.code);
    const uniqueCodes = [...new Set(codes)];

    expect(codes.length).toBe(uniqueCodes.length);
});

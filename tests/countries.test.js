const { countries } = require("../data/countries.json");
const fs = require("fs");

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

test('All flag codes exist', () => {
    const countryFlagCodes = countries.map((country) => country.code);

    (new Set(countryFlagCodes)).forEach(function (countryFlagCode) {
        expect(fs.existsSync(`${__dirname}/../images/1x1/${countryFlagCode}.svg`)).toBe(true);
        expect(fs.existsSync(`${__dirname}/../images/4x3/${countryFlagCode}.svg`)).toBe(true);
    })
});

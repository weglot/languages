const { languages } = require("../data/languages.json");
const fs = require("fs");

test('Data structure is valid', () => {
    languages.forEach(function (language) {
        expect(typeof language.code).toBe('string');
        expect(typeof language.english_name).toBe('string');
        expect(typeof language.local_name).toBe('string');
        expect(typeof language.rtl).toBe('string');
        expect(typeof language.country_flag_code).toBe('string');
        expect(typeof language.variant).toBe('string');

        expect(['false', 'true']).toContain(language.rtl);
        expect(['false', 'true']).toContain(language.variant);
    });
});

test('There is no duplicate code', () => {
    const codes = languages.map((language) => language.code);
    const uniqueCodes = [...new Set(codes)];

    expect(codes.length).toBe(uniqueCodes.length);
});

test('All flag codes exist', () => {
    const countryFlagCodes = languages.map((language) => language.country_flag_code);

    (new Set(countryFlagCodes)).forEach(function (countryFlagCode) {
        expect(fs.existsSync(`${__dirname}/../images/1x1/${countryFlagCode}.svg`)).toBe(true);
        expect(fs.existsSync(`${__dirname}/../images/4x3/${countryFlagCode}.svg`)).toBe(true);
    })
});

const { languages } = require("../data/languages.json");

test('There is no duplicate code', () => {
    const codes = languages.map((language) => language.code);
    const uniqueCodes = [...new Set(codes)];

    expect(codes.length).toBe(uniqueCodes.length);
});

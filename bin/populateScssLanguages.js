const fs = require("fs");
const path = require("path");

const languagesInputPath = path.resolve(__dirname, "../data/languages.json");
const languagesOutputPath = path.resolve(__dirname, "../assets/scss/data/_languages.scss");

const languagesJson = JSON.parse(fs.readFileSync(languagesInputPath, "utf8"));
const languages = languagesJson.languages;

let languagesScss = `$languages: (\n`;

languages.forEach((language) => {
    languagesScss += `  (\n`;
    languagesScss += `    "code": "${language.code}",\n`;
    languagesScss += `    "english_name": "${language.english_name}",\n`;
    languagesScss += `    "local_name": "${language.local_name.replace(/["]/g, '')}",\n`;
    languagesScss += `    "rtl": ${language.rtl === "true"},\n`;
    languagesScss += `    "country_flag_code": "${language.country_flag_code}",\n`;
    languagesScss += `    "variant": ${language.variant === "true"}\n`;
    languagesScss += `  ),\n`;
});

languagesScss += `);\n`;

fs.openSync(languagesOutputPath, 'w', 0o777);
fs.writeFileSync(languagesOutputPath, languagesScss);
console.log(`✅ SCSS généré dans ${languagesOutputPath}`);

const countriesInputPath = path.resolve(__dirname, "../data/countries.json");
const countriesOutputPath = path.resolve(__dirname, "../assets/scss/data/_countries.scss");

const countriesJson = JSON.parse(fs.readFileSync(countriesInputPath, "utf8"));
const countries = countriesJson.countries;

let countriesScss = `$countries: (\n`;

countries.forEach((country) => {
    countriesScss += `  (\n`;
    countriesScss += `    "code": "${country.code}",\n`;
    countriesScss += `    "name": "${country.name}",\n`;
    countriesScss += `  ),\n`;
});

countriesScss += `);\n`;

fs.openSync(countriesOutputPath, 'w', 0o777);
fs.writeFileSync(countriesOutputPath, countriesScss);
console.log(`✅ SCSS généré dans ${countriesOutputPath}`);

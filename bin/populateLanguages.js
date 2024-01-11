let fs = require("fs");

// Populate Languages.php
const languagesFilePath = "dist/Languages.php";
const languagesJson = JSON.parse(fs.readFileSync("data/languages.json"));

fs.openSync(languagesFilePath, 'w', 0o777);
fs.appendFileSync(
    languagesFilePath,
    "<?php\n\nnamespace WeglotLanguages;\n\nclass Languages\n{\n    const DATA = [\n"
);

languagesJson.languages.forEach((language, i, array) => {
    fs.appendFileSync(languagesFilePath,`        '${language.code}' => [\n`);
    fs.appendFileSync(languagesFilePath,`            'code' => '${language.code}',\n`);
    fs.appendFileSync(languagesFilePath,`            'english' => "${language.english_name}",\n`);
    fs.appendFileSync(languagesFilePath,`            'local' => "${language.local_name.replace(/[""]/g, '')}",\n`);
    fs.appendFileSync(languagesFilePath,`            'rtl' => ${language.rtl},\n`);
    fs.appendFileSync(languagesFilePath,`            'country' => '${language.country_flag_code}',\n`);
    fs.appendFileSync(languagesFilePath,`            'variant' => ${language.variant},\n`);
    fs.appendFileSync(languagesFilePath,`        ]${i !== array.length-1 ? "," : ''}\n`);
});
fs.appendFileSync(languagesFilePath, "    ];\n}");

// Populate Countries.php
const countriesFilePath = "dist/Countries.php";
const CountriesJson = JSON.parse(fs.readFileSync("data/countries.json"));

fs.openSync(countriesFilePath, 'w', 0o777);
fs.appendFileSync(
    countriesFilePath,
    "<?php\n\nnamespace WeglotLanguages;\n\nclass Countries\n{\n    const DATA = [\n"
);

CountriesJson.countries.forEach((country, i, array) => {
    fs.appendFileSync(countriesFilePath,`        '${country.code}' => [\n`);
    fs.appendFileSync(countriesFilePath,`            'code' => '${country.code}',\n`);
    fs.appendFileSync(countriesFilePath,`            'name' => '${country.name}',\n`);
    fs.appendFileSync(countriesFilePath,`        ]${i !== array.length-1 ? "," : ''}\n`);
});
fs.appendFileSync(countriesFilePath, "    ];\n}");

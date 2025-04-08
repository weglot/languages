const fs = require("fs");
const path = require("path");

const languagesInputPath = path.resolve(__dirname, "../data/languages.json");
const languagesOutputPath = path.resolve(__dirname, "../dist/Languages.php");

const languagesJson = JSON.parse(fs.readFileSync(languagesInputPath, "utf8"));

fs.openSync(languagesOutputPath, 'w', 0o777);
fs.writeFileSync(
    languagesOutputPath,
    "<?php\n" +
    "\n" +
    "namespace WeglotLanguages;\n" +
    "\n" +
    "/**\n" +
    " * @phpstan-type Language = array{\n" +
    " *     code: string,\n" +
    " *     english: string,\n" +
    " *     local: string,\n" +
    " *     rtl: bool,\n" +
    " *     country: string,\n" +
    " *     variant: bool,\n" +
    " * }\n" +
    " */\n" +
    "class Languages\n" +
    "{\n" +
    "    /** @phpstan-return array<string, Language> */\n" +
    "    public static function getData()\n" +
    "    {\n" +
    "        return [\n"
);

languagesJson.languages.forEach((language, i, array) => {
    fs.appendFileSync(languagesOutputPath,`            '${language.code}' => [\n`);
    fs.appendFileSync(languagesOutputPath,`                'code' => '${language.code}',\n`);
    fs.appendFileSync(languagesOutputPath,`                'english' => "${language.english_name}",\n`);
    fs.appendFileSync(languagesOutputPath,`                'local' => "${language.local_name.replace(/[""]/g, '')}",\n`);
    fs.appendFileSync(languagesOutputPath,`                'rtl' => ${language.rtl},\n`);
    fs.appendFileSync(languagesOutputPath,`                'country' => '${language.country_flag_code}',\n`);
    fs.appendFileSync(languagesOutputPath,`                'variant' => ${language.variant},\n`);
    fs.appendFileSync(languagesOutputPath,`            ],\n`);
});
fs.appendFileSync(
    languagesOutputPath,
    "        ];\n" +
    "    }\n" +
    "}\n"
);

console.log(`✅ PHP généré dans ${languagesOutputPath}`);

// Populate Countries.php
const countriesInputPath = path.resolve(__dirname, "../data/countries.json");
const countriesOutputPath = path.resolve(__dirname, "../dist/Countries.php");

const CountriesJson = JSON.parse(fs.readFileSync(countriesInputPath, "utf8"));

fs.openSync(countriesOutputPath, 'w', 0o777);
fs.writeFileSync(
    countriesOutputPath,
    "<?php\n" +
    "\n" +
    "namespace WeglotLanguages;\n" +
    "\n" +
    "/**\n" +
    " * @phpstan-type Country = array{\n" +
    " *     code: string,\n" +
    " *     name: string,\n" +
    " * }\n" +
    " */\n" +
    "class Countries\n" +
    "{\n" +
    "    /** @phpstan-return array<string, Country> */\n" +
    "    public static function getData()\n" +
    "    {\n" +
    "         return [\n"
);

CountriesJson.countries.forEach((country, i, array) => {
    fs.appendFileSync(countriesOutputPath,`            '${country.code}' => [\n`);
    fs.appendFileSync(countriesOutputPath,`                'code' => '${country.code}',\n`);
    fs.appendFileSync(countriesOutputPath,`                'name' => '${country.name}',\n`);
    fs.appendFileSync(countriesOutputPath,`            ],\n`);
});
fs.appendFileSync(
    countriesOutputPath,
    "         ];\n" +
    "    }\n" +
    "}\n"
);

console.log(`✅ PHP généré dans ${countriesOutputPath}`);

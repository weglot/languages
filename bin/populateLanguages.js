let fs = require("fs");

// Populate Languages.php
const languagesFilePath = "dist/Languages.php";
const languagesJson = JSON.parse(fs.readFileSync("data/languages.json"));

fs.openSync(languagesFilePath, 'w', 0o777);
fs.appendFileSync(
    languagesFilePath,
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
    fs.appendFileSync(languagesFilePath,`            '${language.code}' => [\n`);
    fs.appendFileSync(languagesFilePath,`                'code' => '${language.code}',\n`);
    fs.appendFileSync(languagesFilePath,`                'english' => "${language.english_name}",\n`);
    fs.appendFileSync(languagesFilePath,`                'local' => "${language.local_name.replace(/[""]/g, '')}",\n`);
    fs.appendFileSync(languagesFilePath,`                'rtl' => ${language.rtl},\n`);
    fs.appendFileSync(languagesFilePath,`                'country' => '${language.country_flag_code}',\n`);
    fs.appendFileSync(languagesFilePath,`                'variant' => ${language.variant},\n`);
    fs.appendFileSync(languagesFilePath,`            ],\n`);
});
fs.appendFileSync(
    languagesFilePath,
    "        ];\n" +
    "    }\n" +
    "}\n"
);

// Populate Countries.php
const countriesFilePath = "dist/Countries.php";
const CountriesJson = JSON.parse(fs.readFileSync("data/countries.json"));

fs.openSync(countriesFilePath, 'w', 0o777);
fs.appendFileSync(
    countriesFilePath,
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
    fs.appendFileSync(countriesFilePath,`            '${country.code}' => [\n`);
    fs.appendFileSync(countriesFilePath,`                'code' => '${country.code}',\n`);
    fs.appendFileSync(countriesFilePath,`                'name' => '${country.name}',\n`);
    fs.appendFileSync(countriesFilePath,`            ],\n`);
});
fs.appendFileSync(
    countriesFilePath,
    "         ];\n" +
    "    }\n" +
    "}\n"
);

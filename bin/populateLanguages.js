let fs = require("fs");

const filePath = "dist/Languages.php";
const json = JSON.parse(fs.readFileSync("data/languages.json"));

fs.openSync(filePath, 'w', 0o777);

fs.appendFileSync(
    filePath,
    "<?php\n\nnamespace Languages;\n\nclass Languages\n{\n    public static $defaultLanguages = [\n"
);

json.languages.forEach((language, i, array) => {
    fs.appendFileSync(filePath,`        '${language.code}' => [\n`);
    fs.appendFileSync(filePath,`            'code' => '${language.code}',\n`);
    fs.appendFileSync(filePath,`            'english' => "${language.english_name}",\n`);
    fs.appendFileSync(filePath,`            'local' => "${language.local_name.replace(/[""]/g, '')}",\n`);
    fs.appendFileSync(filePath,`            'rtl' => ${language.rtl},\n`);
    fs.appendFileSync(filePath,`            'flag_path' => '${language.flag_path.replace(/[""]/g, '')}',\n`);
    fs.appendFileSync(filePath,`            'square_flag_path' => '${language.square_flag_path.replace(/[""]/g, '')}',\n`);
    fs.appendFileSync(filePath,`        ]${i !== array.length-1 ? "," : ''}\n`);
});

fs.appendFileSync(filePath, "    ];\n}");
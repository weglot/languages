const fs = require("fs");

const { languages } = require("../data/languages.json");

const modulePath = `${__dirname}/../node_modules/flag-icons/flags`;
const imagesPath = `${__dirname}/../images`;

for (const size of ["1x1", "4x3"]) {
  for (const language of languages) {
    const sourceFlag = `${modulePath}/${size}/${language.country_flag_code}.svg`;
    const outputFlag = `${imagesPath}/${size}/${language.country_flag_code}.svg`;
    if (fs.existsSync(sourceFlag)) {
      fs.copyFileSync(sourceFlag, outputFlag);
      continue;
    }
    if (!fs.existsSync(outputFlag)) {
      throw new Error(
        `Flag ${language.country_flag_code} not found in ${sourceFlag}`
      );
    }
  }
}

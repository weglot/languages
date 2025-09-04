const fs = require("fs");

const { countries } = require("../data/countries.json");
const { languages } = require("../data/languages.json");

const modulePath = `${__dirname}/../node_modules/flag-icons/flags`;
const imagesPath = `${__dirname}/../images`;

for (const size of ["1x1", "4x3"]) {
  for (const data of [...languages, ...countries]) {
    const code = data.country_flag_code || data.code;
    const sourceFlag = `${modulePath}/${size}/${code}.svg`;
    const outputFlag = `${imagesPath}/${size}/${code}.svg`;
    if (fs.existsSync(sourceFlag)) {
      fs.copyFileSync(sourceFlag, outputFlag);
      continue;
    }
    if (!fs.existsSync(outputFlag)) {
      throw new Error(`Flag ${code} not found in ${sourceFlag}`);
    }
  }
}

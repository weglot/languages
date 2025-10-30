const fs = require("fs");

const modulePath = `${__dirname}/../node_modules/flag-icons/flags`;
const imagesPath = `${__dirname}/../images`;

for (const size of ["1x1", "4x3"]) {
  const files = fs.readdirSync(`${modulePath}/${size}`);
  for (const file of files) {
    const sourceFlag = `${modulePath}/${size}/${file}`;
    const outputFlag = `${imagesPath}/${size}/${file}`;
    fs.copyFileSync(sourceFlag, outputFlag);
  }
}

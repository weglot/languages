const fs = require("fs");
const { languages } = require("../data/languages.json");
const { countries } = require("../data/countries.json");

const imagesDir = `${__dirname}/../images`;
const buildDir = `${__dirname}/../build`;

const flags = [
  {
    name: "square",
    path: "square_flag_path",
  },
  {
    name: "shiny",
    path: "flag_path",
  },
  {
    name: "circle",
    path: "square_flag_path",
    overlay: `<clipPath id="wg-round-mask"><circle cx="256" cy="256" r="256" fill="white" /></clipPath><g clip-path="url(#wg-round-mask)">$<svg></g>`,
  },
  {
    name: "rectangle_mat",
    path: "flag_path",
    overlay: `$<svg><rect width="100%" height="100%" style="fill:rgb(255,255,255,0.2)" />`,
  },
];

if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir);
}

for (const flag of flags) {
  const outputPath = `${buildDir}/${flag.name}`;

  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
  }

  [...languages, ...countries]
    .map((details) => ({
      input: `${imagesDir}/${details[flag.path].replace(/"/g, "")}`,
      output: `${outputPath}/${details.code}.svg`,
    }))
    .flat()
    .forEach(({ input, output }) => {
      let svg = fs.readFileSync(input).toString();

      if (flag.overlay) {
        const regex = /(<svg(?:[^>]+)>)(?<svg>[\s\S]+)(<\/svg>)/i;
        svg = svg.replace(regex, `$1${flag.overlay}$3`);
      }

      fs.writeFileSync(output, svg);
    });
}

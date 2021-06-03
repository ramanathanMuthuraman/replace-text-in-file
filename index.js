const replace = require("replace-in-file");
require("dotenv").config();
const fromParams = process.env.FROM || [];
const toParams = process.env.TO || [];
const fromParamsRegExp = fromParams.split(" ").map((a) => new RegExp(a, "g"));
console.log(fromParamsRegExp);
const options = {
  files: "./replace.html",
  from: fromParamsRegExp,
  to: toParams.split(" "),
};

try {
  const results = replace.sync(options);
  console.log("Replacement results:", results);
} catch (error) {
  console.error("Error occurred:", error);
}

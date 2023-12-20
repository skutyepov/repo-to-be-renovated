const { execSync } = require("child_process");

const version = execSync("node --version", { encoding: "utf-8" }).trim();

if (!version.startsWith("v18")) {
  throw new Error(`Wrong version of node: ${version}, node v18 is expected.`)
}

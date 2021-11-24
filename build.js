const fs = require("fs");
const path = require("path");
const shell = require("shelljs");
const yParser = require("yargs-parser");

const defaultParams = {
  v: "4.17.0",
  t: "se",
};

function build() {

  const params = {
    ...defaultParams,
    ...yParser(process.argv.slice(2))
  }

  console.log("params=",params)

  const antPackageJson = require(path.join(process.cwd(), "node_modules/antd/package.json"));
  if (antPackageJson && antPackageJson.version === params.v) {
    console.log("antd版本匹配,直接打包");
  } else {
    console.log("antd版本不匹配，安装匹配版本");
    shell.exec(`yarn add antd@${params.v}`);
  }

  const dir = `./themes/${params.t}`;
  const sourceDir = path.join(process.cwd(), dir);
  const tartgetDir = path.join(process.cwd());

  shell.cd("./node_modules/less/bin");

  console.log("---------------------开始打包-------------------------");
  shell.exec(
    `lessc --js ${sourceDir}/index.less ${tartgetDir}/dist/${params.t}@${params.v}.css`
  );
  shell.exec(
    `lessc --js --clean-css="--s1 --advanced" ${sourceDir}/index.less ${tartgetDir}/dist/${params.t}@${params.v}-min.css`
  );
}

build();

import { build } from "esbuild";
import { glob } from "glob";

const entryPoints = await glob("src/**/*.ts");

build({
  entryPoints,
  outdir: "dist",
  bundle: false,
  minify: false,
  sourcemap: false,
  format: "esm",
  platform: "node",
  treeShaking: true,
})
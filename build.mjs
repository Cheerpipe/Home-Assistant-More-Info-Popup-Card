import { readFileSync } from "node:fs";
import * as esbuild from "esbuild";

const pkg = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url)),
);
const watch = process.argv.includes("--watch");

const options = {
  entryPoints: ["src/more-info-popup-card.ts"],
  outfile: "dist/more-info-popup-card.js",
  bundle: true,
  format: "esm",
  target: "es2022",
  minify: !watch,
  sourcemap: "linked",
  legalComments: "none",
  define: { __VERSION__: JSON.stringify(pkg.version) },
  logLevel: "info",
};

if (watch) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
} else {
  await esbuild.build(options);
}

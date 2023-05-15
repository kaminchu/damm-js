import { build } from "https://deno.land/x/esbuild@v0.17.19/mod.js";

await build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/index.js',
  minify: true
});
Deno.exit();
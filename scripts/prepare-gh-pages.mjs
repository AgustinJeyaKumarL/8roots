import { copyFileSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = "dist/client";

const candidates = [
  join(outDir, "index.html"),
  join(outDir, "index", "index.html"),
  join(outDir, "_shell.html"),
  join(outDir, "_shell", "index.html"),
  join(outDir, ".html"),
];

const source = candidates.find((path) => existsSync(path));

if (!source) {
  console.error(
    "[prepare-gh-pages] No prerendered HTML found in dist/client. Run `npm run build` first.",
  );
  process.exit(1);
}

const indexPath = join(outDir, "index.html");
if (source !== indexPath) {
  copyFileSync(source, indexPath);
}

// GitHub Pages serves 404.html for unknown routes (SPA fallback).
copyFileSync(indexPath, join(outDir, "404.html"));

// Prevent Jekyll from stripping Vite output (e.g. _shell.html).
writeFileSync(join(outDir, ".nojekyll"), "");

console.log(`[prepare-gh-pages] Ready for deploy from ${outDir}`);

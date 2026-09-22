/**
 * Builds responsive hero portrait derivatives (WebP + JPEG) from the source
 * asset. Display crop matches the hero frame (4:5).
 *
 * Run from repo root:
 *   node scripts/generate-portfolio-portrait.mjs
 */
import sharp from "sharp";
import path from "node:path";
import { mkdir, readdir, unlink } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = path.join(
  root,
  "src/portfolio/assets/portrait_jake_robins.jpg",
);
const outDir = path.join(root, "public/portfolio/portrait");

/* CSS widths the hero actually needs, including 2× for retina. */
const WIDTHS = [480, 720, 960, 1200, 1440, 1800];
const ASPECT = 5 / 4; /* height / width → 4:5 frame */

await mkdir(outDir, { recursive: true });

/* Clear previous derivatives so renamed widths do not linger. */
for (const name of await readdir(outDir)) {
  if (/^jake-\d+\.(webp|jpg)$/.test(name)) {
    await unlink(path.join(outDir, name));
  }
}

const source = sharp(sourcePath).rotate();

for (const width of WIDTHS) {
  const height = Math.round(width * ASPECT);
  const base = source.clone().resize(width, height, {
    fit: "cover",
    position: "attention",
  });

  await base
    .clone()
    .webp({ quality: 78, effort: 5 })
    .toFile(path.join(outDir, `jake-${width}.webp`));

  await base
    .clone()
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(outDir, `jake-${width}.jpg`));

  console.log(`Wrote jake-${width}.webp / .jpg (${width}×${height})`);
}

console.log(`Done → ${outDir}`);

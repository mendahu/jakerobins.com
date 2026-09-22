/**
 * Builds portfolio favicons / app icons from a brand mark SVG.
 *
 * Run from repo root:
 *   node scripts/generate-portfolio-icons.mjs
 */
import sharp from "sharp";
import path from "node:path";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public/portfolio/icons");

const petrol = "#0e3a42";
const paper = "#f5f1e8";
const chartreuse = "#c8e262";
const claret = "#74162b";

await mkdir(outDir, { recursive: true });

/* Color mark for PNG/ICO — JR on petrol with a chartreuse baseline. */
const colorMark = (size) => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="${petrol}"/>
  <rect x="392" y="56" width="64" height="64" fill="${claret}" transform="rotate(45 424 88)"/>
  <text x="256" y="318" text-anchor="middle" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="220" font-weight="700" fill="${paper}" letter-spacing="-8">JR</text>
  <rect x="156" y="380" width="200" height="18" fill="${chartreuse}"/>
</svg>`;

/* Safari pinned-tab / mask icon — single-color mark on transparent. */
const maskSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect x="362" y="56" width="72" height="72" transform="rotate(45 398 92)" fill="#000"/>
  <path fill="#000" d="M140 150h70v212h-70V150zm148 0c58 0 96 32 96 86 0 38-20 64-56 78l48 48h-82l-40-44h-36v44h-70V150h140zm0 64h-70v52h70c22 0 36-12 36-26s-14-26-36-26z"/>
  <rect x="156" y="400" width="200" height="22" fill="#000"/>
</svg>`;

/* Scalable favicon for modern browsers (matches color mark). */
const faviconSvg = colorMark(512);

const pngSizes = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "android-chrome-192x192.png", size: 192 },
  { name: "android-chrome-512x512.png", size: 512 },
  { name: "mstile-150x150.png", size: 150 },
];

for (const { name, size } of pngSizes) {
  await sharp(Buffer.from(colorMark(size)))
    .png()
    .toFile(path.join(outDir, name));
  console.log(`Wrote ${name}`);
}

/* Real multi-size ICO via ImageMagick (sharp writes PNG if asked for .ico). */
const { execFileSync } = await import("node:child_process");
execFileSync(
  "magick",
  [
    path.join(outDir, "favicon-16x16.png"),
    path.join(outDir, "favicon-32x32.png"),
    path.join(outDir, "favicon.ico"),
  ],
  { stdio: "inherit" },
);
console.log("Wrote favicon.ico");

await writeFile(path.join(outDir, "favicon.svg"), faviconSvg);
await writeFile(path.join(outDir, "safari-pinned-tab.svg"), maskSvg);
console.log("Wrote favicon.svg, safari-pinned-tab.svg");

const manifest = {
  name: "Jake Robins — freelance developer",
  short_name: "Jake Robins",
  description:
    "End-to-end technical partner for companies with real web products.",
  start_url: "/",
  display: "standalone",
  background_color: petrol,
  theme_color: petrol,
  icons: [
    {
      src: "/portfolio/icons/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/portfolio/icons/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
};

await writeFile(
  path.join(outDir, "site.webmanifest"),
  JSON.stringify(manifest, null, 2) + "\n",
);
console.log("Wrote site.webmanifest");

const browserconfig = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square150x150logo src="/portfolio/icons/mstile-150x150.png"/>
      <TileColor>${petrol}</TileColor>
    </tile>
  </msapplication>
</browserconfig>
`;
await writeFile(path.join(outDir, "browserconfig.xml"), browserconfig);
console.log("Wrote browserconfig.xml");
console.log(`Done → ${outDir}`);

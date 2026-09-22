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

/* Safari pinned-tab / mask icon — single-color JR from Arial Bold outlines
   (y-down path data, padded so nothing clips). No <text>: Safari mask icons
   ignore SVG text nodes. */
const maskSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path fill="#000" d="M404 78l24 24-24 24-24-24z"/>
  <path fill="#000" d="M178.00 260.44L178.00 145.57L213.79 145.57L213.79 258.14Q213.79 280.22 209.90 292.10L209.90 292.10Q204.69 307.63 190.98 317.03Q177.27 326.43 154.83 326.43L154.83 326.43Q128.51 326.43 114.31 311.70Q100.12 296.96 100.00 268.45L100.00 268.45L133.84 264.57Q134.45 279.85 138.33 286.16L138.33 286.16Q144.16 295.74 156.04 295.74L156.04 295.74Q168.05 295.74 173.03 288.89Q178.00 282.04 178.00 260.44L178.00 260.44M288.02 323.40L252.12 323.40L252.12 145.57L327.69 145.57Q356.20 145.57 369.12 150.36Q382.04 155.15 389.80 167.40Q397.56 179.65 397.56 195.42L397.56 195.42Q397.56 215.44 385.80 228.48Q374.03 241.52 350.62 244.92L350.62 244.92Q362.26 251.71 369.85 259.84Q377.43 267.96 390.29 288.71L390.29 288.71L412.00 323.40L369.06 323.40L343.10 284.70Q329.27 263.96 324.17 258.56Q319.08 253.16 313.38 251.16Q307.68 249.16 295.30 249.16L295.30 249.16L288.02 249.16L288.02 323.40M288.02 175.65L288.02 220.78L314.59 220.78Q340.43 220.78 346.86 218.59Q353.29 216.41 356.93 211.07Q360.57 205.73 360.57 197.73L360.57 197.73Q360.57 188.75 355.77 183.23Q350.98 177.71 342.25 176.26L342.25 176.26Q337.88 175.65 316.05 175.65L316.05 175.65L288.02 175.65"/>
  <rect fill="#000" x="120" y="356" width="260" height="16"/>
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

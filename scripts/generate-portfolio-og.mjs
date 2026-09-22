/**
 * Composites the portfolio Open Graph banner (1200×630): petrol copy panel +
 * portrait on the right. Copy comes from src/portfolio/content.ts.
 *
 * Run from repo root (Node 22+):
 *   node --experimental-strip-types scripts/generate-portfolio-og.mjs
 */
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { hero } from "../src/portfolio/content.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const portraitPath = path.join(
  root,
  "src/portfolio/assets/portrait_jake_robins.jpg",
);
const outPath = path.join(root, "public/portfolio/opengraph_banner.jpg");

const W = 1200;
const H = 630;
/* Leave enough room on the left that the eyebrow never meets the portrait. */
const PORTRAIT_W = 500;
const COPY_RIGHT = W - PORTRAIT_W - 10;
const PAD_X = 72;

const petrol = "#0e3a42";
const paper = "#f5f1e8";
const chartreuse = "#c8e262";
const claret = "#74162b";

const eyebrow = hero.eyebrow.toUpperCase();
const [eyebrowLead, eyebrowTrail] = eyebrow.split(" · ").map((s) => s.trim());
const positioning = hero.positioning;
/* Split the positioning on the last comfortable break for two lines. */
const positioningBreak = positioning.indexOf(" for ");
const positioningLine1 = positioning.slice(0, positioningBreak + 4).trim();
const positioningLine2 = positioning.slice(positioningBreak + 5).trim();

const portrait = await sharp(portraitPath)
  .rotate()
  .resize(PORTRAIT_W, H, { fit: "cover", position: "attention" })
  .jpeg({ quality: 92 })
  .toBuffer();

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="${petrol}"/>
  <rect x="${COPY_RIGHT}" y="0" width="10" height="${H}" fill="${chartreuse}"/>
  <rect x="78" y="64" width="28" height="28" fill="${claret}" transform="rotate(45 92 78)"/>
  <text x="${PAD_X}" y="148" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="28" font-weight="600" fill="${chartreuse}">
    <tspan x="${PAD_X}" dy="0">${eyebrowLead}</tspan>
    <tspan x="${PAD_X}" dy="36">${eyebrowTrail}</tspan>
  </text>
  <text x="68" y="320" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="96" font-weight="700" letter-spacing="-3" fill="${paper}">Jake Robins</text>
  <text x="${PAD_X}" y="392" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="34" font-weight="400" fill="${paper}">
    <tspan x="${PAD_X}" dy="0">${positioningLine1}</tspan>
    <tspan x="${PAD_X}" dy="46">${positioningLine2}</tspan>
  </text>
  <rect x="${PAD_X}" y="${H - 52}" width="140" height="8" fill="${chartreuse}"/>
</svg>`;

const base = await sharp(Buffer.from(svg)).png().toBuffer();

await sharp(base)
  .composite([{ input: portrait, left: W - PORTRAIT_W, top: 0 }])
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(outPath);

console.log(`Wrote ${outPath}`);

/**
 * Composites the portfolio Open Graph banner (1200×630): petrol copy panel +
 * portrait on the right. Run from repo root:
 *   node scripts/generate-portfolio-og.mjs
 */
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const portraitPath = path.join(
  root,
  "public/portfolio/portrait_jake_robins.jpg",
);
const outPath = path.join(root, "public/portfolio/opengraph_banner.jpg");

const W = 1200;
const H = 630;
const PORTRAIT_W = 520;

const petrol = "#0e3a42";
const paper = "#f5f1e8";
const chartreuse = "#c8e262";
const claret = "#74162b";

const portrait = await sharp(portraitPath)
  .rotate()
  .resize(PORTRAIT_W, H, { fit: "cover", position: "attention" })
  .jpeg({ quality: 92 })
  .toBuffer();

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="${petrol}"/>
  <rect x="${W - PORTRAIT_W - 10}" y="0" width="10" height="${H}" fill="${chartreuse}"/>
  <rect x="78" y="78" width="26" height="26" fill="${claret}" transform="rotate(45 91 91)"/>
  <text x="72" y="175" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="20" font-weight="600" letter-spacing="4" fill="${chartreuse}">FREELANCE DEVELOPER  ·  PRODUCT PARTNER</text>
  <text x="68" y="300" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="96" font-weight="700" letter-spacing="-3" fill="${paper}">Jake Robins</text>
  <text x="72" y="370" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="28" font-weight="400" fill="${paper}">
    <tspan x="72" dy="0">End-to-end technical partner for</tspan>
    <tspan x="72" dy="38">companies with real products.</tspan>
  </text>
  <rect x="72" y="${H - 52}" width="140" height="7" fill="${chartreuse}"/>
</svg>`;

const base = await sharp(Buffer.from(svg)).png().toBuffer();

await sharp(base)
  .composite([{ input: portrait, left: W - PORTRAIT_W, top: 0 }])
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(outPath);

console.log(`Wrote ${outPath}`);

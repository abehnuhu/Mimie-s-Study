// Generates PWA icons from an inline SVG (heart + book motif in brand colors).
import sharp from "sharp";

const svg = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f7d4dd"/>
      <stop offset="0.5" stop-color="#d4738c"/>
      <stop offset="1" stop-color="#6d3a5c"/>
    </linearGradient>
    <linearGradient id="heart" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#f9e3ea"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="url(#bg)"/>
  <!-- open book -->
  <path d="M136 300 C180 282 232 282 256 298 C280 282 332 282 376 300 L376 366 C332 350 280 350 256 364 C232 350 180 350 136 366 Z"
        fill="#ffffff" opacity="0.92"/>
  <path d="M256 298 L256 364" stroke="#d4738c" stroke-width="8" stroke-linecap="round" opacity="0.5"/>
  <!-- heartbeat line across book -->
  <path d="M150 332 H200 L214 314 L230 350 L244 332 H330" fill="none" stroke="#d4738c" stroke-width="10"
        stroke-linecap="round" stroke-linejoin="round"/>
  <!-- heart above -->
  <path d="M256 120 C236 96 196 96 178 122 C160 148 170 178 196 200 L256 252 L316 200 C342 178 352 148 334 122 C316 96 276 96 256 120 Z"
        fill="url(#heart)"/>
</svg>`;

async function main() {
  await sharp(Buffer.from(svg)).resize(512, 512).png().toFile("public/icons/icon-512.png");
  await sharp(Buffer.from(svg)).resize(192, 192).png().toFile("public/icons/icon-192.png");
  await sharp(Buffer.from(svg))
    .resize(180, 180)
    .extend({ top: 166, bottom: 166, left: 166, right: 166, background: "#d4738c" })
    .png()
    .toFile("public/icons/icon-maskable-512.png");
  console.log("icons written");
}
main();

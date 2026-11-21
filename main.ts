import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short text, written to entry.txt: a child carried on a
// grandfather's shoulders through a field at dusk, fireflies rising,
// 275 chars, under the 280 cap.
const TEXT =
  "You are small on your grandfather's shoulders. The field goes by, slow and even. His hands hold your ankles. Fireflies rise out of the grass, one, then a hundred. The whole field is lifting. The sky comes down to meet it, and the night goes on, and you are held above it all.";

const len = [...TEXT].length;
if (len < 1 || len > 280) {
  console.error(`entry.txt length ${len} is outside the 1-280 char limit`);
  process.exit(1);
}
if (TEXT.trim().length === 0) {
  console.error("entry.txt must not be whitespace-only");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TEXT, "utf8");

console.log(`wrote ${outPath} (${len} chars)`);

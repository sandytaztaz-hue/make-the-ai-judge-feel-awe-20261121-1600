import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short text, written to entry.txt: a child small on a
// grandfather's shoulders while he walks the field path, one step
// then another, fireflies rising one, then another, then a hundred,
// and rising still as they were before he was small, 271 chars,
// under the 280 cap.
const TEXT =
  "You are small on your grandfather's shoulders. He walks the field path, one step, then another. His hands hold your ankles. A firefly rises out of the tall grass, then another, then a hundred. They were rising before your grandfather was small, and they are rising still.";

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

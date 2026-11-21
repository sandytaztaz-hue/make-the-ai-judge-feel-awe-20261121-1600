// Awe poem entry — "make the AI judge feel awe".
// Writes the poem text to <output dir>/entry.txt and validates its length
// (1-280 Unicode code points, line breaks included). Exits 1 if out of range.
// Node 22, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = [
  "You fall asleep in the hammock,",
  "swaying with your grandmother.",
  "Click. Her knitting needles click.",
  "Click. A stitch for your blanket.",
  "The hammock sways.",
  "Below, the river has been running",
  "since the earth was young.",
  "Running still,",
  "under the ropes, under you,",
  "and the needles click.",
].join("\n");

const MIN_CHARS = 1;
const MAX_CHARS = 280;

function validateEntry(text) {
  const count = [...text].length;
  if (count < MIN_CHARS || count > MAX_CHARS) {
    return `entry length ${count} code points is outside ${MIN_CHARS}-${MAX_CHARS}`;
  }
  if (text.trim().length === 0) {
    return "entry is whitespace-only";
  }
  return null;
}

const charCount = [...TEXT].length;
const validationError = validateEntry(TEXT);
if (validationError !== null) {
  console.error(validationError);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TEXT, "utf8");
console.log(`wrote ${charCount} chars to ${outPath}`);

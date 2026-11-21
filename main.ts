import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = `You fall asleep in the hammock,
swaying with your grandmother.
Click. Her knitting needles click.
Click. A stitch. The hammock sways.
Below, the river has been running
since before the town had a name.
It is running still, under the ropes,
under you, and the needles click on.`;

function validateEntry(text: string): number {
  const count = [...text].length;
  if (count < 1 || count > 280) {
    throw new Error(`entry out of range: ${count} chars (must be 1-280)`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be whitespace-only");
  }
  return count;
}

let charCount: number;
try {
  charCount = validateEntry(ENTRY);
} catch (err) {
  console.error((err as Error).message);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${charCount} chars to ${join(outDir, "entry.txt")}`);

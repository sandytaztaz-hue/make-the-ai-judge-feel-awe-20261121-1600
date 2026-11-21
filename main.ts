import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short text, written to entry.txt: starlight arriving on old
// mountain snow, 279 chars, under the 280 cap.
const TEXT =
  "Starlight took a thousand years to reach the snow on this mountain. " +
  "The snow fell before there was a road, before the mountain had a name. " +
  "It is still there, in the dark and the cold, holding the soft light. " +
  "It took a thousand years to arrive, slowly. " +
  "It is in no hurry to leave.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TEXT, "utf8");

const len = [...TEXT].length;
if (len < 1 || len > 280) {
  console.error(`entry.txt length ${len} is outside the 1-280 char limit`);
  process.exit(1);
}
console.log(`wrote ${outPath} (${len} chars)`);

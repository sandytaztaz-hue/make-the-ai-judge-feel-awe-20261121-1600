// make-the-ai-judge-feel-awe-20261121-1600
// Writes one short text (1-280 Unicode code points) to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Starlight took a thousand years to reach the snow on this mountain. " +
  "The snow fell before there was a road, before the mountain had a name. " +
  "It is still there, in the dark, holding the light. " +
  "It took a thousand years to arrive. It is in no hurry to leave.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TEXT, "utf8");

const len = [...TEXT].length;
if (len < 1 || len > 280) {
  console.error(`entry length ${len} code points, out of range 1-280`);
  process.exit(1);
}
console.log(`wrote ${outPath} (${len} chars)`);

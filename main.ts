// Fortune in a Pot — one kind, funny fortune for a houseplant.
// Entry for make.fun bounty u-golden-heron-44-fortune-in-a-pot-ded981e9.
// Writes the fortune line to entry.txt (max 120 characters).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Your windowsill plant forgives every missed watering, sprouts gossip-worthy leaves, and blooms right on time.";

if (line.length < 1 || line.length > 120) {
  throw new Error(`Fortune must be 1-120 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n");
console.log(line);

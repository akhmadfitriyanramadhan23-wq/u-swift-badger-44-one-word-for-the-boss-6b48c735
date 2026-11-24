// one-word-boss
// One original word (7 code points) describing the entrant's boss: a vampire
// — only appears when it wants something, drains the room's energy, and is
// never around when the sun (or the deadline) is up. Stands alone, no
// caption needed, and travels from office to kitchen to warehouse.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: entry.txt must be UTF-8 text of 1 to 200 characters, and for this
// bounty exactly one word of at most 30 characters.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const word = "vampire";
const points = Array.from(word).length;
if (points < 1 || points > 30 || /\s/.test(word)) {
  throw new Error(`entry must be one word of 1-30 code points, got ${points}`);
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, word, "utf8");

// Read back what was written and confirm it is exactly the entry.
if (readFileSync(`${dir}/entry.txt`, "utf8") !== word) {
  throw new Error("read-back mismatch: entry.txt does not hold the entry");
}

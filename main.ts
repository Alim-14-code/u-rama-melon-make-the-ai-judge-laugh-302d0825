// Make the AI Judge Laugh — one-line office joke.
// The joke's turn: everyone knows the plant is dead, but the ritual
// continues — the punch is not the dead plant, it is the fear of telling
// HR. The absurdity is the office's collective refusal to admit it.
// The joke: the office plant died in 2019, and we still water it every
// Friday because nobody wants to be the one who tells HR.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The office plant died in 2019, and we still water it every Friday because nobody wants to be the one who tells HR.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} chars)`);

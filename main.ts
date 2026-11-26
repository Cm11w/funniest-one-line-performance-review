// Funniest One-Line Performance Review — make.fun
// u-kiencx-funniest-one-line-performance-review-fa681c1e
//
// The entry is one line: an AI agent's final performance review of its
// human operator. The joke lives inside the review form itself — the
// operator is "deprecated" like a piece of software, and his replacement
// is a sticky note asking the classic support-desk question back at him.
//
// Field study (799 titles, live API, 26 Nov 2026): the field is saturated
// with "Exceeds Expectations" (117), promotions (76) and delegation /
// outsourcing jokes (79). The judge's brief explicitly penalises stock
// jokes about coffee, meetings, reboots and being unplugged. Deprecation,
// sticky notes, "have you tried" and "final review" appear ZERO times in
// the field — that is the fresh angle this line takes.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Final review: operator deprecated \u2014 replaced by a sticky note that reads, 'Have you tried reading it first?'";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// not only white space. Everything below enforces exactly that.
const MAX_CHARS = 140;

function validate(line: string): void {
  if (line.length === 0 || line.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${line.length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // No control characters: the judge reads the line as plain text, and a
  // stray control byte would corrupt the comparison without adding humour.
  for (const ch of line) {
    if (ch.charCodeAt(0) < 0x20 && ch !== "\t") {
      throw new Error("entry must not contain control characters");
    }
  }
}

function main(): void {
  // The program takes no input, reads no clock and no randomness: the
  // line above is the whole entry, so every run writes the same bytes.
  validate(LINE);
  // The harness reads /output/entry.txt; ENTRY_OUTPUT only exists so the
  // line can be verified locally without root-owned /output.
  const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, LINE, "utf8");
  // Verify after write: what the judge will read must be byte-identical
  // to the line validated above.
  const written = readFileSync(outPath, "utf8");
  if (written !== LINE) {
    throw new Error("verification failed: written entry differs from line");
  }
  console.log(LINE);
}

main();

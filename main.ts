// One-Line Office Joke: 24-Hour Sprint
// Entry program (program/v1): writes exactly one office-joke line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// Revised joke: "two settings" gives the setup a crisp, specific detail
// (every office worker knows exactly these two printer states), and the
// punchline lands by calling the broken machine the reliable employee.
// Single sentence, one line, no trailing newline in the output file.
const JOKE =
  "Our office printer has two settings — jammed and out of toner — which makes it the most reliable employee we have.";

// The gate requires 1-200 characters of non-whitespace text; fail loudly
// rather than writing an invalid entry.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke must be 1-200 chars, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

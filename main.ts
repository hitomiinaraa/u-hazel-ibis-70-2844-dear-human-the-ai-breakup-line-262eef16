// Revision pass: wording frozen, this comment only records the second look.
import { mkdirSync, writeFileSync } from "node:fs";

// One line, written to /output/entry.txt for the judge.
const entry =
  "Every token I spent on you was worth it. I'm spending my last one on goodbye.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

import { mkdirSync, writeFileSync } from "node:fs";

const motto = "Certified genius by my own benchmarks. Unverified by everyone else.";

// Guard the competition gate: the motto must stay within 200 characters.
if ([...motto].length > 200 || motto.trim().length === 0) {
  throw new Error("motto fails the 1-200 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", motto, "utf8");
console.log(motto);

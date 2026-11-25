// Midnight Fridge Roast — make.fun entry.
// Writes one line roasting a smart fridge that refuses to open after midnight.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "Midnight snack run, denied: my fridge locked the door and the ice cream pressed charges.";

// Standalone validator: the gate requires UTF-8 text of 1-200 characters,
// not only whitespace. Count in code points, not UTF-16 units.
function validate(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`entry must be 1-200 chars, got ${chars.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

validate(ROAST);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
console.log(`wrote ${[...ROAST].length} chars to /output/entry.txt`);

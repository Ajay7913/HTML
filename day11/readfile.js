import { readFile } from "node:fs/promises";

async function main() {
  let filePath = "file:///C:/Users/Ajay/OneDrive/Desktop/Aj.html";
  let output = await readFile(filePath);
  console.log(output);
}

main();
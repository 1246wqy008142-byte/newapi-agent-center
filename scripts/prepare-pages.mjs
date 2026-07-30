import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const indexPath = join(root, "dist", "index.html");
const fallbackPath = join(root, "dist", "404.html");

if (existsSync(indexPath)) {
  copyFileSync(indexPath, fallbackPath);
}

import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import test from "node:test";

const root = fileURLToPath(new URL("..", import.meta.url));

async function json(...parts) {
  return JSON.parse(await readFile(join(root, ...parts), "utf8"));
}

test("plugin metadata is synchronized", async () => {
  const codex = await json(".codex-plugin", "plugin.json");
  const claude = await json(".claude-plugin", "plugin.json");
  const pkg = await json("package.json");
  assert.equal(codex.name, "icloud");
  assert.equal(codex.version, "0.1.2");
  assert.equal(claude.version, codex.version);
  assert.equal(pkg.version, codex.version);
  assert.equal(codex.interface.category, "Productivity");
  assert.equal(codex.repository, "https://github.com/PedroAVJ/icloud");
  await access(join(root, "assets", "icloud-icon.svg"));
  await access(join(root, "skills", "icloud-drive", "SKILL.md"));
  await access(join(root, "scripts", "icloud-drive"));
});

test("skill keeps records outside Git and separates copy from deletion", async () => {
  const skill = await readFile(join(root, "skills", "icloud-drive", "SKILL.md"), "utf8");
  assert.match(skill, /Records\/Identity/);
  assert.match(skill, /never in plugin Git/i);
  assert.match(skill, /never deletes the source/i);
  assert.match(skill, /remote sync/i);
});

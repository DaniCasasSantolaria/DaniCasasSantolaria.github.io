import { mkdir, writeFile } from "node:fs/promises";

const OUT_DIR = "public/images/icons/devicons";

const icons = [
  ["unrealengine-original.svg", "unrealengine/unrealengine-original.svg"],
  ["unity-original.svg", "unity/unity-original.svg"],
  ["cplusplus-original.svg", "cplusplus/cplusplus-original.svg"],
  ["csharp-original.svg", "csharp/csharp-original.svg"],

  ["blender-original.svg", "blender/blender-original.svg"],
  ["photoshop-original.svg", "photoshop/photoshop-original.svg"],

  ["html5-original.svg", "html5/html5-original.svg"],
  ["css3-original.svg", "css3/css3-original.svg"],
  ["javascript-original.svg", "javascript/javascript-original.svg"],
  ["typescript-original.svg", "typescript/typescript-original.svg"],
  ["astro-original.svg", "astro/astro-original.svg"],

  ["git-original-wordmark.svg", "git/git-original-wordmark.svg"],
  ["github-original.svg", "github/github-original.svg"],
  ["visualstudio-plain.svg", "visualstudio/visualstudio-plain.svg"],
  ["visualstudio-original.svg", "visualstudio/visualstudio-original.svg"],
  ["vscode-original.svg", "vscode/vscode-original.svg"],
  ["markdown-original.svg", "markdown/markdown-original.svg"]
];

await mkdir(OUT_DIR, { recursive: true });

for (const [filename, path] of icons) {
  const url = `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/${path}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to download ${filename}: ${res.status} ${res.statusText}`);
  }

  const svg = await res.text();
  await writeFile(`${OUT_DIR}/${filename}`, svg, "utf8");
  console.log(`Downloaded ${filename}`);
}

console.log("Done.");
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("out");
const baseUrl = "https://cloud.mywwwserver.in/bharat-marks/";

async function updateHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await updateHtmlFiles(entryPath);
      continue;
    }

    if (!entry.isFile() || !entry.name.endsWith(".html")) {
      continue;
    }

    const html = await readFile(entryPath, "utf8");
    const withBaseUrl = /<base\b/i.test(html)
      ? html
      : html.replace(/<head([^>]*)>/i, `<head$1><base href="${baseUrl}"/>`);
    const prefixedHtml = withBaseUrl.replace(
      /\b(href|src|content)=("|\')(\/(?!\/)[^"\']*)\2/gi,
      (_match, attribute, quote, url) =>
        `${attribute}=${quote}https://cloud.mywwwserver.in${url}${quote}`,
    );

    await writeFile(entryPath, prefixedHtml);
  }
}

await updateHtmlFiles(outputDirectory);

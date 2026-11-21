import { access, readFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("out");
const requiredRoutes = [
  "index.html",
  "contact/index.html",
  "privacy-policy/index.html",
  "disclaimer/index.html",
  "services/trademark-search/index.html",
  "services/trademark-registration/index.html",
  "services/trademark-objection/index.html",
  "services/trademark-hearing/index.html",
  "services/trademark-renewal/index.html",
  "services/trademark-assignment/index.html",
  "services/copyright-registration/index.html",
  "services/patent-assistance/index.html",
];

for (const route of requiredRoutes) {
  try {
    await access(path.join(outputDirectory, route));
  } catch {
    throw new Error(`Static export is missing the expected clean-URL file: out/${route}`);
  }
}

const rewriteConfig = await readFile(path.join(outputDirectory, ".htaccess"), "utf8");
if (!/^DirectoryIndex\\s+index\\.html\\s*$/m.test(rewriteConfig)) {
  throw new Error("The exported .htaccess must configure DirectoryIndex index.html.");
}

const legacyHtmlFiles = [
  "contact.html",
  "privacy-policy.html",
  "disclaimer.html",
  "services/trademark-search.html",
  "services/trademark-registration.html",
];
for (const route of legacyHtmlFiles) {
  try {
    await access(path.join(outputDirectory, route));
    throw new Error(`Unexpected flat .html route found: out/${route}`);
  } catch (error) {
    if (error instanceof Error && error.message.startsWith("Unexpected flat .html")) throw error;
  }
}

console.log(`Verified ${requiredRoutes.length} static routes use directory index files and clean URLs.`);

import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const baseUrl = "https://www.frisabistro.com";

const staticRoutes = ["/", "/menu", "/eventi", "/prenota", "/contatti", "/privacy"];

const eventSlugs = [
  "bossaproject-quartet-live",
  "domenica-in-jazz",
  "ohe-semm-chi",
  "frisa-jazz-gang-alfredo-ferrario",
  "stardust-jazz-4et",
  "federica-zeta-love-lounge",
  "jazz-al-capolinea",
  "mela-manouche",
];

const urls = [
  ...staticRoutes,
  ...eventSlugs.map((slug) => `/eventi/${slug}`),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${baseUrl}${path === "/" ? "" : path}</loc>
    <changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${path === "/" ? "1.0" : path === "/menu" || path === "/prenota" ? "0.9" : "0.7"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const outDir = join(__dirname, "..", "public");
writeFileSync(join(outDir, "sitemap.xml"), sitemap);
console.log(`Sitemap written with ${urls.length} URLs`);

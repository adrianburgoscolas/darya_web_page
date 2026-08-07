import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const base = (import.meta.env.BASE_URL ?? "/").replace(/\/?$/, "/");
  const sitemapUrl = new URL(`${base}sitemap-index.xml`, site).href;
  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`,
    {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    }
  );
};

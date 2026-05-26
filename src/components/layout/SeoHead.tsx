import { Helmet } from "react-helmet-async";
import { site } from "../../data/site";

type SeoHeadProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
};

export function SeoHead({
  title,
  description,
  path = "/",
  image = site.defaultOgImage,
  type = "website",
  noindex = false,
}: SeoHeadProps) {
  const url = `${site.url}${path === "/" ? "" : path}`;
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;

  return (
    <Helmet>
      <html lang="it" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex" />}
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${site.url}${image}`} />
      <meta property="og:locale" content="it_IT" />
      <meta property="og:site_name" content={site.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${site.url}${image}`} />
    </Helmet>
  );
}

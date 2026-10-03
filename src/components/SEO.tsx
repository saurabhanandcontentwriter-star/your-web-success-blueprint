import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  isHome?: boolean;
  isArticle?: boolean;
  keywords?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
}

const BASE_URL = "https://saurabhanandseo.com";
const DEFAULT_IMAGE = "/og-thumbnail.jpg";
const DEFAULT_IMAGE_ALT = "Saurabh Anand — SEO, AI search and data analytics professional";

const normalizePath = (path: string) => {
  if (!path || path === "/") return "/";
  return `/${path.replace(/^\/+|\/+$/g, "")}`;
};

const SEO = ({
  title,
  description,
  path = "",
  isHome = false,
  isArticle = false,
  keywords,
  jsonLd,
  image = DEFAULT_IMAGE,
  imageAlt = DEFAULT_IMAGE_ALT,
  noindex = false,
}: SEOProps) => {
  const normalizedPath = normalizePath(path);
  const url = `${BASE_URL}${normalizedPath}`;
  const fullTitle = isHome ? title : `${title} | Saurabh Anand`;
  const imageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;
  const robots = noindex
    ? "noindex, nofollow, noarchive"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  const breadcrumbItems = normalizedPath === "/"
    ? [{ "@type": "ListItem", position: 1, name: "Home", item: BASE_URL }]
    : [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: title, item: url },
      ];

  const defaultLd = {
    "@context": "https://schema.org",
    "@type": isArticle ? "Article" : "WebPage",
    name: fullTitle,
    headline: fullTitle,
    description,
    url,
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", name: "Saurabh Anand", url: BASE_URL },
    about: { "@type": "Person", name: "Saurabh Anand", url: `${BASE_URL}/about` },
    primaryImageOfPage: { "@type": "ImageObject", url: imageUrl },
    ...(isArticle ? { author: { "@type": "Person", name: "Saurabh Anand", url: `${BASE_URL}/about` } } : {}),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  };

  const ldItems = Array.isArray(jsonLd)
    ? [defaultLd, breadcrumbLd, ...jsonLd]
    : jsonLd
      ? [defaultLd, breadcrumbLd, jsonLd]
      : [defaultLd, breadcrumbLd];

  return (
    <Helmet>
      <html lang="en-IN" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Saurabh Anand" />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="bingbot" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <link rel="alternate" type="text/plain" href={`${BASE_URL}/llms.txt`} title="LLM-readable site information" />

      <meta property="og:type" content={isArticle ? "article" : "website"} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Saurabh Anand" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />

      <script type="application/ld+json">{JSON.stringify(ldItems)}</script>
    </Helmet>
  );
};

export default SEO;

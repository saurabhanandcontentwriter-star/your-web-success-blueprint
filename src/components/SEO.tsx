import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  isHome?: boolean;
  keywords?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  image?: string;
  noindex?: boolean;
}

const BASE_URL = "https://saurabhanandseo.com";
const DEFAULT_IMAGE = "/og-thumbnail.jpg";

const SEO = ({ title, description, path = "", isHome = false, keywords, jsonLd, image = DEFAULT_IMAGE, noindex = false }: SEOProps) => {
  const url = `${BASE_URL}${path}`;
  const fullTitle = isHome ? title : `${title} | Saurabh Anand`;
  const imageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;
  const defaultLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: fullTitle,
    description,
    url,
    isPartOf: { "@type": "WebSite", name: "Saurabh Anand", url: BASE_URL },
    about: { "@type": "Person", name: "Saurabh Anand", url: `${BASE_URL}/about` },
  };
  const ldItems = Array.isArray(jsonLd) ? [defaultLd, ...jsonLd] : jsonLd ? [defaultLd, jsonLd] : [defaultLd];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Saurabh Anand" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="bingbot" content={noindex ? "noindex, nofollow" : "index, follow"} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <link rel="alternate" type="text/plain" href={`${BASE_URL}/llms.txt`} title="LLM-readable site information" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Saurabh Anand Portfolio" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <script type="application/ld+json">{JSON.stringify(ldItems)}</script>
    </Helmet>
  );
};

export default SEO;

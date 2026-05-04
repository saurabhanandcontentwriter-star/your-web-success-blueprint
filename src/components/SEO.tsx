import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  /** If true, use the title as-is (no " | Saurabh Anand" suffix). */
  isHome?: boolean;
  /** Optional comma-separated keywords. */
  keywords?: string;
  /** Optional JSON-LD structured data object. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Override OG image (absolute or root-relative path). */
  image?: string;
}

const BASE_URL = "https://saurabhanandseo.com";
const DEFAULT_IMAGE = "/og-thumbnail.jpg";

const SEO = ({
  title,
  description,
  path,
  isHome = false,
  keywords,
  jsonLd,
  image = DEFAULT_IMAGE,
}: SEOProps) => {
  const url = `${BASE_URL}${path}`;
  const fullTitle = isHome ? title : `${title} | Saurabh Anand`;
  const imageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Saurabh Anand" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Saurabh Anand Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;

import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path: string;
}

const BASE_URL = "https://saurabhanandseo.com";

const SEO = ({ title, description, path }: SEOProps) => {
  const url = `${BASE_URL}${path}`;
  const fullTitle = `${title} | Saurabh Anand`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${BASE_URL}/og-thumbnail.jpg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${BASE_URL}/og-thumbnail.jpg`} />
    </Helmet>
  );
};

export default SEO;

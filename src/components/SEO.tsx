import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const defaultMeta = {
  title: 'Sutton Web Solutions - Web Development That Ships',
  description: 'Professional web development services in Boulder, CO. Clean, fast, and scalable web applications built with React, Next.js, and modern technologies.',
  image: '/og-image.png',
  url: 'https://suttonwebsolutions.com',
  type: 'website',
};

export default function SEO({
  title,
  description = defaultMeta.description,
  image = defaultMeta.image,
  url = defaultMeta.url,
  type = defaultMeta.type,
}: SEOProps) {
  const fullTitle = title ? `${title} | Sutton Web Solutions` : defaultMeta.title;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sutton Web Solutions',
    description: 'Professional web development services',
    url: 'https://suttonwebsolutions.com',
    founder: {
      '@type': 'Person',
      name: 'Atreyu Sutton',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Boulder',
      addressRegion: 'CO',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'me@atreyusutton.com',
      telephone: '+1-303-990-2525',
      contactType: 'customer service',
    },
    sameAs: [
      'https://linkedin.com/in/atreyusutton',
      'https://github.com/atreyusutton',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sutton Web Solutions',
    url: 'https://suttonwebsolutions.com',
    description: 'Professional web development services in Boulder, CO',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://suttonwebsolutions.com/work?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Sutton Web Solutions" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="author" content="Atreyu Sutton" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#6f3cff" />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </Head>
  );
}

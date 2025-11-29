export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Patrick Barattin",
    "url": "https://patrickbarattin.com",
    "image": "https://patrickbarattin.com/nittarab_profile.jpg",
    "jobTitle": "Software Engineer",
    "description": "Passionate Ruby on Rails developer | Fintech enthusiast | AI explorer",
    "sameAs": [
      "https://x.com/patrickbarattin",
      "https://linkedin.com/in/patrickbarattin",
      "https://github.com/nittarab",
      "https://patrickbarattin.substack.com"
    ],
    "knowsAbout": [
      "Ruby on Rails",
      "Software Engineering",
      "Fintech",
      "Artificial Intelligence",
      "E-commerce"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "on.com"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Patrick Barattin",
    "url": "https://patrickbarattin.com",
    "description": "Personal website of Patrick Barattin, software engineer and entrepreneur",
    "author": {
      "@type": "Person",
      "name": "Patrick Barattin"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
    </>
  );
}

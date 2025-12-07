export default function StructuredData() {
  // Using @graph format with @id references for interconnected entities
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://nittarab.dev/#website",
        url: "https://nittarab.dev/",
        name: "Patrick Barattin",
      },
      {
        "@type": "ProfilePage",
        "@id": "https://nittarab.dev/#webpage",
        url: "https://nittarab.dev/",
        name: "Patrick Barattin – Official profile",
        isPartOf: {
          "@id": "https://nittarab.dev/#website",
        },
        mainEntity: {
          "@id": "https://nittarab.dev/#person",
        },
      },
      {
        "@type": "Person",
        "@id": "https://nittarab.dev/#person",
        name: "Patrick Barattin",
        url: "https://nittarab.dev/",
        image: "https://nittarab.dev/nittarab_profile.webp",
        email: "p.barattin@gmail.com",
        jobTitle: "Software Engineer",
        description: "AI Engineer | Full-Stack Engineer | Fintech enthusiast",
        worksFor: {
          "@id": "https://www.on.com/#organization",
        },
        sameAs: [
          "https://x.com/nittarab",
          "https://www.linkedin.com/in/patrick-barattin/",
          "https://github.com/nittarab",
          "https://nittarab.substack.com/",
        ],
        knowsAbout: [
          "AI Agents",
          "AI Development",
          "AI Engineering",
          "Prompt Engineering",
          "Context Engineering",
          "TypeScript",
          "Node.js",
          "Next.js",
          "NestJS",
          "Ruby on Rails",
          "Software Engineering",
          "Fintech",
          "E-commerce",
          "x402",
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://www.on.com/#organization",
        name: "On",
        url: "https://www.on.com/",
        description:
          "On Holding AG is a Swiss athletic shoe and performance sportswear company headquartered in Zürich, Switzerland.",
        sameAs: [
          "https://www.on.com/",
          "https://en.wikipedia.org/wiki/On_(company)",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

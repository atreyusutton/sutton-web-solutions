export interface Project {
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  services: string[];
  tech: string[];
  results: string[];
  heroImage: string;
  gallery: { src: string; alt: string }[];
  year: string;
  problem: string;
  approach: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: 'fuelfed-motor-market',
    title: 'FuelFed Motor Market',
    client: 'FuelFed',
    industry: 'Automotive marketplace & community',
    summary: 'An enthusiast-driven community and auction platform for classic/special-interest cars.',
    services: ['Frontend architecture', 'User accounts', 'Listing flows', 'Image handling', 'UI design'],
    tech: ['React/Next', 'Tailwind', 'Image optimization', 'Serverless APIs'],
    results: ['Higher listing completion', 'Faster page loads', 'More user engagement'],
    heroImage: '/images/projects/fuelfed-hero.jpg',
    gallery: [
      { src: '/images/projects/fuelfed-1.jpg', alt: 'FuelFed listing interface' },
      { src: '/images/projects/fuelfed-2.jpg', alt: 'FuelFed user dashboard' },
      { src: '/images/projects/fuelfed-3.jpg', alt: 'FuelFed mobile experience' },
    ],
    year: '2024–present',
    problem: 'Create a Bring-a-Trailer-style experience with clean listing submissions, rich media, and trust signals.',
    approach: 'Component-driven UI, image CDN, form validation, account dashboards, bid/watchlist UI.',
    outcome: 'Higher listing completion rates, significantly faster page loads, and increased user engagement across the platform.',
  },
  {
    slug: 'ute-pass-vacation-rentals',
    title: 'Ute Pass Vacation Rentals',
    client: 'Ute Pass Vacation Rentals',
    industry: 'Travel / Hospitality',
    summary: 'Website + booking flows for Colorado mountain rentals.',
    services: ['Property pages', 'Availability UI', 'Inquiry/booking integration', 'Performance optimization'],
    tech: ['React/Next', 'Tailwind', 'Calendar/booking API'],
    results: ['Streamlined bookings', 'Improved UX', 'Mobile conversion increases'],
    heroImage: '/images/projects/ute-pass-hero.jpg',
    gallery: [
      { src: '/images/projects/ute-pass-1.jpg', alt: 'Property listing page' },
      { src: '/images/projects/ute-pass-2.jpg', alt: 'Booking calendar interface' },
      { src: '/images/projects/ute-pass-3.jpg', alt: 'Mobile property gallery' },
    ],
    year: '2024–present',
    problem: 'Make it easy to find, compare, and book stays with a seamless user experience.',
    approach: 'Property cards, filters (guests/amenities), SEO-ready pages, fast image galleries.',
    outcome: 'Streamlined booking process with improved UX and significant mobile conversion improvements.',
  },
  {
    slug: 'the-real-estate-collaborative',
    title: 'The Real Estate Collaborative',
    client: 'The Real Estate Collaborative',
    industry: 'Real Estate',
    summary: 'A polished site for listings, team, and lead capture.',
    services: ['CMS structure', 'Property highlights', 'Lead forms', 'SEO optimization'],
    tech: ['React/Next', 'Tailwind', 'Headless CMS'],
    results: ['Better presentation', 'Increased inbound leads', 'Improved search rankings'],
    heroImage: '/images/projects/real-estate-hero.jpg',
    gallery: [
      { src: '/images/projects/real-estate-1.jpg', alt: 'Property showcase page' },
      { src: '/images/projects/real-estate-2.jpg', alt: 'Team member profiles' },
      { src: '/images/projects/real-estate-3.jpg', alt: 'Contact form interface' },
    ],
    year: '2024–present',
    problem: 'Showcase properties and drive inquiries with clarity and speed.',
    approach: 'Clean information architecture, hero property features, schema markup.',
    outcome: 'Better property presentation and increased inbound lead generation.',
  },
  {
    slug: 'nest-messages',
    title: 'Nest Messages',
    client: 'Nest Messages',
    industry: 'Nonprofit / Community',
    summary: 'A platform for youth to receive positive, community-driven messages.',
    services: ['Landing page', 'Message submission UX', 'Moderation-friendly flows'],
    tech: ['React/Next', 'Tailwind', 'Serverless API'],
    results: ['Increased message submissions', 'Community engagement growth', 'Positive user feedback'],
    heroImage: '/images/projects/nest-messages-hero.jpg',
    gallery: [
      { src: '/images/projects/nest-messages-1.jpg', alt: 'Message submission form' },
      { src: '/images/projects/nest-messages-2.jpg', alt: 'Community dashboard' },
      { src: '/images/projects/nest-messages-3.jpg', alt: 'Mobile message interface' },
    ],
    year: '2024–present',
    problem: 'Present a warm, safe, and simple way to share uplifting notes.',
    approach: 'Friendly visuals, clear CTAs, accessibility by default.',
    outcome: 'Increased message submissions and enhanced community engagement.',
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByIndustry = (industry?: string): Project[] => {
  if (!industry) return projects;
  return projects.filter(project => 
    project.industry.toLowerCase().includes(industry.toLowerCase())
  );
};

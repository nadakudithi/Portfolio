export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  thumbnail?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'hydrate-ai',
    title: 'Hydrate AI',
    description: 'Designing a behavior-aware hydration system that adapts goals using contextual signals.',
    thumbnail: '/work-thumbnails/Hydrate%20AI%20Thumbnail.png'
  },
  {
    slug: 'finflex-ai-flexy-ai',
    title: 'FinFlex AI',
    description: 'Exploring adaptive financial interfaces powered by AI-driven decision models.',
    thumbnail: '/work-thumbnails/FinFlex%20Thumbnail.png'
  },
  {
    slug: 'resortops',
    title: 'ResortOps',
    description: 'Designing operational tools for managing complex resort workflows and internal coordination.',
    thumbnail: '/work-thumbnails/ResortOps%20Thumbnail.png'
  },
  {
    slug: 'yield-enhancer',
    title: 'Yield Enhancer',
    description: 'Improving financial decision visibility through clearer system feedback and allocation insights.',
    thumbnail: '/work-thumbnails/Yield%20Enhancer%20Thumbnail.png'
  },
  {
    slug: 'fleetops',
    title: 'BigBasket',
    description: 'Improving Average Order Value By Imporving Combo Availability And Discoverability.',
    thumbnail: '/work-thumbnails/Bigbasket%20Banner.png'
  }
];

export const explorationTitles = [
  'Gesture browsing experiment',
  'Rive animation study',
  'Agentic UI prototype',
  'Interaction micro-study',
  'Voice interface test',
  'AI interaction concept'
];

export const focusAreas = [
  'Interaction Design',
  'AI-assisted Interfaces',
  'Decision-based UX',
  'Edge-case Analysis',
  'System-level Product Thinking'
];

export const caseStudySections = [
  'Hero',
  'Problem',
  'Context',
  'My Role',
  'Key Insight',
  'Design Exploration',
  'Final Solution',
  'Edge Cases',
  'Impact',
  'Reflection'
];

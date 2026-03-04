export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'hydrate-ai',
    title: 'Hydrate AI',
    description: 'Designing a behavior-aware hydration system that adapts goals using contextual signals.'
  },
  {
    slug: 'finflex-ai-flexy-ai',
    title: 'FinFlex AI',
    description: 'Exploring adaptive financial interfaces powered by AI-driven decision models.'
  },
  {
    slug: 'resortops',
    title: 'ResortOps',
    description: 'Designing operational tools for managing complex resort workflows and internal coordination.'
  },
  {
    slug: 'yield-enhancer',
    title: 'Yield Enhancer',
    description: 'Improving financial decision visibility through clearer system feedback and allocation insights.'
  },
  {
    slug: 'fleetops',
    title: 'FleetOps',
    description: 'Building resilient fleet management interfaces for real-time monitoring and operations.'
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

import { type Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'zlyzer',
    title: 'Zlyzer — AI TikTok Video Analysis Platform',
    category: 'ai',
    description:
      'SaaS Powered for agencies to uncover trends within TikTok content via automated scraping, tagging, and insights dashboards.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Machine Learning'],
    metrics: [
      { label: 'Processed 100,000+ videos' },
      { label: 'Insights generation 80% faster' },
    ],
    links: [
      { label: 'Live', href: 'https://zlyzer.example.com' },
    ],
    responsibilities: [
      'Architected event-driven ingestion pipeline with Supabase functions and queues.',
      'Designed insight dashboards blending creative metrics with predictive scoring.',
      'Implemented adaptive caching to keep query response under 200ms.',
    ],
    challenges: [
      'Balancing API rate limits with real-time dashboard freshness.',
      'Creating reliable AI prompts for concise insight summaries.',
    ],
    outcomes: [
      'Enabled power users to segment creators with custom AI labels.',
      "Reduced analyst time spent per campaign from 2 hours to 15 minutes.",
    ],
    media: [
      { src: '/images/projects/zlyzer.png', alt: 'Zlyzer dashboard overview' },
    ],
  },
  {
    id: 'pulse-media',
    title: 'Pulse Media & Research — Digital Presence',
    category: 'web',
    description:
      'End-to-end marketing site crafted in Vite with bespoke UI/UX for Pulse Media & Research, spotlighting productized research services.',
    stack: ['Vite', 'React', 'TypeScript', 'Tailwind CSS'],
    metrics: [
      { label: 'Time-to-launch under 3 weeks' },
      { label: 'Bounce rate reduced by 28%' },
    ],
    links: [
      { label: 'Live', href: 'https://pulse-sdn.com/' },
    ],
    responsibilities: [
      'Led discovery, information architecture, and visual identity for the brand refresh.',
      'Developed performant Vite front-end with reusable design system tokens.',
      'Implemented data capture flows with responsive, accessibility-first patterns.',
    ],
    challenges: [
      'Balancing editorial storytelling with conversion-oriented CTAs.',
      'Ensuring consistent brand voice across rapidly iterated sections.',
    ],
    outcomes: [
      'Delivered a cohesive landing experience aligned with stakeholder narratives.',
      'Enabled marketing to launch new service highlights without engineering support.',
    ],
    media: [
      { src: '/images/projects/Pulse.png', alt: 'Pulse Media & Research landing page' },
    ],
  },
  {
    id: 'meeton',
    title: 'MeetOn — Social RSVP & Events',
    category: 'mobile',
    description:
      'Cross-platform mobile app for planning meetups with maps, RSVP flows, and push notifications to bring communities together.',
    stack: ['React Native', 'TypeScript', 'Expo', 'REST APIs'],
    metrics: [
      { label: 'RSVP flow conversion +30%' },
      { label: 'Notifications 98% delivery rate' },
    ],
    links: [
      { label: 'Live', href: 'https://meeton.example.com' },
    ],
    responsibilities: [
      'Shipped onboarding with social auth and granular notification preferences.',
      'Integrated Google Places autocomplete for frictionless venue selection.',
      'Set up crash monitoring and OTA update pipeline via Expo.',
    ],
    challenges: [
      'Ensuring parity of UX across iOS and Android devices.',
      'Optimising map markers for realtime attendee updates.',
    ],
    outcomes: [
      'Communities coordinate faster with actionable RSVP analytics.',
      'Reduced churn post-onboarding by 18% through iterative testing.',
    ],
    media: [
      { src: '/images/projects/meeton.png', alt: 'MeetOn mobile' },
    ],
  },
  {
    id: 'green-marmot',
    title: 'Green Marmot — Pricing & Occupancy Analytics',
    category: 'ai',
    description:
      'Analytics workbench combining Python forecasting models with a web dashboard for dynamic pricing decisions.',
    stack: ['Python', 'Pandas', 'NumPy', 'Next.js'],
    metrics: [
      { label: '+25% forecast accuracy' },
      { label: 'Optimised ADR margin +12%' },
    ],
    links: [
      { label: 'Live', href: 'https://greenmarmot.example.com' },
    ],
    responsibilities: [
      'Built feature pipeline ingesting booking and seasonal datasets.',
      'Crafted forecasting notebooks and deployed via serverless jobs.',
      'Developed dashboard with scenario testing and data storytelling.',
    ],
    challenges: [
      'Aligning model confidence with operator expectations.',
      'Creating simple filters for power users without sacrificing depth.',
    ],
    outcomes: [
      'Delivered actionable weekly pricing recommendations for 40+ units.',
      'Empowered team to adjust rates within hours instead of days.',
    ],
    media: [
      { src: '/images/projects/green-marmot.png', alt: 'Green Marmot forecasts view' },
    ],
  },
  {
    id: 'opsforge',
    title: 'OpsForge — Automation Playbooks for Ops Teams',
    category: 'web',
    description:
      'Template-driven automation hub that chains AI agents and SaaS APIs to orchestrate operations workflows.',
    stack: ['Next.js', 'TypeScript', 'LangChain', 'Postgres'],
    metrics: [
      { label: '20+ reusable automations' },
      { label: 'Hours saved per team each week' },
    ],
    links: [
      { label: 'Live', href: 'https://opsforge.example.com' },
    ],
    responsibilities: [
      'Defined plug-and-play automation blueprints with configuration UI.',
      'Implemented audit logging and rollback for each automation run.',
      'Authored product onboarding and quickstart resources.',
    ],
    challenges: [
      'Keeping AI actions auditable while allowing free-form prompts.',
    ],
    outcomes: [
      'Ops leads launch new automations in <1 day with guardrails.',
      'Scaled to multiple teams without dedicated engineering support.',
    ],
    media: [
      { src: '/images/projects/opsforge-1.svg', alt: 'OpsForge automation editor' },
    ],
  },
];

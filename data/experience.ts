import { type ExperienceItem } from '@/types';

export const experience: ExperienceItem[] = [
  {
    company: 'Zlyzer',
    role: 'Founder & Full-Stack Engineer',
    start: '2025',
    end: 'Present',
    bullets: [
      'Founded AI video-analysis SaaS for agencies and influencers for end-to-end insights.',
      'Shipped analytics dashboards (emotions, engagement, trends, audio, performance) with usage quotas and billing-ready metering; led brand and landing design.',
    ],
  },
  {
    company: 'Green Marmot',
    role: 'Data Analyst & Web Developer',
    start: 'Jan 2025',
    end: 'Jun 2025',
    bullets: [
      'Built pricing experimentation dashboards pairing revenue, ops, and guest data for weekly decisions.',
      'Automated occupancy forecasting pipeline with Python models and nightly backfills.',
      'Launched internal tooling that trimmed manual spreadsheet work by 12+ hours each month.',
    ],
  },
  {
    company: 'MeetOn',
    role: 'Mobile & Web Developer',
    start: 'Dec 2024',
    end: 'Jul 2025',
    bullets: [
      'Delivered cross-platform RSVP flows with real-time updates and map overlays.',
      'Instrumented analytics funnel yielding 30% higher engagement post-launch.',
      'Partnered with design to refine onboarding through weekly user interviews.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Full-Stack Developer',
    start: '2021',
    end: 'Present',
    bullets: [
      'Shipped data-informed MVPs for founders in e-commerce, travel, and creator economy niches.',
      'Integrated AI copilots and automation across CRM, support, and marketing workflows.',
      'Mentored startup teams on product discovery, prototyping, and analytics strategy.',
    ],
  },
];

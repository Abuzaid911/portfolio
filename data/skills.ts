import { type SkillGroup } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages & Frameworks',
    items: [
      { name: 'TypeScript', icon: 'Code2', level: 'Advanced' },
      { name: 'Next.js', icon: 'Layers', level: 'Advanced' },
      { name: 'React Native', icon: 'Smartphone', level: 'Proficient' },
      { name: 'Python', icon: 'Braces', level: 'Advanced' },
      { name: 'Go', icon: 'Binary', level: 'Working' },
    ],
  },
  {
    label: 'AI & Data',
    items: [
      { name: 'OpenAI / Gemini APIs', icon: 'Sparkles', level: 'Advanced' },
      { name: 'LangChain', icon: 'Workflow', level: 'Proficient' },
      { name: 'Pandas / NumPy', icon: 'BarChart3', level: 'Advanced' },
      { name: 'dbt', icon: 'Database', level: 'Working' },
    ],
  },
  {
    label: 'Databases & Cloud',
    items: [
      { name: 'Supabase', icon: 'Cloud', level: 'Advanced' },
      { name: 'PostgreSQL', icon: 'Server', level: 'Proficient' },
      { name: 'PlanetScale', icon: 'Orbit', level: 'Working' },
      { name: 'Vercel', icon: 'Rocket', level: 'Advanced' },
    ],
  },
  {
    label: 'Tools & Workflow',
    items: [
      { name: 'GitHub Actions', icon: 'Workflow', level: 'Advanced' },
      { name: 'Notion', icon: 'Notebook', level: 'Proficient' },
      { name: 'Linear', icon: 'KanbanSquare', level: 'Proficient' },
      { name: 'Figma', icon: 'PenTool', level: 'Proficient' },
    ],
  },
  {
    label: 'Design & Product',
    items: [
      { name: 'Design Systems', icon: 'Component', level: 'Advanced' },
      { name: 'Prototyping', icon: 'Palette', level: 'Proficient' },
      { name: 'User Research', icon: 'Users', level: 'Working' },
    ],
  },
];

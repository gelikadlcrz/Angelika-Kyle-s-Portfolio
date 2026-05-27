export type ProcessStepIconKey = 'map' | 'build' | 'model' | 'polish';

export const processSteps = [
  {
    iconKey: 'map' as const,
    label: 'Map',
    title: 'Map the real workflow',
    text: 'I start by turning the messy problem into users, roles, data states, edge cases, and success paths.',
    artifacts: ['user flow', 'ERD', 'requirements', 'failure cases'],
  },
  {
    iconKey: 'build' as const,
    label: 'Build',
    title: 'Engineer the core system',
    text: 'I connect UI, backend logic, database structures, and API boundaries so the project behaves like a real product.',
    artifacts: ['frontend', 'backend', 'auth/RBAC', 'CRUD'],
  },
  {
    iconKey: 'model' as const,
    label: 'Model',
    title: 'Add intelligence carefully',
    text: 'For AI-heavy work, I focus on clean data flow, measurable model results, and integration that users can actually feel.',
    artifacts: ['features', 'training', 'evaluation', 'inference'],
  },
  {
    iconKey: 'polish' as const,
    label: 'Polish',
    title: 'Make it memorable',
    text: 'I refine motion, visual hierarchy, microinteractions, and technical storytelling until the system feels complete.',
    artifacts: ['animation', 'responsive UI', 'docs', 'demo flow'],
  },
];

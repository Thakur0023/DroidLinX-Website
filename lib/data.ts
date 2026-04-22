import { Project, TeamMember, Event } from './types'

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI Chat Assistant',
    description: 'A neural network-powered chatbot built with GPT integration. Features real-time conversation, context awareness, and multi-language support.',
    image: '/projects/ai-chat.jpg',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    githubUrl: 'https://github.com/droidlinx/ai-chat',
    liveUrl: 'https://ai-chat-demo.droidlinx.com',
  },
  {
    id: 2,
    title: 'Mobile App Framework',
    description: 'Cross-platform mobile development framework optimized for performance. Supports iOS, Android, and Web with a unified codebase.',
    image: '/projects/mobile-framework.jpg',
    technologies: ['Kotlin', 'Swift', 'React Native', 'TypeScript'],
    githubUrl: 'https://github.com/droidlinx/mobile-framework',
  },
  {
    id: 3,
    title: 'Real-time Analytics Dashboard',
    description: 'Enterprise-grade analytics platform with real-time data visualization. Built for handling millions of data points per second.',
    image: '/projects/analytics.jpg',
    technologies: ['Node.js', 'WebSocket', 'D3.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/droidlinx/analytics',
    liveUrl: 'https://analytics.droidlinx.com',
  },
]

export const events: Event[] = [
  {
    id: 1,
    title: 'AlgoArena 3.0 - The ICPC Circuit',
    date: 'Mid August 2026',
    time: 'TBA',
    location: 'Chandigarh University',
    description: 'Participate in the thrilling ICPC-style competitive programming circuit. Compete with top coders and showcase your algorithmic skills.',
    image: '/events/algoarena.jpg',
    registrationUrl: 'https://droidlinx.com/events/algoarena',
  },
  {
    id: 2,
    title: 'BuildX - Code . Compete . Create',
    date: 'November 2026',
    time: 'TBA',
    location: 'Chandigarh University',
    description: 'An intensive hackathon where innovation meets competition. Build, compete, and create solutions that matter.',
    image: '/events/buildx.jpg',
    registrationUrl: 'https://droidlinx.com/events/buildx',
  },
]

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Ankit Thakur',
    role: 'Secretary',
    image: '/team/ankit.jpg',
    bio: '',
  },
  {
    id: 2,
    name: 'Khyat Ghosh',
    role: 'Jt. Secretary',
    image: '/team/khyat.jpg',
    bio: '',
  },
  {
    id: 3,
    name: 'Harsh Garg',
    role: 'Event Management Head',
    image: '/team/harsh.jpg',
    bio: '',
  },
  {
    id: 4,
    name: 'Shreyansh Naman',
    role: 'Media Head',
    image: '/team/shreyansh.jpg',
    bio: '',
  },
  {
    id: 5,
    name: 'Yash Kumar Sisodia',
    role: 'Graphic Designer',
    image: '/team/yash.jpg',
    bio: '',
  },
  {
    id: 6,
    name: 'Anushka Singh',
    role: 'Anchoring Head',
    image: '/team/anushka.jpg',
    bio: '',
  },
  {
    id: 7,
    name: 'Aditya Kapoor',
    role: 'Technical Head',
    image: '/team/aditya.jpg',
    bio: '',
  },
  {
    id: 8,
    name: 'Rohit Kumar',
    role: 'Documentation Lead',
    image: '/team/rohit.jpg',
    bio: '',
  },
]
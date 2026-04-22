// Placeholder for TypeScript types
export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

export interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  bio: string
  linkedinUrl?: string
  githubUrl?: string
}

export interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
  image: string
  registrationUrl?: string
}

// Dummy data will be added here as needed
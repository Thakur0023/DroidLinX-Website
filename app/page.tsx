import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { ProjectsPreview } from '@/components/ProjectsPreview'
import { EventsPreview } from '@/components/EventsPreview'
import { Team } from '@/components/Team'
import { Gallery } from '@/components/Gallery'
import { Contact } from '@/components/Contact'
import { CTA } from '@/components/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProjectsPreview />
      <EventsPreview />
      <Team />
      <Gallery />
      <Contact />
      <CTA />
    </main>
  )
}
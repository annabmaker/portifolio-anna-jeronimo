import { HeroSection } from "./components/pages/home/hero-section"
import { KnownTechs } from "./components/pages/home/known-techs"
import { Highlightedprojects } from "./components/pages/home/highlighted-project"

export default async function Home() {
  return (
    <>
     <HeroSection />
     <KnownTechs />
     <Highlightedprojects />
    </>
  )
}

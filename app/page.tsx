'use client'

import { HeroSection } from "./components/pages/home/hero-section"
import { KnownTechs } from "./components/pages/home/known-techs"
import { Highlightedprojects } from "./components/pages/home/highlighted-project"
import { WorkExperience } from "./components/pages/home/work-experience"
import { BackToTop } from "./components/back-to-top"


export default async function Home(): Promise<JSX.Element> {
  return (
    <>
    <BackToTop />
     <HeroSection />
     <KnownTechs />
     <Highlightedprojects />
     <WorkExperience />
    </>
  )
}

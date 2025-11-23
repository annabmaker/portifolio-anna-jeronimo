'use client'

import { HeroSection } from "./components/pages/home/hero-section"
import { KnownTechs } from "./components/pages/home/known-techs"
import { Highlightedprojects } from "./components/pages/home/highlighted-project"
import { WorkExperience } from "./components/pages/home/work-experience"
import { BackToTop } from "./components/back-to-top"
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query"

const getPageData = async () =>{
   const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
      }
    }
  `
  return fetchHygraphQuery(
    query
  )
}


export default async function Home() {
  const response = await getPageData();

  console.log(response)

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

// criando a sessão de projetos em destaques

import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"
import { ProjectCard } from "./project-card"

export const Highlightedprojects = () =>{
    return(
      <section className="container py-16">
        <SectionTitle subtitle="destaques" title="Projetos realizados"/>
        <HorizontalDivider className= "mb-16" />

        <div>
          <ProjectCard />
        </div>
      </section>  
    )
}

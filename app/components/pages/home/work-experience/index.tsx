
import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experience-item"

export const WorkExperience = () =>{
    return(
        <section className="container py-16 flex gap-10 md:gap-4 lex lf:gap-16 flex-col md:flex-row">
            <div className="max-w-[420px]">
                <SectionTitle subtitle="experiências" title="Experiência Profissional" />
                <p className="text-gray-400 mt-6">
                    Ainda não possuo experiência profissional na área, mas 
                    estou em busca da minha primeira oportunidade para aplicar meus 
                    conhecimentos, crescer como desenvolvedora e contribuir com
                     projetos reais.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <ExperienceItem />
                <ExperienceItem />
            </div>
        </section>
    )
}

import { SectionTitle } from "@/app/components/section-title"
// Remova os imports de ícones daqui, pois eles estão no arquivo de dados

// 1. Importe a lista de tecnologias do arquivo recém-criado
import { knownTechs } from "@/app/lib/techs" 
import { KnownTech } from "./known-techs" 


export const KnownTechs=() => {
    return(
        <section className="container py-16">
            <SectionTitle subtitle="competências" title="Conhecimentos" />
            
            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                {/* 2. Mapeie diretamente a lista importada */}
                {knownTechs.map ((tech, index)=> (
                    <KnownTech 
                       
                        key={tech.name} 
                        tech={tech} 
                    />
                ))}
            </div>
        </section>
    )
}
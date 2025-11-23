//Criação de rota para a pasta project
//Exportação de componente, retornar um fragmento e um componente.

import { SectionTitle } from "@/app/components/section-title"
import { Link } from "@/app/components/link"
import { HiArrowNarrowLeft } from "react-icons/hi"

export const PageIntroduction = () =>{
    return(
        <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
            <SectionTitle
             subtitle="projetos" 
             title="Meus Projetos"
             className="text-center items-center [&>h3]:text-4xl   "   //Controle do seletor CSS, uma força mais rapida para edição de algo especifico,no tailwind é comum ter seletor de textos.
              />
              <div className="flex flex-col items-center">
                <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
                    Aqui você poderá ver alguns dos projetos que eu desenvolvi.
                </p>
                <Link href="/">
                <HiArrowNarrowLeft size={20} />
                Voltar para Home
                </Link>
              </div>
        </section>
    )
}
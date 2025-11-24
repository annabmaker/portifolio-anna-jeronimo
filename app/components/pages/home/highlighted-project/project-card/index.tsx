import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { Link } from "@/app/components/link"
import {  HiArrowNarrowRight } from "react-icons/hi"

export const ProjectCard = () => {
    return(
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
        <div className="w-full h-full">
            <Image
             src = "/images/thumnail-art.png" 
             width={420}
             height={304}
            alt= "Thumbnail do projeto Art"
            className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
            />

            
            </div>
            <div>
               <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                <Image 
                width={20}
                height={20}
                alt=""
                src= "/images/icons/project-title-icon.svg"
                /> Art
                </h3> 
                <p className="text-gray-400 my-6">
                     O site Art é um projeto  com o objetivo de apresentar
                      exibições de arte urbana em um ambiente digital moderno e acessível.
                       Ele conta com uma estrutura simples e responsiva, que facilita a
                        navegação entre as seções de destaque como a galeria de obras, 
                        informações sobre artistas e projetos, além de um espaço dedicado ao 
                        contato e às redes sociais. 
                </p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    <TechBadge name="CSS3" />
                    <TechBadge name="HTML5" />
                    <TechBadge name="Bootstrap" />
                </div>
                <Link href= "/projects/Art">
                Ver projeto
                <HiArrowNarrowRight/>
                </Link>
            </div>
        </div>
    )
}
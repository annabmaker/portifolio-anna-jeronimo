//Array de objetos que vai ter titulo onde irá ficar os projetos
import { SectionTitle } from "@/app/components/section-title"
import Image from "next/image"

const sections = [
    {
        title: 'Art',
        Image: '/images/thumnail-art.png'
    },
     {
        title: 'Blog',
        Image: '/images/thumnail-blog.png'
    }
]

export const ProjectSections = () =>{
    return(
        <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
            {sections.map(section =>(
                <div key={section.title} className="flex flex-col items-center gap-6 md:gap-12" >
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
                        {section.title}
                    </h2>
                    <Image 
                    src={section.Image}
                    width={1080}
                    height={672}
                    className="w-full ascpect-auto rounded-lg object-cover"
                    alt={`Imagem da sessão ${SectionTitle}`} 
                    unoptimized
                    />

</div>
            ))}

        </section>
    )
}

/** Aqui é as sessões, aspect auto não irá modificar da forma que a imagem será vista*/
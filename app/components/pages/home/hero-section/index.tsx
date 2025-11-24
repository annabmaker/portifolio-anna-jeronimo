/** Para usar esse componente precisa ser client */

import { Button } from "@/app/components/button"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import {HiArrowNarrowRight} from 'react-icons/hi';
import {TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp} from 'react-icons/tb'


const MOCK_CONTACTS =[{
    url: 'https://github.com/annabmaker',
    icon: <TbBrandGithub />
},
{
    url: 'https://www.linkedin.com/in/anna-beatriz-campos-5905a7350/',
    icon: <TbBrandLinkedin />
},
{
    url: 'https://wa.me/5511965505222',
    icon: <TbBrandWhatsapp />
}
];

// Lista das tecnologias a serem exibidas nos botões
const TECHS_DISPLAY = [
    'HTML', 
    'CSS', 
    'JavaScript', 
    'TypeScript', 
    'React', 
    'Next.js',
    'Python',
    'MySQL'
];

export const HeroSection = () => {
    const handleContact = () =>{
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({behavior: 'smooth'});
        }
    }
    return(
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10
        py-32 lg:pb-[110px]" >
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="font-mono text-emerald-400">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Anna Beatriz Campos</h2>

                    
                    <p className="text-gray-400 my-6 text-sm sm:text-base"> Sou uma desenvolvedora Fullstack Júnior, 
                        apaixonada por tecnologia e inovação. Estou em busca da minha primeira oportunidade 
                        na área de TI, com grande entusiasmo para contribuir e crescer profissionalmente.
                        Tenho como objetivo criar interfaces de usuário elegantes, intuitivas e funcionais, 
                        sempre focando na melhor experiência para quem utiliza. Além do front-end,
                        também gosto do universo do back-end, especialmente em tarefas como 
                        integração e conexão com bancos de dados.
                    </p>
                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]"> 
                        {TECHS_DISPLAY.map ((techName)=> (
                            <TechBadge 
                                key={techName} 
                                name={techName}
                            />
                        ))}
                    </div>
                    
                    <div className="mt-6 flex sm:items-center sm:gap-5 flex-col sm:flex-row"> 
                        <Button className="w-max shadow-button" onClick={handleContact}>
                            Entre em contato!
                            <HiArrowNarrowRight size={18} />
                        </Button>
                        <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
                        {MOCK_CONTACTS.map((contact, index)=>(
                            <a 
                            href={contact.url}
                            key={`contact-${index}`}
                            target="_blank"
                            className="hover:text-gray-100 transition-colors"
                            >
                                    {contact.icon}
                            </a>
                        ))}
                        </div>
                    </div>
                </div>
                    <Image
                    src="/images/profile-pic.png"
                    alt="Foto de perfil da Anna Beatriz Campos"
                    width={420}
                    height={404}
                    className="w-[380px] h-[300px] lg:w-[420px] lg:h[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
                    />

            </div>
        </section>
    )
}
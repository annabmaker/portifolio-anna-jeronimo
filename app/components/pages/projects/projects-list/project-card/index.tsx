import Image from "next/image"

export const ProjectCard = () =>{
    return(
        <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
            <div className="w-full h-48 overflow-hidden">
               <Image 
               width={380}
               height={200}
               src="/images/thumnail-art.png"
               alt="Thumbnail Art"
               unoptimized
               className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all" 
               //Para algo mudar dentro da imagem mesmo fazendo o hover, tem uma funcionalidade no tailwind group que permite editarmos apenas a imagem e para isso adicionamos o "group" na class pai
               /> 
            </div>
            <div className="flex-1 flex flex-col">
            <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">Art</strong>
            <p className="mt-2 text-gray-400 line-clamp-4">O site Art é um projeto  com o objetivo de apresentar
                      exibições de arte urbana em um ambiente digital moderno e acessível.
                       Ele conta com uma estrutura simples e responsiva, que facilita a
                        navegação entre as seções de destaque como a galeria de obras. </p>
                        <span className="text-gray-300 text-sm font-medium block mt-auto truncate"> PHP, HTML, CSS</span>
           </div>
        </div>
    )
}
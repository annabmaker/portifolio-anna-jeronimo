
import Link from "next/link";
export function Header () {
    return(
       <header className = "flex px-2 py-4 bg-zinc-900 text-white">
        <div className = "flex items-center justify-between w-full mx-auto max-w-7x1">
            <div> 
              Anna Beatriz Campos Jeronimo
            </div>
            <nav>
                <ul className = "flex items-center justify-center gap-2">
                    <li>
                    <Link href='/'>
                        Home
                    </Link>
                    </li>
                      <li>
                    <Link href='/Contato'>
                          Contatos
                    </Link>
                        </li>
                     <li>
                    <Link href="/">
                       Quem eu sou 
               
                    </Link>
                        </li>
                    </ul>
            </nav>
        </div>
       </header>
    )
}

      
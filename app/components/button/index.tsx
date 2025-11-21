import { cn } from "@/app/lib/utils"
import { ButtonHTMLAttributes } from "react"
type ButtonPropos = ButtonHTMLAttributes<HTMLButtonElement>
/* Aqui é a parte da estilização do botão, biblioteca HTML baixada utilizando  o utilitario
cn, caso envie uma ClassName constumizada quero que seja feita pelo botão tambem.*/ 
export const Button = ({children, className, ...props}:ButtonPropos) => {
    return(
        <button
        className={cn(
            'bg-emerald-600 py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 hover:bg-emerald-500 transition-all disabled:opacity-50',
            className
        )}
        {...props}
        >

            {children}
        </button>
    )
}
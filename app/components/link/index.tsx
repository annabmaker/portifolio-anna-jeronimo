//Importação de link para ser utilizado no botão do projectcard
//Para o Type script saber qual link utilizar irei criar um type 
// ... é para destruturar o projeto menos no classname
//Criação de link
//Propriedade children

import NextLink from 'next/link';
import { ComponentProps } from 'react';
import { cn } from '@/app/lib/utils';

type LinkPropos = ComponentProps<typeof NextLink>;

export const Link = ({className, children, ...props}: LinkPropos) =>{
    return(
        <NextLink
         className={cn(
            'flex items-center gap-2 text-gray-300 text-sm hover:text-emerald-500 transition-colors',
            className
        )} {...props}
        >
        {children}
        </NextLink>
    )
}
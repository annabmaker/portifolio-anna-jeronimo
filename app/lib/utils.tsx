import {ClassValue, clsx} from 'clsx';
import {twMerge} from 'tailwind-merge'

/* Serve para juntar biblioteca no tailwind em linhas um utilitario bem utilizado
classes dinamicas no tailwind*/ 

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
}
import { cn } from "@/app/lib/utils";
import Link from "next/link";
import {usePathname} from 'next/navigation';
import { use } from "react";

type NavItemProps = {
    label : string
    href: string
}

export const NavItem = ({ label, href} : NavItemProps) => {
    const pathname = usePathname();

    const isActive = pathname === href;
return (
    <Link href={href} className={cn(
        "text-gray-400 flex items-center gap-2 font-medium font-mono" ,
        isActive && 'text-gray-50'
    )}>
        <span className="text-emerald-400">#</span>
        {label}
    </Link>
)
}

//Aqui é para estilização da # e adicionar o Link.
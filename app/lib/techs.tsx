import { 
    TbBrandNextjs, 
    TbBrandHtml5, 
    TbBrandCss3, 
    TbBrandJavascript, 
    TbBrandTypescript, 
    TbBrandMysql,
    TbBrandPhp,
    TbBrandPython,
} from "react-icons/tb"

// Se você estiver usando TypeScript, é bom definir a interface 
export type KnownTech = {
    icon: JSX.Element; // O ícone é um elemento JSX
    name: string;
    startDate: string; // Formato 'YYYY-MM-DD'
}

// O array que será exportado e usado no seu componente
export const knownTechs: KnownTech[] = [
    {
        icon: <TbBrandNextjs />,
        name: 'Next.js',
        startDate: '2025-10-04' // Coloque a data real de início aqui
    },
    {
        icon: <TbBrandHtml5 />,
        name: 'HTML',
        startDate: '2024-08-04'
    },
    {
        icon: <TbBrandCss3 />,
        name: 'CSS',
        startDate: '2024-08-04'
    },
    {
        icon: <TbBrandJavascript />,
        name: 'JavaScript',
        startDate: '2025-08-04'
    },
    {
        icon: <TbBrandTypescript />,
        name: 'TypeScript',
        startDate: '2025-10-04'
    },
    {
        icon: <TbBrandMysql />,
        name: 'MySQL',
        startDate: '2024-08-04'
    },
    {
        icon: <TbBrandPhp />,
        name: 'PHP',
        startDate: '2024-08-04'
    },
    {
        icon: <TbBrandPython />,
        name: 'Python',
        startDate: '2025-08-04'
    }
    // Adicione a oitava tecnologia aqui para preencher o grid!
];
import { FaJsSquare } from 'react-icons/fa'
import { FaAngular, FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa6'
import { PiFileSqlFill } from 'react-icons/pi'
import { RiNextjsFill } from 'react-icons/ri'
import { SiSpringboot } from 'react-icons/si'
import SkillCard from '../ui/SkillCard'

const Skills = ({
    skillsRef,
}: {
    skillsRef: React.RefObject<HTMLDivElement | null>
}) => {
    return (
        <div ref={skillsRef}>
            <div className="flex items-center mt-30">
                <h2 className="mr-10 text-4xl font-bold text-gray-300">
                    <span className="text-green-500">02.</span> Habilidades
                </h2>
                <div className="flex-grow h-px bg-gray-500"></div>
            </div>
            <div className="grid grid-cols-3 items-center">
                <SkillCard
                    Icon={FaHtml5}
                    icon_color="text-orange-500"
                    label="HTML5"
                    title="Fundamentos Web"
                    description="Comencé aprendiendo la estructura básica de las páginas web con HTML5."
                />
                <SkillCard
                    Icon={FaCss3Alt}
                    icon_color="text-sky-500"
                    label="CSS3"
                    title="Estilos y Diseño"
                    description="Aprendí a dar estilos y crear diseños atractivos y responsivos con CSS3."
                />
                <SkillCard
                    Icon={FaJsSquare}
                    icon_color="text-yellow-500"
                    label="JavaScript"
                    title="Interactividad"
                    description="Incorporé lógica e interactividad a las páginas web usando JavaScript."
                />
                <SkillCard
                    Icon={FaReact}
                    icon_color="text-cyan-500"
                    label="React"
                    title="Componentización"
                    description="Aprendí a construir interfaces modernas y reutilizables con React."
                />
                <SkillCard
                    Icon={RiNextjsFill}
                    icon_color="text-gray-500"
                    label="Next.js"
                    title="SSR y Routing"
                    description="Descubrí el poder del renderizado del lado del servidor y el enrutamiento con Next.js."
                />
                <SkillCard
                    Icon={FaAngular}
                    icon_color="text-red-500"
                    label="Angular"
                    title="Frameworks Avanzados"
                    description="Profundicé en el desarrollo de aplicaciones escalables con Angular."
                />
                <SkillCard
                    Icon={SiSpringboot}
                    icon_color="text-lime-500"
                    label="Spring Boot"
                    title="Backend"
                    description="Aprendí a crear APIs robustas y seguras con Spring Boot."
                />
                <SkillCard
                    Icon={PiFileSqlFill}
                    icon_color="text-blue-500"
                    label="SQL"
                    title="Bases de Datos"
                    description="Finalmente, aprendí a gestionar y consultar bases de datos con SQL."
                />
            </div>
        </div>
    )
}

export default Skills

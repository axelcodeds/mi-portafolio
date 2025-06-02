import { RefObject } from 'react'

const NavBar = ({
    scrollToSection,
    aboutRef,
    skillsRef,
    projectsRef,
}: {
    scrollToSection: (section: RefObject<HTMLDivElement | null>) => void
    aboutRef: RefObject<HTMLDivElement | null>
    skillsRef: RefObject<HTMLDivElement | null>
    projectsRef: RefObject<HTMLDivElement | null>
}) => {
    const linkStyle: string =
        'text-gray-300 hover:text-gray-100 cursor-pointer transition-colors duration-300 *:text-green-500'
    return (
        <nav className="flex justify-between items-center p-4">
            <ul className="flex space-x-4">
                <li
                    onClick={() => scrollToSection(aboutRef)}
                    className={linkStyle}
                >
                    <span>01.</span> Sobre mí
                </li>
                <li
                    onClick={() => scrollToSection(skillsRef)}
                    className={linkStyle}
                >
                    <span>02.</span> Habilidades
                </li>
                <li
                    onClick={() => scrollToSection(projectsRef)}
                    className={linkStyle}
                >
                    <span>03.</span> Proyectos
                </li>
            </ul>
        </nav>
    )
}

export default NavBar

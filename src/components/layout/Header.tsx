import { RefObject } from 'react'
import NavBar from '../ui/NavBar'

const Header = ({
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
    return (
        <div className="fixed bg-gray-900 top-0 left-0 right-0 z-50 flex justify-between items-center p-4">
            <div className="relative w-10 h-10 m-3">
                <div className="absolute inset-0 transform rotate-45 border-2 border-green-500"></div>
                <div className="absolute inset-0 flex justify-center items-center transform rotate-45">
                    <div className="text-green-500 text-3xl -rotate-45">A</div>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <NavBar
                    scrollToSection={scrollToSection}
                    aboutRef={aboutRef}
                    skillsRef={skillsRef}
                    projectsRef={projectsRef}
                />
                <div className="p-1 pt-2 px-5 text-green-500 border-2 border-green-500 rounded-sm hover:bg-green-500 hover:text-gray-900 transition-colors duration-300 cursor-pointer">
                    Currículum
                </div>
            </div>
        </div>
    )
}

export default Header

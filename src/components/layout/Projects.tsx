import React from 'react'
import ProjectCard from '../ui/ProjectCard'

const Projects = (
    props: React.PropsWithChildren<{
        projectsRef: React.RefObject<HTMLDivElement | null>
    }>
) => {
    return (
        <section
            ref={props.projectsRef}
            className="min-h-screen flex flex-col justify-center items-start gap-8 px-8 py-16 pt-30"
        >
            <div className="flex items-center mb-10">
                <h2 className="mr-10 text-4xl font-bold text-gray-300">
                    <span className="text-green-500">03.</span> Proyectos
                </h2>
                <div className="flex-grow h-px bg-gray-500"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {/* Ejemplo de proyecto */}
                <ProjectCard
                    image="/01.png"
                    title="Mi Proyecto Destacado"
                    description="Una aplicación web moderna que resuelve problemas reales utilizando tecnologías de vanguardia y buenas prácticas de desarrollo."
                    githubUrl="https://github.com/tuusuario/mi-proyecto"
                    demoUrl="https://mi-proyecto-demo.com"
                />
                <ProjectCard
                    image="/01.png"
                    title="Mi Proyecto Destacado"
                    description="Una aplicación web moderna que resuelve problemas reales utilizando tecnologías de vanguardia y buenas prácticas de desarrollo."
                    githubUrl="https://github.com/tuusuario/mi-proyecto"
                    demoUrl="https://mi-proyecto-demo.com"
                />
                <ProjectCard
                    image="/01.png"
                    title="Mi Proyecto Destacado"
                    description="Una aplicación web moderna que resuelve problemas reales utilizando tecnologías de vanguardia y buenas prácticas de desarrollo."
                    githubUrl="https://github.com/tuusuario/mi-proyecto"
                    demoUrl="https://mi-proyecto-demo.com"
                />
                {/* Puedes agregar más proyectos aquí */}
            </div>
        </section>
    )
}

export default Projects

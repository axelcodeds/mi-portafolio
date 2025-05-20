import Image from 'next/image'

type ProjectCardProps = {
    title: string
    description: string
    image: string
    githubUrl: string
    demoUrl?: string
    imageAlt?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    image,
    githubUrl,
    demoUrl,
    imageAlt = 'Project image',
}) => {
    return (
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col gap-4">
            <Image
                src={image}
                alt={imageAlt}
                width={400}
                height={192}
                className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h3 className="text-2xl font-semibold text-gray-100">{title}</h3>
            <p className="text-gray-400">{description}</p>
            <div className="flex gap-4">
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline"
                >
                    Ver código en GitHub
                </a>
                {demoUrl && (
                    <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        Ver demo
                    </a>
                )}
            </div>
        </div>
    )
}

export default ProjectCard

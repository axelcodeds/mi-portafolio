import TypeWriter from '../ui/TypeWriter'

const Banner = () => {
    return (
        <div className="mt-20">
            <div className="flex flex-col gap-4">
                <p className="text-lg text-green-500">Hola, mi nombre es</p>
                <h1 className="text-7xl font-bold text-gray-100">
                    Axel Diego.
                </h1>
                <div className="text-6xl font-bold text-gray-500">
                    <TypeWriter text="Desarrollador Web" />
                </div>
                <p className="text-lg text-gray-400 w-3/5">
                    Soy un desarrollador web con experiencia en la creación de
                    aplicaciones web modernas y eficientes. Me apasiona la
                    tecnología y siempre estoy buscando aprender y mejorar mis
                    habilidades.
                </p>
            </div>
        </div>
    )
}

export default Banner

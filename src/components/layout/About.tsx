'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div>
            <div className="flex items-center mb-10">
                <h2 className="mr-10 text-4xl font-bold text-gray-300">
                    <span className="text-green-500">01.</span> Sobre mí
                </h2>
                <div className="flex-grow h-px bg-gray-500"></div>
            </div>
            <div className="flex gap-10">
                <div className="text-gray-400 text-lg bg-gray-950 p-5 rounded-lg shadow-2xl">
                    <p>{'/*'}</p>
                    <p className="mb-5">
                        Soy un{' '}
                        <span className="text-green-500">
                            desarrollador full-stack
                        </span>{' '}
                        con experiencia en construir aplicaciones{' '}
                        <span className="text-green-500">completas</span>, desde
                        el <span className="text-green-500">frontend</span>{' '}
                        hasta el <span className="text-green-500">backend</span>
                        . Llevo aprendiendo y perfeccionando mis habilidades
                        desde <span className="text-green-500">2020</span>,
                        siempre buscando nuevos retos y oportunidades para
                        crecer.
                    </p>
                    <p className="mb-5">
                        Me gusta trabajar en proyectos{' '}
                        <span className="text-green-500">desafiantes</span> que
                        me permitan crecer profesionalmente y contribuir al{' '}
                        <span className="text-green-500">éxito</span> del
                        equipo.
                    </p>
                    <p className="mb-5">
                        En mi tiempo libre, disfruto de la{' '}
                        <span className="text-green-500">lectura</span>, el{' '}
                        <span className="text-green-500">cine</span> y la
                        <span className="text-green-500"> música</span>. Siempre
                        estoy buscando nuevas formas de{' '}
                        <span className="text-green-500">inspirarme</span> y
                        mantenerme{' '}
                        <span className="text-green-500">motivado</span>.
                    </p>
                    <p className="text-right">{'*/'}</p>
                </div>
                <div className="">
                    <div className="relative h-min group shadow-2xl">
                        <motion.div
                            className=" h-min group shadow-2xl"
                            animate={{
                                y: [0, 10, 0], // Movimiento: arriba, abajo, centro
                            }}
                            transition={{
                                duration: 3, // Duración de cada ciclo
                                repeat: Infinity, // Repetir infinitamente
                                ease: 'easeInOut', // Suavizar el movimiento
                                delay: 0.5, // Retraso antes de comenzar el movimiento
                            }}
                        >
                            <div className="absolute h-[265px] inset-0 translate-x-2 translate-y-2 border-2 border-green-500 rounded-lg transition-colors duration-300 group-hover:bg-green-500"></div>
                        </motion.div>
                        <motion.div
                            animate={{
                                y: [0, 10, 0], // Movimiento: arriba, abajo, centro
                            }}
                            transition={{
                                duration: 3, // Duración de cada ciclo
                                repeat: Infinity, // Repetir infinitamente
                                ease: 'easeInOut', // Suavizar el movimiento
                            }}
                        >
                            <Image
                                src="/avatar.jpg"
                                alt="Descripción de la imagen"
                                width={1300}
                                height={1300}
                                className="relative rounded-lg shadow-2xl transition-transform duration-300 group-hover:brightness-90 group-hover:filter group-hover:sepia group-hover:hue-rotate-30"
                            />
                        </motion.div>
                    </div>
                    <div className="mt-10"></div>
                    <p className="text-2xl font-mono text-gray-500">
                        {'<'}
                        <span className="text-green-500">h1</span>
                        {'>'}
                    </p>
                    <p className="text-center text-3xl font-bold text-gray-300 my-5">
                        Axel Diego
                    </p>
                    <p className="text-right text-2xl font-mono text-gray-500">
                        {'</'}
                        <span className="text-green-500">h1</span>
                        {'>'}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About

'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

interface TypeWriterProps {
    text: string
    speed?: number // Velocidad por letra (ms)
    delay?: number // Tiempo antes de reiniciar (ms)
}

const TypeWriter = ({
    text,
    speed = 50,
    delay = 10000, // 10 segundos
}: TypeWriterProps) => {
    const [displayedText, setDisplayedText] = useState('')
    const controls = useAnimation()

    // Efecto para escribir/borrar el texto
    useEffect(() => {
        let timeout: NodeJS.Timeout

        const typeText = () => {
            if (displayedText.length < text.length) {
                // Escribe una letra adicional
                timeout = setTimeout(() => {
                    setDisplayedText(text.slice(0, displayedText.length + 1))
                }, speed)
            } else {
                // Espera `delay` ms y reinicia
                timeout = setTimeout(() => {
                    setDisplayedText('')
                }, delay)
            }
        }

        typeText()

        return () => clearTimeout(timeout)
    }, [displayedText, text, speed, delay])

    // Efecto para el cursor (parpadeo infinito)
    useEffect(() => {
        controls.start({
            opacity: [0, 1, 0],
            transition: { repeat: Infinity, duration: 0.8 },
        })
    }, [controls])

    return (
        <div className="inline-flex items-center">
            <span className="whitespace-nowrap font-mono">{displayedText}</span>
            {displayedText.length < text.length && (
                <motion.span
                    animate={controls}
                    className="ml-1 h-6 w-1 bg-black"
                />
            )}
        </div>
    )
}

export default TypeWriter

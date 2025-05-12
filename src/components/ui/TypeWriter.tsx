'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

interface TypeWriterProps {
    text: string
    speed?: number
    delay?: number
    startFrom?: number
}

const TypeWriter = ({
    text,
    speed = 100,
    delay = 5000,
    startFrom = 1,
}: TypeWriterProps) => {
    const [displayedText, setDisplayedText] = useState(text.slice(0, startFrom))
    const controls = useAnimation()

    // Efecto de escritura
    useEffect(() => {
        let timeout: NodeJS.Timeout
        let isMounted = true

        const animate = async () => {
            // Animación de escritura
            while (isMounted && displayedText.length < text.length) {
                await new Promise((resolve) => {
                    timeout = setTimeout(() => {
                        if (isMounted) {
                            setDisplayedText((prev) => prev + text[prev.length])
                        }
                        resolve(null)
                    }, speed)
                })
            }

            // Espera antes de reiniciar
            if (isMounted) {
                timeout = setTimeout(() => {
                    setDisplayedText(text.slice(0, startFrom))
                }, delay)
            }
        }

        animate()

        return () => {
            isMounted = false
            clearTimeout(timeout)
        }
    }, [displayedText, text, speed, delay, startFrom])

    // Efecto de cursor (siempre activo)
    useEffect(() => {
        controls.start({
            opacity: [0, 1, 0],
            transition: { repeat: Infinity, duration: 0.8 },
        })
    }, [controls])

    return (
        <div className="inline-flex items-center">
            <span className="whitespace-nowrap font-mono">{displayedText}</span>
            <motion.span
                animate={controls}
                className="ml-1 h-10 w-1 bg-gray-300 inline-block"
            />
        </div>
    )
}

export default TypeWriter

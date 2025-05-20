import React from 'react'
import { IconType } from 'react-icons'

interface SkillCardProps {
    Icon?: IconType
    icon_color?: string
    label: string
    title: string
    description: string
}

const SkillCard = ({
    Icon,
    icon_color,
    label,
    title,
    description,
}: SkillCardProps) => {
    return (
        <div className="flex items-center mb-8 relative">
            <div className="flex flex-col items-center">
                {Icon && (
                    <Icon
                        className={
                            'text-5xl mb-2 ' +
                            (icon_color ? icon_color : 'text-green-500')
                        }
                    />
                )}
                <span className="text-sm text-gray-300 font-semibold">
                    {label}
                </span>
            </div>
            <div className="ml-6">
                <h3 className="text-lg font-bold text-green-400">{title}</h3>
                <p className="text-gray-400 text-sm max-w-xs">{description}</p>
            </div>
        </div>
    )
}

export default SkillCard

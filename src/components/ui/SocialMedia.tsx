import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'

const SocialMedia = () => {
    return (
        <ul className="text-2xl *:text-gray-400 *:hover:text-gray-600 flex flex-col gap-6 items-center w-min">
            <li>
                <FiGithub />
            </li>
            <li>
                <FiLinkedin />
            </li>
            <li>
                <FiInstagram />
            </li>
            <li className="h-30 w-0.5 bg-gray-400"></li>
        </ul>
    )
}

export default SocialMedia

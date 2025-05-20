import About from '@/components/layout/About'
import Banner from '@/components/layout/Banner'
import Skills from '@/components/layout/Skills'
import Header from '@/components/layout/Header'
import SocialMedia from '@/components/ui/SocialMedia'
import Projects from '@/components/layout/Projects'

export default function Home() {
    return (
        <>
            <Header />
            <div className="fixed bottom-0 left-0 pl-10">
                <SocialMedia />
            </div>
            <div className="px-40 xl:px-60 py-10 flex flex-col gap-50">
                <Banner />
                <About />
                <Skills />
                <Projects />
            </div>
            <div className="fixed bottom-0 right-0 pr-10">
                <ul className="text-xl *:text-gray-400 *:hover:text-gray-600 flex flex-col gap-6 items-center w-min">
                    <li className="[writing-mode:vertical-rl]">Axel Diego</li>
                    <li className="h-30 w-0.5 bg-gray-400"></li>
                </ul>
            </div>
        </>
    )
}

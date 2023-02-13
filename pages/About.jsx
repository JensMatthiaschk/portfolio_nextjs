import { ThemeContext } from "../components/ThemeContext.jsx"
import { useContext, useEffect } from "react"
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import i18n from '../services/i18n.js' //initializing i18n

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale), [
                'about', 'projects', 'contact'
            ]),
            // Will be passed to the page component as props
        },
    }
}

export default function About(props) {

    const { currentTheme, setSectionActive } = useContext(ThemeContext)
    const { ref: aboutRef, inView: aboutIsVisible } = useInView({ threshold: 0.5 });
    const { t } = useTranslation();



    useEffect(() => {
        if (aboutIsVisible === true) setSectionActive(t('about:section_title'))
    }, [aboutIsVisible])

    return (
        <>
            <section id={t('about:section_title')} ref={aboutRef}
                className="flex h-fit sm:h-screen lg:ml-36 lg:pl-4 sm:ml-20 px-8 mb-20 flex-col justify-center overflow-hidden"
            >
                <h2 className="font-['Montserrat'] md:text-3xl sm:text-2xl text-xl sm:mt-20 mt-2">{t("about:intro")}</h2>
                <h1 className="font-['Montserrat'] md:text-8xl sm:text-5xl text-4xl font-extrabold w-auto" translate="no">Jens Matthiaschk</h1>
                <h2 className="font-['Montserrat'] md:text-6xl sm:text-4xl text-2xl md:mt-5 mt-2">{t("about:profession")}</h2>
                <p className="text-sm sm:text-base my-8 font-['Montserrat'] font-medium lg:w-[80%] w-[90%]">{t("about:description")}</p>
                <div className="md:mt-10 sm:mt-8 mt-5 mb-20 flex sm:flex-row flex-col gap-y-3">
                    <Link to={t('projects:projects.section_title')} spy={true} smooth={true} offset={0} duration={500}>
                        <button className={currentTheme === 'dark' ? "badge p-4 sm:badge-lg badge-md sm:p-6 sm:text-2xl font-semibold badge-outline btn-dark hover:drop-shadow-[0_0_10px_var(--dm-third-color)] mr-3 transform-gpu" : "badge p-4 sm:badge-lg badge-md sm:p-6 sm:text-2xl font-semibold badge-outline btn-light hover:drop-shadow-[0_0_10px_var(--lm-third-color)] mr-3 transform-gpu"}>
                            <p className="mr-2">{t('about:button_projects')}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </button>
                    </Link>
                    <Link to={t('contact:section_title')} spy={true} smooth={true} offset={0} duration={500}>
                        <button className={currentTheme === 'dark' ? "badge p-4 sm:badge-lg badge-md sm:p-6 sm:text-2xl font-semibold badge-outline btn-dark hover:drop-shadow-[0_0_10px_var(--dm-third-color)] transform-gpu" : "badge p-4 sm:badge-lg badge-md sm:p-6 sm:text-2xl font-semibold badge-outline btn-light hover:drop-shadow-[0_0_10px_var(--lm-third-color)] transform-gpu"}>
                            <p className="mr-2">{t('about:button_contact')}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </section>
        </>
    )
}
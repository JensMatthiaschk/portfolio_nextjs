import { ThemeContext } from "../components/ThemeContext.jsx";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from 'next-i18next';
import Skills from "../components/Skills.jsx";
import LearnSection from "../components/LearnSection.jsx";
import WorkSection from "../components/WorkSection.jsx";


export default function Experience({ setOtherProjectsVisible }) {

    const { currentTheme, setSectionActive } = useContext(ThemeContext);
    const { ref: experienceRef, inView: experienceIsVisible } = useInView({ threshold: 0.15, triggerOnce: true });
    const { t } = useTranslation();



    useEffect(() => {
        if (experienceIsVisible === true) setSectionActive(t('experience:section_title'))
    }, [experienceIsVisible])


    return (
        <>
            <section id={t('experience:section_title')} ref={experienceRef} className="flex flex-col h-fit items-center mb-40 md:mb-60 sm:mx-16 mx-8">
                <div className={(currentTheme === 'dark' ? "bg-[var(--dm-third-color)] text-[var(--dm-main-bg-color)]" : "bg-[var(--lm-third-color)] text-[var(--lm-main-bg-color)]")
                    + " h-fit w-screen -skew-y-12 overflow-hidden flex flex-col justify-center font-black font-Montserrat uppercase"}>
                    <div className="flex marquee__content">
                        {[...Array(15)].map((e, i) =>
                            <h2 key={`header-ex-${i}`} className="marquee__rtl text-lg md:text-xl xl:text-2xl 2xl:text-3xl -my-2">{t('experience:section_title')}</h2>
                        )}
                    </div>
                    <div className="flex marquee__content">
                        {[...Array(10)].map((e, i) =>
                            <h2 key={`header-ex-${i}`} className="marquee__ltr text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl -my-2">{t('experience:section_title')}</h2>
                        )}
                    </div>
                    <div className="flex marquee__content">
                        {[...Array(15)].map((e, i) =>
                            <h2 key={`header-ex-${i}`} className="marquee__ltr___slow text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl -my-2">{t('experience:section_title')}</h2>
                        )}
                    </div>
                    <div className="flex marquee__content">
                        {[...Array(10)].map((e, i) =>
                            <h2 key={`header-ex-${i}`} className="marquee__rtl text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl -m-2 lg:-my-4">{t('experience:section_title')}</h2>
                        )}
                    </div>
                </div>
                <div className="transition-all">
                    <Skills />
                    <WorkSection />
                    <LearnSection setOtherProjectsVisible={setOtherProjectsVisible} />
                </div>
            </section>
        </>
    )
}
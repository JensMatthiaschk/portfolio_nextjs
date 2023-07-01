import { ThemeContext } from "../components/ThemeContext.jsx";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from 'next-i18next';
import MobileCards from "./MobileCards.jsx";
import DesktopCards from "./DesktopCards.jsx";

export default function WorkSection() {

    const { currentTheme, currentScreenWidth } = useContext(ThemeContext);
    const { ref: professionalExperienceRef, inView: professionalExperienceIsVisible } = useInView({ threshold: 0, triggerOnce: true });
    const { t } = useTranslation();
    const professionalExperience = t('experience:content.professionalExperience', { returnObjects: true }) || [];


    return (
        <div id='Profession' ref={professionalExperienceRef} className={(professionalExperienceIsVisible ? "fade-in" : "invisible")
            + " flex flex-col text-center mx-auto lg:w-[80%] mt-16 sm:mt-40 max-w-[1600px]"}>
            <h3 className={(currentTheme === 'dark' ? "text-[var(--dm-third-color)]" : "text-[var(--lm-third-color)]")
                + " text-5xl xl:text-7xl font-extrabold font-Montserrat mb-10 lowercase"}>{professionalExperience.title}</h3>
            {professionalExperience?.content?.map((e, i) =>

                <>
                    <MobileCards key={`ex-mobile-${i}`} e={e} i={i} currentScreenWidth={currentScreenWidth} currentTheme={currentTheme} professionalExperience={professionalExperience} />
                    <DesktopCards key={`ex-desktop-${i}`} e={e} i={i} currentScreenWidth={currentScreenWidth} currentTheme={currentTheme} professionalExperience={professionalExperience} />
                </>

            )
            }
        </div >
    )
}

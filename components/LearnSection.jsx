import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.jsx";
import MobileCards from './MobileCards.jsx';
import DesktopCards from './DesktopCards.jsx';

export default function LearnSection({ setOtherProjectsVisible }) {

    const { ref: educationTrainingRef, inView: educationTrainingIsVisible } = useInView({ threshold: 0, triggerOnce: true });
    const { t } = useTranslation();
    const educationAndTraining = t('experience:content.educationAndTraining', { returnObjects: true }) || [];
    const { currentTheme, currentScreenWidth } = useContext(ThemeContext);

    return (
        <div id='Education' ref={educationTrainingRef}
            className={(educationTrainingIsVisible ? "fade-in" : "invisible")
                + " flex flex-col text-center mx-auto lg:w-[80%] mt-16 sm:mt-40 max-w-[1400px]"} >
            <h3 className={(currentTheme === 'dark' ? "text-[var(--dm-third-color)]" : "text-[var(--lm-third-color)]")
                + " text-5xl xl:text-7xl font-extrabold font-Montserrat mb-10 lowercase"}>
                {educationAndTraining.title}</h3>
            {educationAndTraining.content?.map((e, i) =>
                <>
                    <MobileCards key={`ed-mobile-${i}`} e={e} i={i} currentScreenWidth={currentScreenWidth} currentTheme={currentTheme} educationAndTraining={educationAndTraining} setOtherProjectsVisible={setOtherProjectsVisible} />
                    <DesktopCards key={`ed-desktop-${i}`} e={e} i={i} currentScreenWidth={currentScreenWidth} currentTheme={currentTheme} educationAndTraining={educationAndTraining} setOtherProjectsVisible={setOtherProjectsVisible} />
                </>

            )}
            <div>
            </div>
        </div >

    )
}

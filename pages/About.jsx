import { ThemeContext } from "../components/ThemeContext.jsx"
import { useContext, useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import { useTranslation } from 'next-i18next';
import NameAnimation from "../components/NameAnimation.jsx";

const carouselTextEN = [
    { text: "[Web Developer]", colorLight: "#c81501", colorDark: "#FD1C03" },
    { text: "{Programmer}", colorLight: "#d08701", colorDark: "#ffa500" },
    { text: "*/Fullstack Developer/*", colorLight: "#16a9e3", colorDark: "#16E2F5" },
    { text: "//Coder", colorLight: "#249524", colorDark: "#32CD32" },
]

const carouselTextDE = [
    { text: "[Webentwickler]", colorDark: "#FD1C03", colorLight: "#c81501" },
    { text: "{Programmierer}", colorDark: "#ffa500", colorLight: "#d08701" },
    { text: "*/Fullstack Entwickler/*", colorDark: "#16E2F5", colorLight: "#16a9e3" },
    { text: "//Coder", colorDark: "#32CD32", colorLight: "#249524" },
]

async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
        await waitForMs(delay);
        eleRef.append(letters[i]);
        i++
    }
    return;
}

async function deleteSentence(eleRef) {
    const sentence = eleRef.innerHTML;
    const letters = sentence.split("");
    let i = 0;
    while (letters.length > 0) {
        await waitForMs(100);
        letters.pop();
        eleRef.innerHTML = letters.join("");
    }
}

async function carousel(eleRef) {
    var i = 0;
    while (true) {
        const lng = localStorage.getItem('i18nextLng');
        const theme = localStorage.getItem('theme');
        const carouselList = lng === 'en' ? carouselTextEN : carouselTextDE;
        updateFontColor(eleRef, theme === 'dark' ? carouselList[i].colorDark : carouselList[i].colorLight);
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++
        if (i >= carouselList.length) { i = 0; }
    }
}

function updateFontColor(eleRef, color) {
    eleRef.style.color = color
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}


export default function About(props) {

    const { currentTheme, setSectionActive, counterDark, counterLight } = useContext(ThemeContext)
    const { ref: aboutRef, inView: aboutIsVisible } = useInView({ threshold: 0 });
    const profRef = useRef(null);
    const [mounted, setMounted] = useState(false);
    const [aboutVisitedDark, setAboutVisitedDark] = useState(0);
    const [aboutVisitedLight, setAboutVisitedLight] = useState(0);
    const { t, i18n } = useTranslation();
    const lng = i18n.language;


    useEffect(() => {
        const sectionIdentifyer = t('about:section_title')
        if (aboutIsVisible === true) setSectionActive(sectionIdentifyer)
        if (currentTheme === 'dark' && counterDark >= 1) {
            setAboutVisitedDark(1)
        }
        else if (currentTheme === 'light' && counterLight >= 1) {
            setAboutVisitedLight(1)
        }
    }, [aboutIsVisible])

    useEffect(() => {
        if (!mounted) {
            carousel(profRef.current)
        }
        setMounted(true)
        return () => { }
    }, []);


    return (
        <>
            <section id={t('about:section_title')} ref={aboutRef}
                className={`font-Sarala flex h-fit sm:h-screen lg:w-[70%] w-[80%] mx-auto pt-6 sm:pt-12 z-0 flex-col justify-center items-start overflow-hidden max-w-[1600px] animate-fade-in select-none cursor-default`}
            >
                <h2 className="font-Montserrat text-left md:text-3xl sm:text-2xl text-xl sm:mt-20 mt-2">{t("about:intro")}</h2>
                {/* <h1 className="font-Montserrat text-left md:text-7xl sm:text-5xl text-3xl md:mt-2 mt-1 font-black w-auto" translate="no">Jens Matthiaschk
                </h1> */}
                <NameAnimation width={'300px'} theme={currentTheme} />
                {/* <h2 className="font-Montserrat text-left md:text-5xl sm:text-4xl text-2xl md:mt-3 mt-1">{t("about:profession")}</h2> */}
                <div className="w-full">
                    <p className="font-Montserrat text-left md:text-4xl sm:text-3xl text-xl md:mt-3 mt-1 typeEffect" ref={profRef}></p>
                </div>
                <p className="text-sm sm:text-lg text-left my-4 sm:my-8 font-medium w-[90%]">{t("about:description")}</p>
                <div className="md:mt-10 sm:mt-8 mt-0 mb-32 flex sm:flex-row flex-col gap-y-3">
                    <Link to={t('projects:projects.section_title')} spy={true} smooth={true} offset={0} duration={500} className="w-fit">
                        <button className={currentTheme === 'dark' ? "badge p-4 sm:badge-lg badge-md sm:p-5 sm:text-xl font-semibold badge-outline btn-dark hover:drop-shadow-[0_0_10px_var(--dm-third-color)] mr-3 transform-gpu" : "badge p-4 sm:badge-lg badge-md sm:p-5 sm:text-xl font-semibold badge-outline btn-light hover:drop-shadow-[0_0_10px_var(--lm-third-color)] mr-3 transform-gpu"}>
                            <p className="mr-2">{t('about:button_projects')}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </button>
                    </Link>
                    <Link to={t('contact:section_title')} spy={true} smooth={true} offset={0} duration={500} className="w-fit">
                        <button className={currentTheme === 'dark' ? "badge p-4 sm:badge-lg badge-md sm:p-5 sm:text-xl font-semibold badge-outline btn-dark hover:drop-shadow-[0_0_10px_var(--dm-third-color)] transform-gpu" : "badge p-4 sm:badge-lg badge-md sm:p-5 sm:text-xl font-semibold badge-outline btn-light hover:drop-shadow-[0_0_10px_var(--lm-third-color)] transform-gpu"}>
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
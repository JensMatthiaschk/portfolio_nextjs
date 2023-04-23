import { ThemeContext } from "../components/ThemeContext.jsx";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from 'next-i18next';
import { Link } from 'react-scroll';
import { FiExternalLink } from 'react-icons/fi';
import Skills from "../components/Skills.jsx";

export default function Experience({ setOtherProjectsVisible }) {

    const { currentTheme, setSectionActive, currentScreenWidth } = useContext(ThemeContext);
    const { ref: experienceRef, inView: experienceIsVisible } = useInView({ threshold: 0.15 });
    const { ref: educationTrainingRef, inView: educationTrainingIsVisible } = useInView({ threshold: 0 });
    const { ref: professionalExperienceRef, inView: professionalExperienceIsVisible } = useInView({ threshold: 0 });
    const { t } = useTranslation();
    const educationAndTraining = t('experience:content.educationAndTraining', { returnObjects: true }) || [];
    const professionalExperience = t('experience:content.professionalExperience', { returnObjects: true }) || [];
    const { i18n } = useTranslation();
    const lng = i18n.language;
    const otherProjects = t('projects:otherProjects.section_title');


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
                            <h2 key={`header-ex-${i}`} className="marquee__rtl text-lg md:text-xl xl:text-2xl 2xl:text-3xl -my-2">{t('section_title')}</h2>
                        )}
                    </div>
                    <div className="flex marquee__content">
                        {[...Array(10)].map((e, i) =>
                            <h2 key={`header-ex-${i}`} className="marquee__ltr text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl -my-2">{t('section_title')}</h2>
                        )}
                    </div>
                    <div className="flex marquee__content">
                        {[...Array(15)].map((e, i) =>
                            <h2 key={`header-ex-${i}`} className="marquee__ltr___slow text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl -my-2">{t('section_title')}</h2>
                        )}
                    </div>
                    <div className="flex marquee__content">
                        {[...Array(10)].map((e, i) =>
                            <h2 key={`header-ex-${i}`} className="marquee__rtl text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl -m-2 lg:-my-4">{t('section_title')}</h2>
                        )}
                    </div>
                </div>
                <div className="transition-all">
                    <Skills />
                    <div id='Education' ref={educationTrainingRef}
                        className={(educationTrainingIsVisible ? "fade-in" : "invisible")
                            + " flex flex-col text-center mx-auto lg:w-[80%] mt-16 sm:mt-40 max-w-[1600px]"} >
                        <h3 className={(currentTheme === 'dark' ? "text-[var(--dm-third-color)]" : "text-[var(--lm-third-color)]")
                            + " text-5xl xl:text-7xl font-extrabold font-Montserrat mb-10 lowercase"}>
                            {educationAndTraining.title}</h3>
                        {educationAndTraining.content?.map((e, i) =>
                            // mobile size
                            (currentScreenWidth < 640) ?
                                <div key={`ed-${i}`} className={(currentTheme === "dark" ? "bg-[var(--dm-glow-color)] hover:shadow-[0_5px_8px_2px_var(--dm-third-color)]" : "bg-stone-200 hover:shadow-[0_2px_10px_1px_DimGrey]")
                                    + " w-full h-fit overflow-hidden rounded-md ease-in-out delay-50 duration-200 mt-6 flex flex-col sm:flex-row justify-evenly"}>
                                    <div className={(currentTheme === "dark" ? "before:bg-[var(--dm-secondary-color)] bg-[var(--dm-secondary-color)] drop-shadow-[0_4px_8px_var(--dm-main-bg-color)]" : "before:bg-[var(--lm-secondary-color)] bg-[var(--lm-secondary-color)] drop-shadow-[0_4px_8px_var(--lm-secondary-color)]")
                                        + " skewed-bottom skew-y-6 before:w-full before:h-[2rem] before:-skew-y-6 before:absolute before:top-0 w-full sm:w-4/12 items-center flex flex-col"}>
                                        <div className={(currentTheme === "dark" ? "text-[var(--dm-glow-color)]" : "text-stone-200")
                                            + " -skew-y-6 text-right flex flex-col w-full justify-center p-6 gap-y-3"}>
                                            <h3 className={(currentTheme === "light" && "text-[var(--lm-third-color)]") + " font-extrabold text-2xl sm:text-xl"}>{e.title}</h3>
                                            <h4>{e.location ? `@ ${e.school}, ${e.location}` : `@ ${e.school}`}</h4>
                                            <p>{e.time_period}</p>
                                        </div>
                                    </div>
                                    <div className={(currentTheme === 'dark' ? "bg-[var(--dm-glow-color)] text-[var(--dm-secondary-color)]" : "bg-stone-200 text-[var(--lm-secondary-color)]")
                                        + " text-left flex flex-col sm:w-8/12 w-full justify-evenly p-6 pt-10"}>
                                        <p >{e.description}</p>
                                        {e.school === "WBS Coding School" && (lng === "de" || lng === "de-DE") ?
                                            <span className="mt-4 inline-block"><span className="text-4xl align-middle leading-[1rem]">☞ </span>Einen Überblick über die gemeinsam realisierten Teamprojekte findest du hier
                                                <Link
                                                    className={currentTheme === 'dark' ? "hover:text-cyan-600 inline-block" : "hover:drop-shadow-[2px_2px_0_var(--lm-third-color)] inline-block -mb-1 pl-2"}
                                                    onClick={() => setOtherProjectsVisible(true)} to='otherProjectsButton' spy={true} smooth={true} offset={50} duration={500}>
                                                    <svg
                                                        className="w-[1.2em] inline mb-1 ml-1"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </Link>
                                            </span>
                                            : e.school === "WBS Coding School" ? <span className="mt-4 inline-block"><span className="text-4xl align-middle leading-[1rem]">☞ </span>Check out some of our group projects which we realized together
                                                <Link
                                                    className={currentTheme === 'dark' ? "hover:text-cyan-600 inline-block" : "hover:drop-shadow-[2px_2px_0_var(--lm-third-color)] inline-block -mb-1 pl-2"}
                                                    onClick={() => setOtherProjectsVisible(true)} to='otherProjectsButton' spy={true} smooth={true} offset={50} duration={500}>
                                                    <svg
                                                        className="w-[1.2em] inline mb-1 ml-1"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </Link>
                                            </span>
                                                : null
                                        }
                                    </div>
                                </div> :
                                (currentScreenWidth >= 640) && (i % 2 == 0) ?
                                    <div key={`ed-${i}`} className={(currentTheme === "dark" ? "bg-[var(--dm-glow-color)] hover:shadow-[0_5px_8px_2px_var(--dm-third-color)]" : "bg-stone-200 hover:shadow-[0_2px_10px_1px_DimGrey]")
                                        + " w-full h-fit overflow-hidden rounded-md ease-in-out delay-50 duration-200 mt-6 flex flex-col sm:flex-row justify-evenly sm:text-lg"}>
                                        <div className={(currentTheme === "dark" ? "before:bg-[var(--dm-secondary-color)] bg-[var(--dm-secondary-color)] drop-shadow-[6px_0_12px_var(--dm-main-bg-color)]" : "before:bg-[var(--lm-secondary-color)] bg-[var(--lm-secondary-color)] drop-shadow-[6px_0_12px_var(--lm-secondary-color)]")
                                            + " skewed-right skew-x-6 before:h-full before:w-[2rem] before:-skew-x-6 before:absolute before:left-0 w-full sm:w-4/12 items-center flex flex-row"}>
                                            <div className={(currentTheme === "dark" ? "text-[var(--dm-glow-color)]" : "text-stone-200")
                                                + " sm:-skew-x-6 text-right flex flex-col w-full justify-center py-6 pr-10 pl-6 gap-y-3"} >
                                                <h3 className={(currentTheme === "light" && "text-[var(--lm-third-color)]") + " font-extrabold text-2xl break-words"}>{e.title}</h3>
                                                <h4>{e.location ? `@ ${e.school}, ${e.location}` : `@ ${e.school}`}</h4>
                                                <p>{e.time_period}</p>
                                            </div>
                                        </div>
                                        <div className={(currentTheme === 'dark' ? "bg-[var(--dm-glow-color)] text-[var(--dm-secondary-color)]" : "bg-stone-200 text-[var(--lm-secondary-color)]")
                                            + " text-left flex flex-col sm:w-8/12 w-full justify-evenly p-6 pt-10"}>
                                            <p >{e.description}</p>
                                            {e.school === "WBS Coding School" && (lng === "de" || lng === "de-DE") ?
                                                <span className="mt-4 inline-block"><span className="text-4xl align-middle leading-[1rem]">☞ </span>Einen Überblick über die gemeinsam realisierten Teamprojekte findest du hier
                                                    <Link
                                                        className={currentTheme === 'dark' ? "hover:text-cyan-600 inline-block" : "hover:drop-shadow-[2px_2px_0_var(--lm-third-color)] inline-block -mb-1 pl-2"}
                                                        onClick={() => setOtherProjectsVisible(true)} to='otherProjectsButton' spy={true} smooth={true} offset={50} duration={500}>
                                                        <svg
                                                            className="w-[1.2em] inline mb-1 ml-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                    </Link>
                                                </span>
                                                : e.school === "WBS Coding School" ? <span className="mt-4 inline-block"><span className="text-4xl align-middle leading-[1rem]">☞ </span>Check out some of our group projects which we realized together
                                                    <Link
                                                        className={currentTheme === 'dark' ? "hover:text-cyan-600 inline-block" : "hover:drop-shadow-[2px_2px_0_var(--lm-third-color)] inline-block -mb-1 pl-2"}
                                                        onClick={() => setOtherProjectsVisible(true)} to='otherProjectsButton' spy={true} smooth={true} offset={50} duration={500}>
                                                        <svg
                                                            className="w-[1.2em] inline mb-1 ml-1"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                    </Link>
                                                </span>
                                                    : null
                                            }
                                        </div>
                                    </div>
                                    :
                                    (currentScreenWidth >= 640) && (i % 2 == 1) &&
                                    <div key={`ed-${i}`} className={(currentTheme === "dark" ? "bg-[var(--dm-glow-color)] hover:shadow-[0_5px_8px_2px_var(--dm-third-color)]" : "bg-stone-200 hover:shadow-[0_2px_10px_1px_DimGrey]")
                                        + " w-full h-fit overflow-hidden rounded-md ease-in-out delay-50 duration-200 mt-6 flex flex-col sm:flex-row justify-evenly sm:text-lg"}>
                                        <div className={(currentTheme === 'dark' ? "bg-[var(--dm-glow-color)] text-[var(--dm-secondary-color)]" : "bg-stone-200 text-[var(--lm-secondary-color)]")
                                            + " text-left flex flex-col sm:w-8/12 w-full justify-evenly p-6 pt-10"}>
                                            <p >{e.description}</p>
                                            {e.school === "WBS Coding School" && (lng === "de" || lng === "de-DE") ?
                                                <span className="mt-4 inline-block"><span className="text-4xl align-middle leading-[1rem]">☞ </span>Einen Überblick über die gemeinsam realisierten Teamprojekte findest du hier
                                                    <Link
                                                        className={currentTheme === 'dark' ? "hover:text-cyan-600 inline-block" : "hover:drop-shadow-[2px_2px_0_var(--lm-third-color)] inline-block -mb-1 pl-2"}
                                                        onClick={() => setOtherProjectsVisible(true)} to='otherProjectsButton' spy={true} smooth={true} offset={50} duration={500}>
                                                        <svg
                                                            className="w-[1.2em] inline mb-1 ml-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                    </Link>
                                                </span>
                                                : e.school === "WBS Coding School" ? <span className="mt-4 inline-block"><span className="text-4xl align-middle leading-[1rem]">☞ </span>Check out some of our group projects which we realized together
                                                    <Link
                                                        className={currentTheme === 'dark' ? "hover:text-cyan-600 inline-block" : "hover:drop-shadow-[2px_2px_0_var(--lm-third-color)] inline-block -mb-1 pl-2"}
                                                        onClick={() => setOtherProjectsVisible(true)} to='otherProjectsButton' spy={true} smooth={true} offset={50} duration={500}>
                                                        <svg
                                                            className="w-[1.2em] inline mb-1 ml-1"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                    </Link>
                                                </span>
                                                    : null
                                            }
                                        </div>
                                        <div className={(currentTheme === "dark" ? "bg-[var(--dm-secondary-color)] after:bg-[var(--dm-secondary-color)] drop-shadow-[-6px_0_12px_var(--dm-main-bg-color)]" : "bg-[var(--lm-secondary-color)] after:bg-[var(--lm-secondary-color)] drop-shadow-[-6px_0_12px_var(--lm-secondary-color)]")
                                            + " skewed-left -skew-x-6 after:h-full after:w-[2rem] after:skew-x-6 after:absolute after:right-0 flex flex-row items-center sm:w-4/12 w-full"}>
                                            <div className={(currentTheme === "dark" ? "text-[var(--dm-glow-color)]" : "text-stone-200")
                                                + " sm:skew-x-6 text-left flex flex-col w-fit justify-center py-6 pl-10 pr-6 gap-y-3"}>
                                                <h3 className={(currentTheme === "light" && "text-[var(--lm-third-color)]")
                                                    + " font-extrabold text-2xl"}>{e.title}</h3>
                                                <h4>{e.location ? `@ ${e.school}, ${e.location}` : `@ ${e.school}`}</h4>
                                                <p>{e.time_period}</p>
                                            </div>
                                        </div>
                                    </div>

                        )}
                        <div>
                        </div>
                    </div>
                    <div id='Profession' ref={professionalExperienceRef} className={(professionalExperienceIsVisible ? "fade-in" : "invisible")
                        + " flex flex-col text-center mx-auto lg:w-[80%] mt-16 sm:mt-40 max-w-[1600px]"}>
                        <h3 className={(currentTheme === 'dark' ? "text-[var(--dm-third-color)]" : "text-[var(--lm-third-color)]")
                            + " text-5xl xl:text-7xl font-extrabold font-Montserrat mb-10 lowercase"}>{professionalExperience.title}</h3>
                        {professionalExperience?.content?.map((e, i) =>
                            (currentScreenWidth < 640) ?
                                <div key={`ex-${i}`} className={(currentTheme === "dark" ? "bg-[var(--dm-glow-color)] hover:shadow-[0_5px_8px_2px_var(--dm-third-color)]" : "bg-stone-200 hover:shadow-[0_2px_10px_1px_DimGrey]")
                                    + " w-full h-fit overflow-hidden rounded-md ease-in-out delay-50 duration-200 mt-6 flex flex-col sm:flex-row justify-evenly"}>
                                    <div className={(currentTheme === "dark" ? "before:bg-[var(--dm-secondary-color)] bg-[var(--dm-secondary-color)] drop-shadow-[0_4px_8px_var(--dm-main-bg-color)]" : "before:bg-[var(--lm-secondary-color)] bg-[var(--lm-secondary-color)] drop-shadow-[0_4px_8px_var(--lm-secondary-color)]")
                                        + " skewed-bottom before:w-full before:h-[2rem] before:-skew-y-6 before:absolute before:top-0 skew-y-6 w-full sm:w-4/12 items-center flex flex-col"}>
                                        <div className={(currentTheme === "dark" ? "text-[var(--dm-glow-color)]" : "text-stone-200")
                                            + " -skew-y-6 text-right flex flex-col w-full justify-center p-6 gap-y-3"}>
                                            <h3 className={(currentTheme === "light" && "text-[var(--lm-third-color)]") + " font-extrabold text-2xl"}>{e.position}</h3>
                                            <h4>{e.location ? `@ ${e.company}, ${e.location}` : `@ ${e.company}`}</h4>
                                            <p>{e.time_period}</p>
                                        </div>
                                    </div>
                                    <div className={(currentTheme === 'dark' ? "bg-[var(--dm-glow-color)] text-[var(--dm-secondary-color)]" : "bg-stone-200 text-[var(--lm-secondary-color)]")
                                        + " text-left flex flex-col sm:w-8/12 w-full justify-evenly p-6 pt-10"}>
                                        <div className="py-2 align-middle">{e.description}</div>
                                        {i === 0 ? <span className="py-2 align-middle"><span className="text-4xl align-middle leading-[1rem]">☞ </span> {professionalExperience.content[0].follow_link_part1} <a href="https://www.linkedin.com/in/jensmatthiaschk"
                                            target="_newBrowserTab"
                                            rel="noopener"
                                            className={currentTheme === 'dark' ? "hover:text-cyan-600" : "hover:drop-shadow-[2px_2px_0_var(--lm-third-color)]"}>linkedIn
                                            <svg className="w-[1.2em] inline mb-1 ml-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                        </a> {professionalExperience.content[0].follow_link_part2} <a href="https://www.imdb.com/name/nm4456056/"
                                            target="_newBrowserTab"
                                            rel="noopener"
                                            className={currentTheme === 'dark' ? "hover:text-cyan-600" : "hover:drop-shadow-[2px_2px_0_var(--lm-third-color)]"}>IMDB
                                                <svg className="w-[1.2em] inline mb-1 ml-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                            </a> {professionalExperience.content[0].follow_link_part3}</span> : ""}
                                    </div>
                                </div>
                                :
                                (currentScreenWidth >= 640) && (i % 2 == 0) ?
                                    <div key={`ex-${i}`} className={(currentTheme === "dark" ? "bg-[var(--dm-glow-color)] hover:shadow-[0_5px_8px_2px_var(--dm-third-color)]" : "bg-stone-200 hover:shadow-[0_2px_10px_1px_DimGrey]")
                                        + " w-full h-fit overflow-hidden rounded-md ease-in-out delay-50 duration-200 mt-6 flex flex-col sm:flex-row justify-evenly sm:text-lg"}>
                                        <div className={(currentTheme === "dark" ? "before:bg-[var(--dm-secondary-color)] bg-[var(--dm-secondary-color)] drop-shadow-[6px_0_12px_var(--dm-main-bg-color)]" : "before:bg-[var(--lm-secondary-color)] bg-[var(--lm-secondary-color)] drop-shadow-[6px_0_12px_var(--lm-secondary-color)]")
                                            + " skewed-right skew-x-6 before:h-full before:w-[2rem] before:-skew-x-6 before:absolute before:left-0 w-full sm:w-4/12 items-center flex flex-row"}>
                                            <div className={(currentTheme === "dark" ? "text-[var(--dm-glow-color)]" : "text-stone-200")
                                                + " sm:-skew-x-6 text-right flex flex-col w-full justify-center py-6 pr-10 pl-6 gap-y-3"}>
                                                <h3 className={(currentTheme === "light" && "text-[var(--lm-third-color)]") + " font-extrabold text-2xl break-words"}>{e.position}</h3>
                                                <h4>{e.location ? `@ ${e.company}, ${e.location}` : `@ ${e.company}`}</h4>
                                                <p>{e.time_period}</p>
                                            </div>
                                        </div>
                                        <div className={(currentTheme === 'dark' ? "text-[var(--dm-secondary-color)]" : "text-[var(--lm-secondary-color)]")
                                            + " relative w-full text-left flex flex-col sm:w-8/12 justify-evenly p-6 pl-10"}>
                                            <div className="py-2 align-middle">{e.description}</div>
                                            {i === 0 ? <span className="py-2 align-middle"><span className="text-4xl align-middle leading-[1rem]">☞ </span> {professionalExperience.content[0].follow_link_part1} <a href="https://www.linkedin.com/in/jensmatthiaschk"
                                                target="_newBrowserTab"
                                                rel="noopener"
                                                className={currentTheme === 'dark' ? "hover:text-cyan-600" : "hover:drop-shadow-[2px_2px_0_var(--lm-third-color)]"}>linkedIn
                                                <svg className="w-[1.2em] inline mb-1 ml-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                            </a> {professionalExperience.content[0].follow_link_part2} <a href="https://www.imdb.com/name/nm4456056/"
                                                target="_newBrowserTab"
                                                rel="noopener"
                                                className={currentTheme === 'dark' ? "hover:text-cyan-600" : "hover:drop-shadow-[2px_2px_0_var(--lm-third-color)]"}>IMDB
                                                    <svg className="w-[1.2em] inline mb-1 ml-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                                </a> {professionalExperience.content[0].follow_link_part3}</span> : ""}
                                        </div>
                                    </div>
                                    :
                                    (currentScreenWidth >= 640) && (i % 2 == 1) &&
                                    <div key={`ex-${i}`} className={(currentTheme === "dark" ? "bg-[var(--dm-glow-color)] hover:shadow-[0_5px_8px_2px_var(--dm-third-color)]" : "bg-stone-200 hover:shadow-[0_2px_10px_1px_DimGrey]")
                                        + " w-full h-fit overflow-hidden rounded-md ease-in-out delay-50 duration-200 mt-6 flex flex-col sm:flex-row justify-evenly sm:text-lg"}>
                                        <div className={(currentTheme === 'dark' ? "bg-[var(--dm-glow-color)] text-[var(--dm-secondary-color)]" : "text-[var(--lm-secondary-color)]")
                                            + " text-right flex flex-col sm:w-8/12 w-full justify-evenly p-6 pr-10"}>
                                            <div className="py-2 align-middle">{e.description}</div>
                                        </div>
                                        <div className={(currentTheme === "dark" ? "after:bg-[var(--dm-secondary-color)] bg-[var(--dm-secondary-color)] drop-shadow-[-6px_0_12px_var(--dm-main-bg-color)]" : "after:bg-[var(--lm-secondary-color)] bg-[var(--lm-secondary-color)] drop-shadow-[-6px_0_12px_var(--lm-secondary-color)]")
                                            + " skewed-left -skew-x-6 after:h-full after:w-[2rem] after:skew-x-6 after:absolute after:right-0 flex flex-row items-center sm:w-4/12 w-full"}>
                                            <div className={(currentTheme === 'dark' ? "bg-[var(--dm-glow-color)] text-[var(--dm-secondary-color)]" : "text-[var(--lm-secondary-color)]")
                                                + " text-right flex flex-col sm:w-8/12 w-full justify-evenly p-6 pr-10"}>
                                                <h3 className={currentTheme === "dark" ? "font-extrabold text-2xl" : "text-[var(--lm-third-color)] font-extrabold text-2xl sm:text-xl"}>{e.position}</h3>
                                                <h4>{e.location ? `@ ${e.company}, ${e.location}` : `@ ${e.company}`}</h4>
                                                <p>{e.time_period}</p>
                                            </div>
                                        </div>
                                    </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
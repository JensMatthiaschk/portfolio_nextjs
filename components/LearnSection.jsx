// import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext.jsx";
import { Link } from 'react-scroll';
import { motion } from "framer-motion";
import { MdOutlineUnfoldLess, MdOutlineUnfoldMore } from "react-icons/md";

export default function LearnSection({ setOtherProjectsVisible }) {

    const { ref: educationTrainingRef, inView: educationTrainingIsVisible } = useInView({ threshold: 0, triggerOnce: true });
    const { t, i18n } = useTranslation();
    const educationAndTraining = t('experience:content.educationAndTraining', { returnObjects: true }) || [];
    const { currentTheme, currentScreenWidth } = useContext(ThemeContext);
    const lng = i18n.language;

    return (
        <div id='Education' ref={educationTrainingRef}
            className={(educationTrainingIsVisible ? "fade-in" : "invisible")
                + " flex flex-col text-center mx-auto lg:w-[80%] mt-16 sm:mt-40 max-w-[1400px]"} >
            <h3 className={(currentTheme === 'dark' ? "text-[var(--dm-third-color)]" : "text-[var(--lm-third-color)]")
                + " text-5xl xl:text-7xl font-extrabold font-Montserrat mb-10 lowercase"}>
                {educationAndTraining.title}</h3>
            {educationAndTraining.content?.map((e, i) => {

                const [showMore, setShowMore] = useState(false);

                return (
                    // mobile size
                    (currentScreenWidth < 640) ?
                        <div key={`ed-${i}`} className={(currentTheme === "dark" ? "bg-[var(--dm-glow-color)] hover:shadow-[0_5px_8px_2px_var(--dm-third-color)]" : "bg-stone-200 hover:shadow-[0_2px_10px_1px_DimGrey]")
                            + " w-full h-fit overflow-hidden rounded-md ease-in-out delay-50 duration-200 mt-6 flex flex-col sm:flex-row justify-evenly"}>
                            <motion.div
                                onClick={() => setShowMore(!showMore)}
                                initial={{ skewY: 0 }}
                                animate={{ skewY: showMore ? 6 : 0 }}
                                className={` w-full relative items-center flex flex-col before:bg-[var(--dm-secondary-color)] ${currentTheme === "dark" ? "before:bg-[var(--dm-secondary-color)] bg-[var(--dm-secondary-color)] drop-shadow-[0_4px_8px_var(--dm-main-bg-color)]" : "before:bg-[var(--lm-secondary-color)] bg-[var(--lm-secondary-color)] drop-shadow-[0_4px_8px_var(--lm-secondary-color)]"}`}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                exit={{ skewY: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                            >
                                <motion.div
                                    className="w-full relative"
                                    initial={{ skewY: 0 }}
                                    animate={{ skewY: showMore ? -6 : 0 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    exit={{ skewY: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                                >
                                    <div className={`before:h-6 before:absolute before:w-full before:top-0 before:left-0 ${currentTheme === "dark" ? "before:bg-[var(--dm-secondary-color)] bg-[var(--dm-secondary-color)] drop-shadow-none" : "before:bg-[var(--lm-secondary-color)] bg-[var(--lm-secondary-color)] drop-shadow-none"}`} />
                                    <div className={(currentTheme === "dark" ? "text-[var(--dm-glow-color)]" : "text-stone-200")
                                        + " text-right flex flex-col w-full justify-center p-6 gap-y-3 relative"}>
                                        <h3 className={(currentTheme === "light" && "text-[var(--lm-third-color)]") + " font-extrabold text-2xl sm:text-xl"}>{e.title}</h3>
                                        <h4>{e.location ? `@ ${e.school}, ${e.location}` : `@ ${e.school}`}</h4>
                                        <p>{e.time_period}</p>
                                        <motion.div
                                            initial={{ bottom: "10px" }}
                                            animate={{ bottom: showMore ? "25px" : "10px" }}
                                            transition={{ duration: 0.8, ease: "easeInOut" }}
                                            exit={{ bottom: "10px", transition: { duration: 0.8, ease: "easeInOut" } }}
                                            className="left-1 absolute">
                                            {!showMore ? <MdOutlineUnfoldMore size={25} className={`${!showMore ? "animate-pulse" : "invisible"}`} /> : <MdOutlineUnfoldLess size={25} className={`${!showMore ? "invisible" : "visible"}`} />}
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                initial={{ height: 0, marginTop: 0 }}
                                animate={{ height: showMore ? "auto" : 0, marginTop: showMore ? "1rem" : 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                exit={{ height: 0, marginTop: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                            >
                                <div className={(currentTheme === 'dark' ? "bg-[var(--dm-glow-color)] text-[var(--dm-secondary-color)]" : "bg-stone-200 text-[var(--lm-secondary-color)]")
                                    + " flex flex-col text-left w-full justify-evenly p-6 gap-y-4"}>
                                    <p>{e.description}</p>
                                    {e.school === "WBS Coding School" && (lng === "de" || lng === "de-DE") ?
                                        <span className="inline-block"><span className="text-4xl align-middle leading-[1rem]">☞ </span>Einen Überblick über die gemeinsam realisierten Teamprojekte findest du hier
                                            <Link
                                                className={currentTheme === 'dark' ? "hover:text-cyan-600 inline-block" : "hover:drop-shadow-[2px_2px_0_var(--lm-third-color)] inline-block -mb-1 pl-1"}
                                                onClick={() => setOtherProjectsVisible(true)} to='otherProjectsButton' spy={true} smooth={true} offset={50} duration={500}>
                                                <svg
                                                    className="w-[1.2em] inline mb-1 ml-1"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </Link>
                                        </span>
                                        : e.school === "WBS Coding School" ? <span className="mt-4 inline-block"><span className="text-4xl align-middle leading-[1rem]">☞ </span>Check out some of our group projects we realized together
                                            <Link
                                                className={currentTheme === 'dark' ? "hover:text-cyan-600 inline-block" : "hover:drop-shadow-[2px_2px_0_var(--lm-third-color)] inline-block -mb-1 pl-1"}
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
                            </motion.div>
                        </div> :
                        // desktop size - even
                        (currentScreenWidth >= 640) && (i % 2 == 0) ?
                            <div key={`ed-${i}`} className={(currentTheme === "dark" ? "bg-[var(--dm-glow-color)] hover:shadow-[0_5px_8px_2px_var(--dm-third-color)]" : "bg-stone-200 hover:shadow-[0_2px_10px_1px_DimGrey]")
                                + " w-full h-fit overflow-hidden rounded-md ease-in-out delay-50 duration-200 mt-6 flex flex-col sm:flex-row justify-evenly sm:text-lg"}>
                                <div className={(currentTheme === "dark" ? "before:bg-[var(--dm-secondary-color)] bg-[var(--dm-secondary-color)] drop-shadow-[6px_0_12px_var(--dm-main-bg-color)]" : "before:bg-[var(--lm-secondary-color)] bg-[var(--lm-secondary-color)] drop-shadow-[6px_0_12px_var(--lm-secondary-color)]")
                                    + " skewed-right skew-x-6 before:h-full before:w-[2rem] before:-skew-x-6 before:absolute before:left-0 before:-z-10 w-full sm:w-4/12 items-center flex flex-row"}>
                                    <div className={(currentTheme === "dark" ? "text-[var(--dm-glow-color)]" : "text-stone-200")
                                        + " sm:-skew-x-6 text-right flex flex-col w-full justify-center py-6 pr-10 pl-6 gap-y-3"} >
                                        <h3 className={(currentTheme === "light" && "text-[var(--lm-third-color)]") + " font-extrabold text-2xl break-words"}>{e.title}</h3>
                                        <h4>{e.location ? `@ ${e.school}, ${e.location}` : `@ ${e.school}`}</h4>
                                        <p>{e.time_period}</p>
                                    </div>
                                </div>
                                <div className={(currentTheme === 'dark' ? "bg-[var(--dm-glow-color)] text-[var(--dm-secondary-color)]" : "bg-stone-200 text-[var(--lm-secondary-color)]")
                                    + " text-left flex flex-col sm:w-8/12 w-full justify-evenly p-10 pt-10"}>
                                    <p >{e.description}</p>
                                    {e.school === "WBS Coding School" && (lng === "de" || lng === "de-DE") ?
                                        <span className="mt-4 inline-block"><span className="text-4xl align-middle leading-[1rem]">☞ </span>Einen Überblick über die gemeinsam realisierten Teamprojekte findest du hier
                                            <Link
                                                className={currentTheme === 'dark' ? "hover:text-cyan-600 inline-block" : "hover:drop-shadow-[2px_2px_0_var(--lm-third-color)] inline-block -mb-1 pl-1"}
                                                onClick={() => setOtherProjectsVisible(true)} to='otherProjectsButton' spy={true} smooth={true} offset={50} duration={500}>
                                                <svg
                                                    className="w-[1.2em] inline mb-1 ml-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </Link>
                                        </span>
                                        : e.school === "WBS Coding School" ? <span className="mt-4 inline-block"><span className="text-4xl align-middle leading-[1rem]">☞ </span>Check out some of our group projects we realized together
                                            <Link
                                                className={currentTheme === 'dark' ? "hover:text-cyan-600 inline-block" : "hover:drop-shadow-[2px_2px_0_var(--lm-third-color)] inline-block -mb-1 pl-1"}
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
                            // desktop size - uneven
                            (currentScreenWidth >= 640) && (i % 2 == 1) &&
                            <div key={`ed-${i}`} className={(currentTheme === "dark" ? "bg-[var(--dm-glow-color)] hover:shadow-[0_5px_8px_2px_var(--dm-third-color)]" : "bg-stone-200 hover:shadow-[0_2px_10px_1px_DimGrey]")
                                + " w-full h-fit overflow-hidden rounded-md ease-in-out delay-50 duration-200 mt-6 flex flex-col sm:flex-row justify-evenly sm:text-lg"}>
                                <div className={(currentTheme === 'dark' ? "bg-[var(--dm-glow-color)] text-[var(--dm-secondary-color)]" : "bg-stone-200 text-[var(--lm-secondary-color)]")
                                    + " text-left flex flex-col sm:w-8/12 w-full justify-evenly p-10 pt-10"}>
                                    <p >{e.description}</p>
                                    {e.school === "WBS Coding School" && (lng === "de" || lng === "de-DE") ?
                                        <span className="mt-4 inline-block"><span className="text-4xl align-middle leading-[1rem]">☞ </span>Einen Überblick über die gemeinsam realisierten Teamprojekte findest du hier
                                            <Link
                                                className={currentTheme === 'dark' ? "hover:text-cyan-600 inline-block" : "hover:drop-shadow-[2px_2px_0_var(--lm-third-color)] inline-block -mb-1 pl-1"}
                                                onClick={() => setOtherProjectsVisible(true)} to='otherProjectsButton' spy={true} smooth={true} offset={50} duration={500}>
                                                <svg
                                                    className="w-[1.2em] inline mb-1 ml-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </Link>
                                        </span>
                                        : e.school === "WBS Coding School" ? <span className="mt-4 inline-block"><span className="text-4xl align-middle leading-[1rem]">☞ </span>Check out some of our group projects we realized together
                                            <Link
                                                className={currentTheme === 'dark' ? "hover:text-cyan-600 inline-block" : "hover:drop-shadow-[2px_2px_0_var(--lm-third-color)] inline-block -mb-1 pl-1"}
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
                                    + " skewed-left -skew-x-6 after:h-full after:w-[2rem] after:skew-x-6 after:absolute after:right-0 after:-z-10 flex flex-row items-center sm:w-4/12 w-full"}>
                                    <div className={(currentTheme === "dark" ? "text-[var(--dm-glow-color)]" : "text-stone-200")
                                        + " sm:skew-x-6 text-left flex flex-col w-full justify-center py-6 pl-10 pr-6 gap-y-3"}>
                                        <h3 className={(currentTheme === "light" && "text-[var(--lm-third-color)]")
                                            + " font-extrabold text-2xl break-words"}>{e.title}</h3>
                                        <h4>{e.location ? `@ ${e.school}, ${e.location}` : `@ ${e.school}`}</h4>
                                        <p>{e.time_period}</p>
                                    </div>
                                </div>
                            </div>
                )
            }
            )}
            <div>
            </div>
        </div >

    )
}

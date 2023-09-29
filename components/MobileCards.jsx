import { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import { MdOutlineUnfoldMore, MdOutlineUnfoldLess } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

export default function MobileCards({ e, i, id, currentScreenWidth, currentTheme, professionalExperience, setOtherProjectsVisible }) {

    const [showMore, setShowMore] = useState(false);
    const { i18n } = useTranslation();
    const lng = i18n.language;
    const { ref: mobilCardRef, inView: mobilCardIsVisible } = useInView({ threshold: 0 });

    useEffect(() => {
        if (!mobilCardIsVisible) setShowMore(false)
    }), [mobilCardIsVisible]

    if (currentScreenWidth < 640)
        // mobile size
        return (
            <div ref={mobilCardRef} id={id} className={(currentTheme === "dark" ? "bg-[var(--dm-glow-color)] hover:shadow-[0_5px_8px_2px_var(--dm-third-color)]" : "bg-stone-200 hover:shadow-[0_2px_10px_1px_DimGrey]")
                + " w-full h-fit overflow-hidden rounded-md ease-in-out duration-200 mt-6 flex flex-col sm:flex-row justify-evenly select-none"}>

                <motion.div
                    onClick={() => setShowMore(!showMore)}
                    initial={{ skewY: 0 }}
                    animate={{ skewY: showMore ? 6 : 0 }}
                    className={` relative w-full items-center flex flex-col before:bg-[var(--dm-secondary-color)] ${currentTheme === "dark" ? "before:bg-[var(--dm-secondary-color)] bg-[var(--dm-secondary-color)] drop-shadow-[0_4px_8px_var(--dm-main-bg-color)]" : "before:bg-[var(--lm-secondary-color)] bg-[var(--lm-secondary-color)] drop-shadow-[0_4px_8px_var(--lm-secondary-color)]"}`}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    exit={{ skewY: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                >
                    <motion.div
                        className="w-full"
                        initial={{ skewY: 0 }}
                        animate={{ skewY: showMore ? -6 : 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        exit={{ skewY: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    >
                        <div className={`before:h-10 before:absolute before:w-full before:top-0 before:left-0 ${currentTheme === "dark" ? "before:bg-[var(--dm-secondary-color)] bg-[var(--dm-secondary-color)] drop-shadow-none" : "before:bg-[var(--lm-secondary-color)] bg-[var(--lm-secondary-color)] drop-shadow-none"}`} />
                        <div className={(currentTheme === "dark" ? "text-[var(--dm-glow-color)]" : "text-stone-200")
                            + " text-right flex flex-col w-full justify-center p-6 gap-y-3 relative"}>
                            <h3 className={(currentTheme === "light" && "text-[var(--lm-third-color)]") + " font-extrabold text-2xl"}>{e.position || e.title}</h3>
                            <h4>{e.location ? `@ ${e.company || e.school}, ${e.location}` : `@ ${e.company || e.school}`}</h4>
                            <p>{e.time_period}</p>
                            <motion.div
                                initial={{ bottom: "10px" }}
                                animate={{ bottom: showMore ? "25px" : "10px" }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                exit={{ bottom: "10px", transition: { duration: 0.8, ease: "easeInOut" } }}
                                className="left-1 absolute"
                            >
                                {!showMore ? <MdOutlineUnfoldMore size={25} className={`${!showMore ? "animate-pulse" : "invisible"}`} /> : <MdOutlineUnfoldLess size={25} className={`${!showMore ? "invisible" : "visible"}`} />}
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ height: 0, marginTop: 0 }}
                    animate={{ height: showMore ? "auto" : 0, marginTop: showMore && mobilCardRef ? "1rem" : 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    exit={{ height: 0, marginTop: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                >
                    <div className={(currentTheme === 'dark' ? "bg-[var(--dm-glow-color)] text-[var(--dm-secondary-color)]" : "bg-stone-200 text-[var(--lm-secondary-color)]")
                        + " text-left flex flex-col w-full justify-evenly p-6 gap-y-4"}>
                        <div className="align-middle">{e.description}</div>

                        {/* MOVIE WORK DETAIL */}
                        {e.position === "Junior Production Manager, Production Coordinator, Assistant - / Shipping Coordinator" ? <span className="align-middle"><span className="text-4xl align-middle leading-[1rem]">☞ </span> {professionalExperience.content[1].follow_link_part1} <a href="https://www.linkedin.com/in/jensmatthiaschk"
                            target="_newBrowserTab"
                            rel="noopener"
                            className={currentTheme === 'dark' ? "hover:text-cyan-600" : "hover:drop-shadow-[2px_2px_0_var(--lm-third-color)]"}>linkedIn
                            <svg className="w-[1.2em] inline mb-1 ml-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a> {professionalExperience.content[1].follow_link_part2} <a href="https://www.imdb.com/name/nm4456056/"
                            target="_newBrowserTab"
                            rel="noopener"
                            className={currentTheme === 'dark' ? "hover:text-cyan-600" : "hover:drop-shadow-[2px_2px_0_var(--lm-third-color)]"}>IMDB
                                <svg className="w-[1.2em] inline mb-1 ml-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a> {professionalExperience.content[1].follow_link_part3}</span> : ""}

                        {/* WBS CODING SCHOOL DETAIL */}
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
            </div>
        )
}

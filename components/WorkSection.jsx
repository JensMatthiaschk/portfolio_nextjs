import { ThemeContext } from "../components/ThemeContext.jsx";
import { useContext, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from 'next-i18next';
import { motion } from "framer-motion";
import { MdOutlineUnfoldMore, MdOutlineUnfoldLess } from "react-icons/md";

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
            {professionalExperience?.content?.map((e, i) => {

                const [showMore, setShowMore] = useState(false);

                return (
                    // mobile size
                    (currentScreenWidth < 640) ?
                        <div key={`ex-${i}`} className={(currentTheme === "dark" ? "bg-[var(--dm-glow-color)] hover:shadow-[0_5px_8px_2px_var(--dm-third-color)]" : "bg-stone-200 hover:shadow-[0_2px_10px_1px_DimGrey]")
                            + " w-full h-fit overflow-hidden rounded-md ease-in-out delay-50 duration-200 mt-6 flex flex-col sm:flex-row justify-evenly"}>
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
                                    <div className={`before:h-6 before:absolute before:w-full before:top-0 before:left-0 ${currentTheme === "dark" ? "before:bg-[var(--dm-secondary-color)] bg-[var(--dm-secondary-color)] drop-shadow-none" : "before:bg-[var(--lm-secondary-color)] bg-[var(--lm-secondary-color)] drop-shadow-none"}`} />
                                    <div className={(currentTheme === "dark" ? "text-[var(--dm-glow-color)]" : "text-stone-200")
                                        + " text-right flex flex-col w-full justify-center p-6 gap-y-3 relative"}>
                                        <h3 className={(currentTheme === "light" && "text-[var(--lm-third-color)]") + " font-extrabold text-2xl"}>{e.position}</h3>
                                        <h4>{e.location ? `@ ${e.company}, ${e.location}` : `@ ${e.company}`}</h4>
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
                                animate={{ height: showMore ? "auto" : 0, marginTop: showMore ? "1rem" : 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                exit={{ height: 0, marginTop: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                            >
                                <div className={(currentTheme === 'dark' ? "bg-[var(--dm-glow-color)] text-[var(--dm-secondary-color)]" : "bg-stone-200 text-[var(--lm-secondary-color)]")
                                    + " text-left flex flex-col w-full justify-evenly p-6 gap-y-4"}>
                                    <div className="align-middle">{e.description}</div>
                                    {i === 1 ? <span className="align-middle"><span className="text-4xl align-middle leading-[1rem]">☞ </span> {professionalExperience.content[1].follow_link_part1} <a href="https://www.linkedin.com/in/jensmatthiaschk"
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
                                </div>
                            </motion.div>
                        </div>

                        :
                        // desktop size even
                        (currentScreenWidth >= 640) && (i % 2 == 0) ?
                            <div key={`ex-${i}`} className={(currentTheme === "dark" ? "bg-[var(--dm-glow-color)] hover:shadow-[0_5px_8px_2px_var(--dm-third-color)]" : "bg-stone-200 hover:shadow-[0_2px_10px_1px_DimGrey]")
                                + " w-full h-fit overflow-hidden rounded-md ease-in-out delay-50 duration-200 mt-6 flex flex-col sm:flex-row justify-evenly sm:text-lg"}>
                                <div className={(currentTheme === "dark" ? "before:bg-[var(--dm-secondary-color)] bg-[var(--dm-secondary-color)] drop-shadow-[6px_0_12px_var(--dm-main-bg-color)]" : "before:bg-[var(--lm-secondary-color)] bg-[var(--lm-secondary-color)] drop-shadow-[6px_0_12px_var(--lm-secondary-color)]")
                                    + " skewed-right skew-x-6 before:h-full before:w-[2rem] before:-skew-x-6 before:absolute before:left-0 before:-z-10 w-full sm:w-4/12 items-center flex flex-row"}>
                                    <div className={(currentTheme === "dark" ? "text-[var(--dm-glow-color)]" : "text-stone-200")
                                        + " sm:-skew-x-6 text-right flex flex-col w-full justify-center py-6 pr-10 pl-6 gap-y-3"}>
                                        <h3 className={(currentTheme === "light" && "text-[var(--lm-third-color)]") + " font-extrabold text-2xl break-words"}>{e.position}</h3>
                                        <h4>{e.location ? `@ ${e.company}, ${e.location}` : `@ ${e.company}`}</h4>
                                        <p>{e.time_period}</p>
                                    </div>
                                </div>
                                <div className={(currentTheme === 'dark' ? "bg-[var(--dm-glow-color)] text-[var(--dm-secondary-color)]" : "bg-stone-200 text-[var(--lm-secondary-color)]")
                                    + " text-left flex flex-col sm:w-8/12 justify-evenly p-10 pl-10"}>
                                    <div className="py-2 align-middle">{e.description}</div>

                                </div>
                            </div>
                            :
                            // desktop size odd
                            (currentScreenWidth >= 640) && (i % 2 == 1) &&
                            <div key={`ex-${i}`} className={(currentTheme === "dark" ? "bg-[var(--dm-glow-color)] hover:shadow-[0_5px_8px_2px_var(--dm-third-color)]" : "bg-stone-200 hover:shadow-[0_2px_10px_1px_DimGrey]")
                                + " w-full h-fit overflow-hidden rounded-md ease-in-out delay-50 duration-200 mt-6 flex flex-col sm:flex-row justify-evenly sm:text-lg"}>
                                <div className={(currentTheme === 'dark' ? "bg-[var(--dm-glow-color)] text-[var(--dm-secondary-color)]" : "text-[var(--lm-secondary-color)]")
                                    + " text-right flex flex-col sm:w-8/12 w-full justify-evenly p-10 pr-10"}>
                                    <div className="py-2 align-middle">{e.description}</div>
                                    {i === 1 ? <span className="py-2 align-middle"><span className="text-4xl align-middle leading-[1rem]">☞ </span> {professionalExperience.content[1].follow_link_part1} <a href="https://www.linkedin.com/in/jensmatthiaschk"
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
                                </div>
                                <div className={(currentTheme === "dark" ? "bg-[var(--dm-secondary-color)] after:bg-[var(--dm-secondary-color)] drop-shadow-[-6px_0_12px_var(--dm-main-bg-color)]" : "after:bg-[var(--lm-secondary-color)] bg-[var(--lm-secondary-color)] drop-shadow-[-6px_0_12px_var(--lm-secondary-color)]")
                                    + " skewed-left -skew-x-6 after:h-full after:w-[2rem] after:skew-x-6 after:absolute after:right-0 after:-z-10 flex flex-row items-center sm:w-4/12 w-full"}>
                                    <div className={(currentTheme === 'dark' ? "text-[var(--dm-glow-color)]" : "text-stone-200")
                                        + " sm:skew-x-6 text-left flex flex-col w-full justify-evenly py-6 pl-10 pr-6 gap-y-3"}>
                                        <h3 className={(currentTheme === "light" && "text-[var(--lm-third-color)]") + " font-extrabold text-2xl break-words"}>{e.position}</h3>
                                        <h4>{e.location ? `@ ${e.company}, ${e.location}` : `@ ${e.company}`}</h4>
                                        <p>{e.time_period}</p>
                                    </div>
                                </div>
                            </div>
                )
            }
            )}
        </div >
    )
}

import React from 'react'
import { Link } from 'react-scroll';
import { useTranslation } from 'next-i18next';

export default function DesktopCards({ e, i, id, currentScreenWidth, currentTheme, professionalExperience, setOtherProjectsVisible }) {
    const { i18n } = useTranslation();
    const lng = i18n.language;


    if (currentScreenWidth >= 640 && i % 2 == 0) {

        return (

            <div id={id} className={(currentTheme === "dark" ? "bg-[var(--dm-glow-color)] hover:shadow-[0_5px_8px_2px_var(--dm-third-color)]" : "bg-stone-200 hover:shadow-[0_2px_10px_1px_DimGrey]")
                + " w-full h-fit overflow-hidden rounded-md ease-in-out duration-200 mt-6 flex flex-col sm:flex-row justify-evenly sm:text-lg select-none"}>
                <div className={(currentTheme === "dark" ? "before:bg-[var(--dm-secondary-color)] bg-[var(--dm-secondary-color)] drop-shadow-[6px_0_12px_var(--dm-main-bg-color)]" : "before:bg-[var(--lm-secondary-color)] bg-[var(--lm-secondary-color)] drop-shadow-[6px_0_12px_var(--lm-secondary-color)]")
                    + " skewed-right skew-x-6 before:h-full before:w-[2rem] before:-skew-x-6 before:absolute before:left-0 before:-z-10 w-full sm:w-4/12 items-center flex flex-row"}>
                    <div className={(currentTheme === "dark" ? "text-[var(--dm-glow-color)]" : "text-stone-200")
                        + " sm:-skew-x-6 text-right flex flex-col w-full justify-center py-6 pr-10 pl-6 gap-y-3"}>
                        <h3 className={(currentTheme === "light" && "text-[var(--lm-third-color)]") + " font-extrabold text-2xl break-words"}>{e.position || e.title}</h3>
                        <h4>{e.location ? `@ ${e.company || e.school}, ${e.location}` : `@ ${e.company || e.school}`}</h4>
                        <p>{e.time_period}</p>
                    </div>
                </div>
                <div className={(currentTheme === 'dark' ? "bg-[var(--dm-glow-color)] text-[var(--dm-secondary-color)]" : "bg-stone-200 text-[var(--lm-secondary-color)]")
                    + " text-left flex flex-col sm:w-8/12 justify-evenly p-10 pl-10"}>
                    <div className="py-2 align-middle">{e.description}</div>
                    {/* MOVIE WORK DETAIL */}
                    {e.position === "Junior Production Manager, Production Coordinator, Assistant - / Shipping Coordinator" ? <span className="py-2 align-middle"><span className="text-4xl align-middle leading-[1rem]">☞ </span> {professionalExperience.content[1].follow_link_part1} <a href="https://www.linkedin.com/in/jensmatthiaschk"
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
                    {/* WBS SCHOOL DETAIL */}
                    {e.school === "WBS Coding School" && (lng === "de" || lng === "de-DE") ?
                        <span className="mt-4 inline-block"><span className="text-4xl align-middle leading-[1rem]">☞ </span>Einen Überblick über die gemeinsam realisierten Teamprojekte findest du hier
                            <Link
                                className={currentTheme === 'dark' ? "hover:text-cyan-600 inline-block cursor-pointer" : "hover:drop-shadow-[2px_2px_0_var(--lm-third-color)] inline-block -mb-1 pl-1 cursor-pointer"}
                                onClick={() => setOtherProjectsVisible(true)} to='otherProjectsButton' spy={true} smooth={true} offset={50} duration={500}>
                                <svg
                                    className="w-[1.2em] inline mb-1 ml-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </Link>
                        </span>
                        : e.school === "WBS Coding School" ? <span className="mt-4 inline-block"><span className="text-4xl align-middle leading-[1rem]">☞ </span>Check out some of our group projects we realized together
                            <Link
                                className={currentTheme === 'dark' ? "hover:text-cyan-600 inline-block cursor-pointer" : "hover:drop-shadow-[2px_2px_0_var(--lm-third-color)] inline-block -mb-1 pl-1 cursor-pointer"}
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
        )

    } else if (currentScreenWidth >= 640 && i % 2 == 1) {
        // desktop size odd

        return (
            <div id={id} className={(currentTheme === "dark" ? "bg-[var(--dm-glow-color)] hover:shadow-[0_5px_8px_2px_var(--dm-third-color)]" : "bg-stone-200 hover:shadow-[0_2px_10px_1px_DimGrey]")
                + " w-full h-fit overflow-hidden rounded-md ease-in-out duration-200 mt-6 flex flex-col sm:flex-row justify-evenly sm:text-lg select-none"}>
                <div className={(currentTheme === 'dark' ? "bg-[var(--dm-glow-color)] text-[var(--dm-secondary-color)]" : "text-[var(--lm-secondary-color)]")
                    + " text-right flex flex-col sm:w-8/12 w-full justify-evenly p-10 pr-10"}>
                    <div className="py-2 align-middle">{e.description}</div>
                    {/* MOVIE WORK DETAIL */}
                    {e.position === "Junior Production Manager, Production Coordinator, Assistant - / Shipping Coordinator" ? <span className="py-2 align-middle"><span className="text-4xl align-middle leading-[1rem]">☞ </span> {professionalExperience.content[1].follow_link_part1} <a href="https://www.linkedin.com/in/jensmatthiaschk"
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
                    {/* WBS SCHOOL DETAIL */}
                    {e.school === "WBS Coding School" && (lng === "de" || lng === "de-DE") ?
                        <span className="mt-4 inline-block"><span className="text-4xl align-middle leading-[1rem]">☞ </span>Einen Überblick über die gemeinsam realisierten Teamprojekte findest du hier
                            <Link
                                className={currentTheme === 'dark' ? "hover:text-cyan-600 inline-block cursor-pointer" : "hover:drop-shadow-[2px_2px_0_var(--lm-third-color)] inline-block -mb-1 pl-1 cursor-pointer"}
                                onClick={() => setOtherProjectsVisible(true)} to='otherProjectsButton' spy={true} smooth={true} offset={50} duration={500}>
                                <svg
                                    className="w-[1.2em] inline mb-1 ml-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </Link>
                        </span>
                        : e.school === "WBS Coding School" ? <span className="mt-4 inline-block"><span className="text-4xl align-middle leading-[1rem]">☞ </span>Check out some of our group projects we realized together
                            <Link
                                className={currentTheme === 'dark' ? "hover:text-cyan-600 inline-block cursor-pointer" : "hover:drop-shadow-[2px_2px_0_var(--lm-third-color)] inline-block -mb-1 pl-1 cursor-pointer"}
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
                <div className={(currentTheme === "dark" ? "bg-[var(--dm-secondary-color)] after:bg-[var(--dm-secondary-color)] drop-shadow-[-6px_0_12px_var(--dm-main-bg-color)]" : "after:bg-[var(--lm-secondary-color)] bg-[var(--lm-secondary-color)] drop-shadow-[-6px_0_12px_var(--lm-secondary-color)]")
                    + " skewed-left -skew-x-6 after:h-full after:w-[2rem] after:skew-x-6 after:absolute after:right-0 after:-z-10 flex flex-row items-center sm:w-4/12 w-full select-none"}>
                    <div className={(currentTheme === 'dark' ? "text-[var(--dm-glow-color)]" : "text-stone-200")
                        + " sm:skew-x-6 text-left flex flex-col w-full justify-evenly py-6 pl-10 pr-6 gap-y-3 select-none"}>
                        <h3 className={(currentTheme === "light" && "text-[var(--lm-third-color)]") + " font-extrabold text-2xl break-words"}>{e.position || e.title}</h3>
                        <h4>{e.location ? `@ ${e.company || e.school}, ${e.location}` : `@ ${e.company || e.school}`}</h4>
                        <p>{e.time_period}</p>
                    </div>
                </div>
            </div>
        )
    }

}

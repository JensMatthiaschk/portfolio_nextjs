import { ThemeContext } from "../components/ThemeContext.jsx"
import { useContext, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { useTranslation } from 'next-i18next'
import Image from "next/image.js"


export default function Projects({ otherProjectsVisible, setOtherProjectsVisible }) {

    const { currentTheme, setSectionActive } = useContext(ThemeContext);
    const { ref: projectsRef, inView: projectsIsVisible } = useInView({ threshold: 0.5 });
    const { ref: cardRef, inView: cardIsVisible } = useInView({ threshold: 0 });
    // const [otherProjectsVisible, setOtherProjectsVisible] = useState(false);
    const { t } = useTranslation('projects');
    const projects = (t('projects', { returnObjects: true }));
    const otherProjects = (t('otherProjects', { returnObjects: true }))

    useEffect(() => {
        if (projectsIsVisible === true) {
            setSectionActive(t('projects:projects.section_title'));
        }
    }, [projectsIsVisible, cardIsVisible])


    const openOtherProjects = () => {
        setOtherProjectsVisible(!otherProjectsVisible)
    }

    // useEffect(() => {
    //     setOtherProjectsVisible(false)
    // }, [cardIsVisible])


    return (
        <section id={t('projects:projects.section_title')} ref={projectsRef} className="flex flex-col h-fit transition-all items-center sm:mx-20 mx-8 mb-40 md:mb-60 justify-center">
            <div className={(currentTheme === 'dark' ? "bg-[var(--dm-third-color)] text-[var(--dm-main-bg-color)]" : "bg-[var(--lm-third-color)] text-[var(--lm-main-bg-color)]")
                + " h-fit w-screen -skew-y-12 overflow-hidden flex flex-col justify-center font-black font-Montserrat uppercase"}>
                <div className="flex marquee__content">
                    {[...Array(15)].map((e, i) =>
                        <h2 key={`header-ex-${i}`} className="marquee__rtl text-lg md:text-xl xl:text-2xl 2xl:text-3xl -my-2">{t('projects:projects.section_title')}</h2>
                    )}
                </div>
                <div className="flex marquee__content">
                    {[...Array(10)].map((e, i) =>
                        <h2 key={`header-ex-${i}`} className="marquee__ltr text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl -my-2">{t('projects:projects.section_title')}</h2>
                    )}
                </div>
                <div className="flex marquee__content">
                    {[...Array(15)].map((e, i) =>
                        <h2 key={`header-ex-${i}`} className="marquee__ltr___slow text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl -my-2">{t('projects:projects.section_title')}</h2>
                    )}
                </div>
                <div className="flex marquee__content">
                    {[...Array(10)].map((e, i) =>
                        <h2 key={`header-ex-${i}`} className="marquee__rtl text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl -m-2 lg:-my-4">{t('projects:projects.section_title')}</h2>
                    )}
                </div>
            </div>
            <div ref={cardRef} className={(cardIsVisible ? "fade-in" : "invisible")
                + " flex flex-col mt-24 sm:mt-40 items-center sm:gap-y-16 h-fit"}>
                <div className="flex flex-col items-center">
                    <div className="gap-6 flex flex-wrap justify-center">
                        {projects?.content?.map((p, i) => {

                            function toggleMoreText() {
                                document.querySelector(`.card-text-body-${i}`).classList.toggle("card-text-cutoff")
                                document.querySelector(`.more-button-${i}`).classList.toggle("hidden")
                                document.querySelector(`.less-button-${i}`).classList.toggle("hidden")
                            }

                            return (
                                <div key={`project-${i}`} className={(currentTheme === "dark" ? "bg-[var(--dm-glow-color)] hover:shadow-[0_5px_8px_2px_var(--dm-third-color)]" : "bg-stone-200 hover:shadow-[0_2px_10px_1px_DimGrey]")
                                    + " card max-w-[20rem] h-fit rounded-md ease-in-out delay-50 duration-200 mb-10"}>
                                    <figure className="h-[11.1rem] m-[0.4rem] rounded">
                                        <div className="relative w-full h-full">
                                            <Image unoptimized={true} fill priority={true} src={p.img_url} alt={`Project-${i + 1}`} className="h-auto w-full" />
                                        </div>
                                    </figure>
                                    <div className="card-body flex flex-col justify-between p-5">
                                        <div onClick={toggleMoreText} className={`card-text-body-${i} card-text-cutoff`}>
                                            <h2 className="card-title mb-2">
                                                {p.title}
                                                {i === 0 ? <div className="badge badge-warning">NEW</div> : null}
                                            </h2>
                                            <p>{p.description}</p>
                                            {p.contributors ?
                                                <div className="my-2">
                                                    Contributors:
                                                    {p.contributors.map((e, i) =>
                                                        <>
                                                            <a key={`contributor-${i}`} className={(currentTheme === 'dark' ? "hover:bg-cyan-900 text-[var(--dm-secondary-color)] border-[var(--dm-secondary-color)]" : "hover:text-[var(--lm-third-color)]")
                                                                + " text-xs font-extralight badge mx-2"} href={e.github_url} target="_newBrowserTab"
                                                                rel="noopener" translate="no">{e.name}
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-3 w-3" fill="currentColor" viewBox="0 0 16 16">
                                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                                                </svg></a>
                                                        </>
                                                    )}
                                                </div>
                                                : ""}
                                        </div>
                                        <button className={`more-button-${i} badge text-xs btn-outline text-current w-fit place-self-end`} onClick={toggleMoreText}>{t('project_button_more')}</button>
                                        <button className={`less-button-${i} badge text-xs btn-outline text-current w-fit place-self-end hidden`} onClick={toggleMoreText}>{t('project_button_less')}</button>
                                        <div className="card-actions flex place-content-start justify-end h-16 p-0 mt-6">
                                            {p.techstack_front.map((e, i) =>
                                                <div key={`frontend-badge-${i}`} className="badge badge-sm badge-outline badge-info relative" translate="no">{e}</div>
                                            )}
                                            {p.techstack_back.map((e, i) =>
                                                <div key={`backend-badge-${i}`} className="badge badge-sm badge-outline badge-success" translate="no">{e}</div>
                                            )}
                                        </div>
                                        <div className="flex gap-x-1 items-center mt-1 h-4">
                                            {p.page_url ? <a href={p.page_url ? p.page_url : ""}
                                                target="_newBrowserTab"
                                                rel="noopener">
                                                <svg className="w-6 hover:w-7 h-6 hover:h-7 hover:-mt-1 hover:-mr-1 ease-in-out delay-100 duration-300"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                                </svg>
                                            </a> : ""}
                                            {p.repo_url ? <a href={p.repo_url ? p.repo_url : ""}
                                                target="_newBrowserTab"
                                                rel="noopener">
                                                <svg className="w-5 hover:w-6 h-5 hover:h-6 ease-in-out delay-100 duration-300"
                                                    fill="currentColor"
                                                    viewBox="0 0 1024 1024"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M193.174606 827.379176c-41.983349-54.271159-54.424756-71.986084-63.999008-89.342616l-1.996769-3.737542a533.495731 533.495731 0 0 1-6.246303-11.57102 171.61974 171.61974 0 0 1-7.167889-15.359762c-8.908662-22.118057-10.598236-41.624955 3.583944-59.647076 24.831615-31.743508 65.17659-22.783647 99.172863 6.297503 21.91326 18.68771 54.578354 52.223191 74.494845 76.08202 13.055798 15.615758 36.863429 31.794707 54.271159 37.580218a42.495341 42.495341 0 0 0 5.119921 1.382379l9.113458-28.671556a376.416566 376.416566 0 0 1-95.691316-49.407234c-66.558968-47.922457-124.414072-141.975399-119.447749-213.705488 3.071952-45.311298 18.431714-89.752209 45.567294-132.91314a651.253906 651.253906 0 0 1-3.737542-63.384617c0-25.036412 8.191873-52.223191 23.910029-82.072328a33.842675 33.842675 0 0 1 28.978751-18.022121 299.668955 299.668955 0 0 1 81.816332 8.703865c23.295639 5.887909 47.922457 16.230148 73.982853 30.97552 39.013795-8.089475 76.79881-12.185411 113.457441-12.185411 36.709831 0 74.904439 4.095937 114.635024 12.23661 33.893875-18.994906 63.691813-31.897106 89.701009-38.6554 33.791476-8.755064 64.203805-6.143905 89.240217 9.318255a33.740277 33.740277 0 0 1 8.959861 8.089475c15.359762 19.865292 23.85883 46.232883 26.623587 78.744379 2.150367 24.780416 1.382379 49.407234-2.303964 73.829256 22.169256 33.330683 36.607433 75.928423 43.724122 127.486024 11.571021 84.171495-26.879583 170.851752-87.960236 220.770978-28.466759 23.24444-67.582952 41.471357-117.45098 55.295143 3.174351 11.059029 5.427116 22.066858 6.758296 33.074687 2.252765 18.124519 3.83994 66.763765 4.915123 147.965707 56.421525-29.388344 100.196847-58.367095 131.325965-86.782655 52.991179-48.280852 92.92656-116.78539 118.935756-196.348957 21.759663-66.558968 25.957998-122.724498 15.206165-184.624338-13.158196-75.262833-32.101902-136.650682-60.619861-185.904319-33.381883-57.650306-86.629057-112.126262-150.32087-151.959244-60.927056-38.194608-159.741524-63.743012-237.564318-63.743012-81.713933 0-173.155716 26.46999-242.53064 75.416431-67.480554 47.615262-123.390087 119.294151-155.799185 189.590661-25.650802 55.704737-36.197839 115.044617-36.197839 202.646459 0 70.9621 25.8044 157.181564 56.216728 211.145527 24.012428 42.59774 58.111099 82.942714 108.235123 126.769236 25.241209 22.118057 60.927056 44.184915 107.006341 65.995777v-21.657265c-61.695044-14.335778-110.743883-44.236114-145.917738-89.701009z m-18.278117-149.604082a10.086244 10.086244 0 0 0 0-0.255996v0.255996z m71.934885 108.644716c29.183548 37.836214 72.24208 61.029454 131.069969 69.630921a33.689078 33.689078 0 0 1 28.825153 33.279484v101.016035a33.791476 33.791476 0 0 1-46.744876 31.026719c-75.518829-31.026719-132.964339-63.487016-172.592525-98.148879-55.602338-48.639246-94.564934-94.82093-122.5709-144.381762C29.081149 715.304113 0 618.07682 0 534.775711 0 438.265207 12.185411 369.65827 42.341744 304.225685c37.068225-80.485152 100.299245-161.482297 178.173238-216.419046C301.768123 30.463528 406.880093 0 502.059418 0c90.110603 0 201.366479 28.773954 273.659758 74.034052 72.90767 45.669692 133.937124 108.081525 172.848521 175.306083 33.228285 57.291912 54.322358 125.591653 68.658136 207.971177 12.697403 72.754072 7.679881 139.97863-17.458929 216.828639-29.388344 89.752209-75.109236 168.189393-137.521069 225.12291-45.1577 41.164162-110.385489 81.457937-195.939363 121.495717a33.791476 33.791476 0 0 1-48.229652-30.105133c-1.023984-110.027095-2.713558-175.818075-4.966323-193.942594a167.626202 167.626202 0 0 0-15.206165-50.636015 33.53548 33.53548 0 0 1 23.551635-47.052071c58.571892-12.441407 100.760038-29.69554 126.46204-50.687214 43.775321-35.788245 72.190881-99.838453 63.947809-159.741524-6.553498-47.410465-19.814093-83.24991-39.116194-107.927927a33.433082 33.433082 0 0 1-6.502299-27.13558c4.607929-23.039643 5.887909-46.232883 3.839941-69.733319-1.433578-16.690941-4.710327-29.285946-9.369455-37.989811-7.423885-2.457562-17.458929-2.355163-31.026719 1.177582-22.015659 5.683112-50.175222 18.431714-83.966699 38.143409a33.996273 33.996273 0 0 1-24.678017 3.83994 513.835236 513.835236 0 0 0-112.740653-13.362993c-35.48105 0-72.702873 4.403132-111.563071 13.311794a33.996273 33.996273 0 0 1-25.190009-4.044738c-25.087611-15.154965-47.615262-25.19001-67.275757-30.105133-13.823786-3.481546-28.159564-5.631913-42.853736-6.4511-5.17112 12.851001-7.679881 23.756432-7.679881 32.665094 0 17.510129 1.535976 40.242576 4.607929 67.992546a33.433082 33.433082 0 0 1-5.529515 22.374053c-24.985213 37.068225-38.501803 73.778056-41.010564 110.539087-3.174351 45.311298 42.290544 119.140553 91.646579 154.672802 30.463528 21.96446 66.149375 38.399405 107.159939 49.253637a33.586679 33.586679 0 0 1 23.551635 42.54654l-25.7532 81.253141a33.689078 33.689078 0 0 1-20.172488 21.29887c-20.530882 7.782279-42.495341 7.782279-64.511 0.511992-29.285946-9.727849-63.691813-33.125887-84.837085-58.418295a549.521082 549.521082 0 0 0-18.124519-20.479682c6.963092 9.215857 15.46216 20.274886 26.009197 33.893874z" />
                                                </svg>
                                            </a>
                                                : ""}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                    {otherProjectsVisible ?
                        <button
                            id='otherProjectsButton'
                            onClick={openOtherProjects}
                            className={(currentTheme === "dark" ? "btn-dark hover:drop-shadow-[0_0_10px_var(--dm-third-color)]" : "btn-light hover:drop-shadow-[0_0_10px_var(--lm-third-color)]")
                                + " badge p-4 sm:badge-lg badge-md sm:p-6 sm:text-2xl font-semibold badge-outline btn-dark w-fit transform-gpu"}>
                            {t('otherProjects_button_close')}</button> :
                        <button
                            id='otherProjectsButton'
                            onClick={openOtherProjects}
                            className={(currentTheme === "dark" ? "btn-dark hover:drop-shadow-[0_0_10px_var(--dm-third-color)]" : "btn-light hover:drop-shadow-[0_0_10px_var(--lm-third-color)]")
                                + " badge p-4 sm:badge-lg badge-md sm:p-6 sm:text-2xl font-semibold badge-outline w-fit transform-gpu"}>
                            {t('otherProjects_button_open')}</button>}
                </div>
                {
                    otherProjectsVisible &&
                    <div id={t('otherProjects.section_title')} className="fade-in flex h-fit gap-6 flex-wrap justify-center mt-5 mb-10">
                        <div className="text-center my-5 sm:text-xl mb-10 w-full">
                            <p className="sm:w-[60%] mx-auto">{t('otherProjects_disclaimer')}</p>
                        </div>
                        {otherProjects?.content?.map((p, i) => {

                            function toggleMoreText(p) {
                                document.querySelector(`.op-card-text-body-${i}`).classList.toggle("card-text-cutoff")
                                document.querySelector(`.op-more-button-${i}`).classList.toggle("hidden")
                                document.querySelector(`.op-less-button-${i}`).classList.toggle("hidden")
                            }

                            return (
                                <div key={`otherProject-${i}`} className={(currentTheme === "dark" ? "bg-[var(--dm-glow-color)] hover:shadow-[0_5px_8px_2px_var(--dm-third-color)]" : "bg-stone-200 hover:shadow-[0_2px_10px_1px_DimGrey]")
                                    + " card max-w-[20rem] h-full rounded-md ease-in-out delay-50 duration-200"}>
                                    {p.img_url ?
                                        <figure className="h-[11.1rem] m-[0.4rem] rounded">
                                            <Image width="300" height="200" priority={true} src={p.img_url} alt={`Project-${i + 1}`} className="w-full h-auto" />
                                        </figure>
                                        :
                                        <div className="m-[0.4rem] h-[5rem] p-4">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                className="bi bi-braces w-16"
                                                viewBox="0 0 16 16">
                                                <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z" />
                                            </svg>
                                        </div>}
                                    <div className="card-body flex flex-col justify-between p-5">
                                        <div onClick={toggleMoreText} className={`op-card-text-body-${i} card-text-cutoff`}>
                                            <h2 className="card-title mb-2">
                                                {p.title}
                                            </h2>
                                            <p>{p.description}</p>
                                            <div className="my-2">
                                                {p.contributors &&
                                                    <>
                                                        Contributors:
                                                        {p.contributors.map((e, i) =>
                                                            <a key={`contributor-${i}`} className={(currentTheme === 'dark' ? "hover:bg-cyan-900 text-[var(--dm-secondary-color)] border-[var(--dm-secondary-color)]" : "hover:text-[var(--lm-third-color)]")
                                                                + " font-extralight text-xs badge mx-2"} href={e.github_url} target="_newBrowserTab"
                                                                rel="noopener" translate="no">{e.name}
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-3 w-3" fill="currentColor" viewBox="0 0 16 16">
                                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                                                </svg></a>
                                                        )
                                                        }
                                                    </>}
                                            </div>
                                        </div>
                                        <button className={`op-more-button-${i} badge text-xs text-current btn-outline w-fit place-self-end`} onClick={toggleMoreText}>{t('project_button_more')}</button>
                                        <button className={`op-less-button-${i} badge text-xs text-current btn-outline w-fit place-self-end hidden`} onClick={toggleMoreText}>{t('project_button_less')}</button>
                                        <div className="card-actions flex place-content-start justify-end h-10 mt-2">
                                            {p.techstack_front.map((e, i) =>
                                                <div key={`frontend-badge-${i}`} className="badge badge-sm badge-outline badge-info relative" translate="no">
                                                    {e}</div>
                                            )}
                                            {p.techstack_back.map((e, i) =>
                                                <div key={`backend-badge-${i}`}
                                                    className="badge badge-sm badge-outline badge-success" translate="no">
                                                    {e}</div>
                                            )}
                                        </div>
                                        <div className="flex gap-x-1 items-center mt-1 h-4">
                                            {p.page_url ? <a href={p.page_url ? p.page_url : ""}
                                                target="_newBrowserTab" rel="noopener">
                                                <svg className="w-6 hover:w-7 h-6 hover:h-7 hover:-mt-1 hover:-mr-1 ease-in-out delay-100 duration-300"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor">
                                                    <path strokeLinecap="round"
                                                        strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                                </svg>
                                            </a> : ""}
                                            {p.repo_url ? <a href={p.repo_url ? p.repo_url : ""}
                                                target="_newBrowserTab"
                                                rel="noopener">
                                                <svg className="w-5 hover:w-6 h-5 hover:h-6 ease-in-out delay-100 duration-300"
                                                    fill="currentColor"
                                                    viewBox="0 0 1024 1024"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M193.174606 827.379176c-41.983349-54.271159-54.424756-71.986084-63.999008-89.342616l-1.996769-3.737542a533.495731 533.495731 0 0 1-6.246303-11.57102 171.61974 171.61974 0 0 1-7.167889-15.359762c-8.908662-22.118057-10.598236-41.624955 3.583944-59.647076 24.831615-31.743508 65.17659-22.783647 99.172863 6.297503 21.91326 18.68771 54.578354 52.223191 74.494845 76.08202 13.055798 15.615758 36.863429 31.794707 54.271159 37.580218a42.495341 42.495341 0 0 0 5.119921 1.382379l9.113458-28.671556a376.416566 376.416566 0 0 1-95.691316-49.407234c-66.558968-47.922457-124.414072-141.975399-119.447749-213.705488 3.071952-45.311298 18.431714-89.752209 45.567294-132.91314a651.253906 651.253906 0 0 1-3.737542-63.384617c0-25.036412 8.191873-52.223191 23.910029-82.072328a33.842675 33.842675 0 0 1 28.978751-18.022121 299.668955 299.668955 0 0 1 81.816332 8.703865c23.295639 5.887909 47.922457 16.230148 73.982853 30.97552 39.013795-8.089475 76.79881-12.185411 113.457441-12.185411 36.709831 0 74.904439 4.095937 114.635024 12.23661 33.893875-18.994906 63.691813-31.897106 89.701009-38.6554 33.791476-8.755064 64.203805-6.143905 89.240217 9.318255a33.740277 33.740277 0 0 1 8.959861 8.089475c15.359762 19.865292 23.85883 46.232883 26.623587 78.744379 2.150367 24.780416 1.382379 49.407234-2.303964 73.829256 22.169256 33.330683 36.607433 75.928423 43.724122 127.486024 11.571021 84.171495-26.879583 170.851752-87.960236 220.770978-28.466759 23.24444-67.582952 41.471357-117.45098 55.295143 3.174351 11.059029 5.427116 22.066858 6.758296 33.074687 2.252765 18.124519 3.83994 66.763765 4.915123 147.965707 56.421525-29.388344 100.196847-58.367095 131.325965-86.782655 52.991179-48.280852 92.92656-116.78539 118.935756-196.348957 21.759663-66.558968 25.957998-122.724498 15.206165-184.624338-13.158196-75.262833-32.101902-136.650682-60.619861-185.904319-33.381883-57.650306-86.629057-112.126262-150.32087-151.959244-60.927056-38.194608-159.741524-63.743012-237.564318-63.743012-81.713933 0-173.155716 26.46999-242.53064 75.416431-67.480554 47.615262-123.390087 119.294151-155.799185 189.590661-25.650802 55.704737-36.197839 115.044617-36.197839 202.646459 0 70.9621 25.8044 157.181564 56.216728 211.145527 24.012428 42.59774 58.111099 82.942714 108.235123 126.769236 25.241209 22.118057 60.927056 44.184915 107.006341 65.995777v-21.657265c-61.695044-14.335778-110.743883-44.236114-145.917738-89.701009z m-18.278117-149.604082a10.086244 10.086244 0 0 0 0-0.255996v0.255996z m71.934885 108.644716c29.183548 37.836214 72.24208 61.029454 131.069969 69.630921a33.689078 33.689078 0 0 1 28.825153 33.279484v101.016035a33.791476 33.791476 0 0 1-46.744876 31.026719c-75.518829-31.026719-132.964339-63.487016-172.592525-98.148879-55.602338-48.639246-94.564934-94.82093-122.5709-144.381762C29.081149 715.304113 0 618.07682 0 534.775711 0 438.265207 12.185411 369.65827 42.341744 304.225685c37.068225-80.485152 100.299245-161.482297 178.173238-216.419046C301.768123 30.463528 406.880093 0 502.059418 0c90.110603 0 201.366479 28.773954 273.659758 74.034052 72.90767 45.669692 133.937124 108.081525 172.848521 175.306083 33.228285 57.291912 54.322358 125.591653 68.658136 207.971177 12.697403 72.754072 7.679881 139.97863-17.458929 216.828639-29.388344 89.752209-75.109236 168.189393-137.521069 225.12291-45.1577 41.164162-110.385489 81.457937-195.939363 121.495717a33.791476 33.791476 0 0 1-48.229652-30.105133c-1.023984-110.027095-2.713558-175.818075-4.966323-193.942594a167.626202 167.626202 0 0 0-15.206165-50.636015 33.53548 33.53548 0 0 1 23.551635-47.052071c58.571892-12.441407 100.760038-29.69554 126.46204-50.687214 43.775321-35.788245 72.190881-99.838453 63.947809-159.741524-6.553498-47.410465-19.814093-83.24991-39.116194-107.927927a33.433082 33.433082 0 0 1-6.502299-27.13558c4.607929-23.039643 5.887909-46.232883 3.839941-69.733319-1.433578-16.690941-4.710327-29.285946-9.369455-37.989811-7.423885-2.457562-17.458929-2.355163-31.026719 1.177582-22.015659 5.683112-50.175222 18.431714-83.966699 38.143409a33.996273 33.996273 0 0 1-24.678017 3.83994 513.835236 513.835236 0 0 0-112.740653-13.362993c-35.48105 0-72.702873 4.403132-111.563071 13.311794a33.996273 33.996273 0 0 1-25.190009-4.044738c-25.087611-15.154965-47.615262-25.19001-67.275757-30.105133-13.823786-3.481546-28.159564-5.631913-42.853736-6.4511-5.17112 12.851001-7.679881 23.756432-7.679881 32.665094 0 17.510129 1.535976 40.242576 4.607929 67.992546a33.433082 33.433082 0 0 1-5.529515 22.374053c-24.985213 37.068225-38.501803 73.778056-41.010564 110.539087-3.174351 45.311298 42.290544 119.140553 91.646579 154.672802 30.463528 21.96446 66.149375 38.399405 107.159939 49.253637a33.586679 33.586679 0 0 1 23.551635 42.54654l-25.7532 81.253141a33.689078 33.689078 0 0 1-20.172488 21.29887c-20.530882 7.782279-42.495341 7.782279-64.511 0.511992-29.285946-9.727849-63.691813-33.125887-84.837085-58.418295a549.521082 549.521082 0 0 0-18.124519-20.479682c6.963092 9.215857 15.46216 20.274886 26.009197 33.893874z" />
                                                </svg>
                                            </a>
                                                : ""}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
            </div >
        </section >
    )
}
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../components/ThemeContext.jsx"
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'next-i18next'
import Image from "next/image";
import PortraitDark from "../public/images/PortraitDarkmode.png";
import PortraitLight from "../public/images/PortraitLightmode.png";
import DrawingLight from "../public/images/Drawing_light.gif";
import DrawingDark from "../public/images/Drawing_dark.gif";

export default function Contact(props) {

    const { currentTheme, setSectionActive, contactVisitedLight, setContactVisitedLight, contactVisitedDark, setContactVisitedDark, counterLight, setCounterLight, counterDark, setCounterDark } = useContext(ThemeContext)
    const { ref: drawingRef, inView: drawingIsVisible } = useInView({ threshold: 0 });
    const { ref: contactRef, inView: contactIsVisible } = useInView({ threshold: 0.1 });
    const year = new Date().getFullYear()
    const { t } = useTranslation('contact')

    useEffect(() => {
        if (currentTheme === 'dark' && drawingIsVisible === true) {
            setSectionActive(t('contact:section_title'))
            setCounterDark(prev => prev + 1)
        }
        else if (currentTheme === 'light' && drawingIsVisible === true) {
            setSectionActive(t('contact:section_title'))
            setCounterLight(prev => prev + 1)
        }
    }, [drawingIsVisible, currentTheme])

    useEffect(() => {
        if (currentTheme === 'dark' && counterDark >= 1) {
            setContactVisitedDark(1)
        }
        else if (currentTheme === 'light' && counterLight >= 1) {
            setContactVisitedLight(1)
        }
    }, [contactIsVisible])

    return (
        <>
            <section id={t('contact:section_title')} className="flex flex-col justify-between text-center sm:h-full select-none cursor-default">
                <div ref={contactRef} className={contactIsVisible ?
                    `sm:mt-20 mb-12 lg:text-3xl 2xl:text-4xl sm:text-2xl text-md font-Montserrat text-center font-medium lg:w-[70%] w-[85%] mx-auto z-0 fade-in` :
                    "sm:mt-20 mt-12 sm:ml-10 mx-10 sm:text-2xl text-xl font-Montserrat invisible text-right font-medium"}>
                    <h1 className={(currentTheme === 'dark' ? "text-[var(--dm-third-color)]" : "text-[var(--lm-third-color)]")
                        + " text-5xl xl:text-7xl font-extrabold font-Montserrat sm:mb-10 mb-4"} translate="no">
                        {t('contact:header')}</h1>
                    <span className="mr-2 w-fit">{t('contact:outro-1')}</span>
                    <h2 className={currentTheme === "dark" ? "badge font-extrabold 2xl:text-4xl md:text-2xl text-sm 2xl:p-5 md:p-4 p-2 md:m-2 m-1 sm:badge-lg badge-sm badge-outline w-fit uppercase text-[var(--dm-secondary-color)] hover:text-[var(--dm-third-color)] border-[var(--dm-secondary-color)] hover:border-[var(--dm-third-color)] ease-in-out duration-300" : "badge font-extrabold 2xl:text-4xl md:text-2xl text-sm 2xl:p-5 md:p-4 p-2 md:m-2 m-1 sm:badge-lg badge-sm badge-outline w-fit uppercase text-[var(--lm-secondary-color)] hover:text-[var(--lm-third-color)] border-[var(--lm-secondary-color)] hover:border-[var(--lm-third-color)] ease-in-out duration-300"} translate="no">Full-Stack Development</h2>
                    <div className={currentTheme === "dark" ? "badge font-extrabold 2xl:text-4xl md:text-2xl text-sm 2xl:p-5 md:p-4 p-2 md:m-2 m-1 sm:badge-lg badge-sm badge-outline w-fit uppercase text-[var(--dm-secondary-color)] hover:text-[var(--dm-third-color)] border-[var(--dm-secondary-color)] hover:border-[var(--dm-third-color)] ease-in-out duration-300" : "badge font-extrabold 2xl:text-4xl md:text-2xl text-sm 2xl:p-5 md:p-4 p-2 md:m-2 m-1 sm:badge-lg badge-sm badge-outline w-fit uppercase text-[var(--lm-secondary-color)] hover:text-[var(--lm-third-color)] border-[var(--lm-secondary-color)] hover:border-[var(--lm-third-color)] ease-in-out duration-300"} translate="no"><p className="w-fit px-2 ease-in-out delay-100 duration-300"> UI/UX </p> Design</div>
                    <div className={currentTheme === "dark" ? "badge font-extrabold 2xl:text-4xl md:text-2xl text-sm 2xl:p-5 md:p-4 p-2 md:m-2 m-1 sm:badge-lg badge-sm badge-outline w-fit uppercase text-[var(--dm-secondary-color)] hover:text-[var(--dm-third-color)] border-[var(--dm-secondary-color)] hover:border-[var(--dm-third-color)] ease-in-out duration-300" : "badge font-extrabold 2xl:text-4xl md:text-2xl text-sm 2xl:p-5 md:p-4 p-2 md:m-2 m-1 sm:badge-lg badge-sm badge-outline w-fit uppercase text-[var(--lm-secondary-color)] hover:text-[var(--lm-third-color)] border-[var(--lm-secondary-color)] hover:border-[var(--lm-third-color)] ease-in-out duration-300"} translate="no">Start-Up</div>
                    <div className={currentTheme === "dark" ? "badge font-extrabold 2xl:text-4xl md:text-2xl text-sm 2xl:p-5 md:p-4 p-2 md:m-2 m-1 sm:badge-lg badge-sm badge-outline w-fit uppercase text-[var(--dm-secondary-color)] hover:text-[var(--dm-third-color)] border-[var(--dm-secondary-color)] hover:border-[var(--dm-third-color)] ease-in-out duration-300" : "badge font-extrabold 2xl:text-4xl md:text-2xl text-sm 2xl:p-5 md:p-4 p-2 md:m-2 m-1 sm:badge-lg badge-sm badge-outline w-fit uppercase text-[var(--lm-secondary-color)] hover:text-[var(--lm-third-color)] border-[var(--lm-secondary-color)] hover:border-[var(--lm-third-color)] ease-in-out duration-300"}>{t('contact:topic-1')}</div>
                    <div className={currentTheme === "dark" ? "badge font-extrabold 2xl:text-4xl md:text-2xl text-sm 2xl:p-5 md:p-4 p-2 md:m-2 m-1 sm:badge-lg badge-sm badge-outline w-fit uppercase text-[var(--dm-secondary-color)] hover:text-[var(--dm-third-color)] border-[var(--dm-secondary-color)] hover:border-[var(--dm-third-color)] ease-in-out duration-300" : "badge font-extrabold 2xl:text-4xl md:text-2xl text-sm 2xl:p-5 md:p-4 p-2 md:m-2 m-1 sm:badge-lg badge-sm badge-outline w-fit uppercase text-[var(--lm-secondary-color)] hover:text-[var(--lm-third-color)] border-[var(--lm-secondary-color)] hover:border-[var(--lm-third-color)] ease-in-out duration-300"} >{t('contact:topic-2')}<p className="w-fit hover:line-through px-2 ease-in-out delay-100 duration-300"> tech </p> {t('contact:topic-3')}</div>
                    <div className={currentTheme === "dark" ? "badge font-extrabold 2xl:text-4xl md:text-2xl text-sm 2xl:p-5 md:p-4 p-2 md:m-2 m-1 sm:badge-lg badge-sm badge-outline w-fit uppercase text-[var(--dm-secondary-color)] hover:text-[var(--dm-third-color)] border-[var(--dm-secondary-color)] hover:border-[var(--dm-third-color)] ease-in-out duration-300" : "badge font-extrabold 2xl:text-4xl md:text-2xl text-sm 2xl:p-5 md:p-4 p-2 md:m-2 m-1 sm:badge-lg badge-sm badge-outline w-fit uppercase text-[var(--lm-secondary-color)] hover:text-[var(--lm-third-color)] border-[var(--lm-secondary-color)] hover:border-[var(--lm-third-color)] ease-in-out duration-300"} >{t('contact:topic-4')}</div>
                    <div className={currentTheme === "dark" ? "badge font-extrabold 2xl:text-4xl md:text-2xl text-sm 2xl:p-5 md:p-4 p-2 md:m-2 m-1 sm:badge-lg badge-sm badge-outline w-fit uppercase text-[var(--dm-secondary-color)] hover:text-[var(--dm-third-color)] border-[var(--dm-secondary-color)] hover:border-[var(--dm-third-color)] ease-in-out duration-300" : "badge font-extrabold 2xl:text-4xl md:text-2xl text-sm 2xl:p-5 md:p-4 p-2 md:m-2 m-1 sm:badge-lg badge-sm badge-outline w-fit uppercase text-[var(--lm-secondary-color)] hover:text-[var(--lm-third-color)] border-[var(--lm-secondary-color)] hover:border-[var(--lm-third-color)] ease-in-out duration-300"}><p className="w-fit hover:line-through pr-2 ease-in-out delay-100 duration-300" translate="no"> Cocktail </p> {t('contact:topic-5')}</div>
                    <span className="mr-2 w-fit"> {t('contact:outro-2')}</span>
                </div>
                <div className="flex items-end justify-between sm:mx-6 lg:mx-12 xl:mx-32 2xl:mx-60">
                    {drawingIsVisible &&
                        <div className="flex flex-col h-[20rem] sm:h-[30rem] justify-between items-center pb-4 sm:pb-10 sm:pt-20 md:pt-32">
                            <ul className={(currentTheme === 'dark' && contactVisitedDark === 0) || (currentTheme === 'light' && contactVisitedLight === 0) ? "linkButton-fade-in-animation flex flex-col md:flex-row sm:flex-wrap gap-4 sm:gap-6 items-center sm:pl-16 pl-14 z-30" : "fade-in flex flex-col md:flex-row sm:flex-wrap gap-4 sm:gap-6 items-start sm:pl-16 pl-14 z-30"}>
                                <li>
                                    <a href="https://github.com/JensMatthiaschk"
                                        target="_newBrowserTab"
                                        rel="noopener">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            className={(currentTheme === 'dark' ? "hover:drop-shadow-[0_0_10px_#275e74]" : "hover:drop-shadow-[0_0_7px_var(--lm-third-color)]") + " bi bi-github w-12 hover:w-14 sm:w-14 hover:sm:w-16 lg:w-16 hover:lg:w-20 hover:lg:-m-2 hover:-m-1 ease-in-out duration-300 transform-gpu"}
                                            viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/jensmatthiaschk"
                                        target="_newBrowserTab"
                                        rel="noopener">
                                        <svg className={(currentTheme === 'dark' ? "hover:drop-shadow-[0_0_10px_#275e74]" : "hover:drop-shadow-[0_0_7px_var(--lm-third-color)]") + " bi bi-linkedin w-12 hover:w-14 sm:w-14 hover:sm:w-16 lg:w-16 hover:lg:w-20 hover:lg:-m-2 hover:-m-1 ease-in-out duration-300 transform-gpu"}
                                            viewBox="0 0 48 48"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM16.9605 19.8778H11.5216V36.2196H16.9605V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM36.5754 26.8497C36.5754 21.8303 33.8922 19.4941 30.3131 19.4941C27.4254 19.4941 26.1326 21.0802 25.4107 22.1929V19.8783H19.9711C20.0428 21.4117 19.9711 36.22 19.9711 36.22H25.4107V27.0934C25.4107 26.605 25.446 26.1178 25.5898 25.7681C25.9829 24.7924 26.8779 23.7822 28.3805 23.7822C30.3494 23.7822 31.1365 25.2807 31.1365 27.4767V36.2196H36.5752L36.5754 26.8497Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <label htmlFor="emailModal">
                                        <svg version="1.1"
                                            id="Capa_1"
                                            className={(currentTheme === 'dark' ? "hover:drop-shadow-[0_0_10px_#275e74]" : "hover:drop-shadow-[0_0_7px_var(--lm-third-color)]") + " bi bi-envelope-fill w-12 hover:w-14 sm:w-14 hover:sm:w-16 lg:w-16 hover:lg:w-20 hover:lg:-m-2 hover:-m-1 ease-in-out duration-300 transform-gpu"}
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            viewBox="0 0 64 64"
                                            xmlSpace="preserve"
                                            fill="currentColor">
                                            <g>
                                                <g>
                                                    <g id="circle_10_">
                                                        <g>
                                                            <path d="M33.475,36.652c-0.781,0.781-2.046,0.781-2.828,0l-1.58-1.58L22.985,41h18.102l-6.08-5.879L33.475,36.652z M44.206,23
					H19.891L32,35L44.206,23z M18,24.006V41h2.061l7.528-7.405L18,24.006z M44.061,41H46V24.128l-9.468,9.467L44.061,41z M32,0
					C14.327,0,0,14.327,0,32s14.327,32,32,32s32-14.327,32-32S49.673,0,32,0z M48,41c0,1.104-0.896,2-2,2H18c-1.104,0-2-0.896-2-2
					V23c0-1.104,0.896-2,2-2h28c1.104,0,2,0.896,2,2V41z"/>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </label>
                                </li>
                                <li className={(currentTheme === 'dark' ? "hover:drop-shadow-[0_0_10px_#275e74]" : "hover:drop-shadow-[0_0_7px_var(--lm-third-color)]") + " w-12 hover:w-14 sm:w-14 hover:sm:w-16 lg:w-16 hover:lg:w-20 hover:lg:-m-2 hover:-m-1 ease-in-out duration-300 transform-gpu"}>
                                    <a href="https://www.imdb.com/name/nm4456056/" target="_newBrowserTab" rel="noopener">
                                        <svg

                                            viewBox="0 0 393.16406 393.16406"
                                            xmlSpace="preserve"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnssvg="http://www.w3.org/2000/svg"><defs
                                            /><g
                                                transform="translate(-65.480451,-53.354375)"><path
                                                    fill="CurrentColor"
                                                    d="M 262.06248,53.354375 A 196.58209,196.58209 0 0 0 65.480451,249.9364 196.58209,196.58209 0 0 0 262.06248,446.51843 196.58209,196.58209 0 0 0 458.64451,249.9364 196.58209,196.58209 0 0 0 262.06248,53.354375 Z M 180.92771,193.29578 c 8.9125,-0.025 18.06406,-3.9e-4 19.41406,0.0996 0.2,1 0.4,2.00156 0.5,3.10156 1,6.7 1.89883,13.39961 2.79883,20.09961 0.7,5.1 1.50117,10.19922 2.20117,15.19922 0.6,4.3 1.2,8.60078 2,12.80078 l 6.59961,-51.30078 h 37.59961 c 0.2,0.8 0.3,110.20078 0,111.30078 -8.1,0.1 -16.4,0.0996 -25,0.0996 v -73.40039 h -0.19922 c -3.3,24.4 -6.60039,48.90039 -9.90039,73.40039 h -18.09961 c -3.5,-24.1 -6.90039,-48.19922 -10.40039,-72.19922 h -0.20117 v 72.19922 h -25.19922 c -0.2,-0.7 -0.29961,-109.29922 -0.0996,-111.19922 0.4,-0.1 9.07383,-0.17617 17.98633,-0.20117 z m -54.98633,0.0996 h 28.79883 v 111.30078 h -28.79883 z m 135.40039,0 c 10.9,0.1 21.79922,0.10117 32.69922,0.20117 5.1,0.1 10.30078,0.40039 15.30078,1.40039 4.6,1 8.79961,2.69922 12.09961,6.19922 3,3.2 4.90039,7.00039 5.40039,11.40039 0.6,5.2 0.69883,10.49883 0.79883,15.79883 0.1,15.4 0.1,30.80078 0,46.30078 0,4.1 -0.29961,8.20078 -0.59961,12.30078 -0.2,2.6 -0.70078,5.1 -1.80078,7.5 -1.8,3.9 -4.89922,6.4 -8.69922,8 -2.8,1.1 -5.69922,1.69844 -8.69922,1.89844 -3.9,0.2 -7.70156,0.40039 -11.60156,0.40039 -11.5,0.1 -22.89844,0 -34.39844,0 h -1.30078 V 193.49695 c 0.3,0 0.60078,-0.10156 0.80078,-0.10156 z m 72.79883,0.10156 h 27.70117 c 0,0.4 0.0996,0.79922 0.0996,1.19922 v 23.59961 1.09961 c 0.1,0 0.0992,0.002 0.19922,0.10156 l 1.09961,-1.10156 c 4.2,-4.3 9.20117,-6.4 15.20117,-6.5 3.7,0 7.19961,0.4 10.59961,2 4.8,2.1 7.59961,5.90039 8.59961,10.90039 0.5,2.5 0.5,5.09961 0.5,7.59961 0.1,9.7 0,19.4 0,29 v 19.60156 c 0,3.7 -0.29883,7.29844 -0.79883,10.89844 -0.7,5 -3.30039,8.70039 -7.40039,11.40039 -4,2.7 -8.40117,3.60117 -13.20117,3.20117 -5.4,-0.5 -9.8,-3.00039 -13.5,-6.90039 -0.3,-0.6 -0.69883,-1.09961 -1.29883,-1.59961 -0.6,2.4 -1.20078,4.59883 -1.80078,6.79883 h -26 z m -44.59961,19 c -0.2,1.5 -0.10039,72.29922 0.0996,73.19922 1.8,0 3.60078,-0.0992 5.30078,-0.69922 1.5,-0.5 2.49883,-1.5 2.79883,-3 0.2,-0.7 0.30039,-1.50117 0.40039,-2.20117 0.5,-3.1 0.5,-6.30039 0.5,-9.40039 v -45.5 c 0,-2.4 -0.0988,-4.79922 -0.29883,-7.19922 -0.2,-2.2 -1.2,-3.9 -3.5,-4.5 -1.7,-0.6 -3.40078,-0.69922 -5.30078,-0.69922 z m 76.86719,15.50586 c -0.54844,-0.0438 -1.14258,0.0184 -1.76758,0.19336 -1,0.3 -1.7,0.90039 -2,1.90039 -0.2,0.7 -0.40039,1.49922 -0.40039,2.19922 -0.1,2.4 -0.29883,4.69961 -0.29883,7.09961 v 39.30078 c 0,1.5 -3.9e-4,2.90039 0.0996,4.40039 0.1,1.6 0.29961,3.09961 0.59961,4.59961 0.2,1.1 0.80039,1.90078 1.90039,2.30078 2.4,1 4.59922,-0.10117 5.19922,-2.70117 0.1,-0.3 0.10156,-0.59883 0.10156,-0.79883 0.1,-2.1 0.39844,-4.20078 0.39844,-6.30078 0.1,-6.9 0.10156,-13.90039 0.10156,-20.90039 v -21.69922 c 0,-2.2 -0.10156,-4.4 -0.60156,-6.5 -0.45,-1.875 -1.68672,-2.9625 -3.33203,-3.09375 z" /><g
                                                    transform="translate(-9.7231042,4.8096602)" /></g>
                                        </svg>
                                    </a>
                                </li>
                                <li><p className="md:hidden block text-xs pt-2">© {year}</p></li>
                            </ul>
                            <div className={((currentTheme === "dark" && contactVisitedDark === 0) || (currentTheme === "light" && contactVisitedLight === 0) ?
                                "linkButton-fade-in-animation" : "fade-in") +
                                " flex flex-col sm:text-sm text-[0.5rem] w-38 sm:ml-10 ml-3"}>
                                <p className="md:block hidden" translate="no">Jens Matthiaschk © {year}</p>
                                <p className={(currentTheme === "dark" && contactVisitedDark === 0) || (currentTheme === "light" && contactVisitedLight === 0) ?
                                    "linkButton-fade-in-animation" : "hidden"}>Drawing by ai-draw.tokyo</p>
                            </div>
                        </div>}
                    <div ref={drawingRef} className="flex relative h-[20rem] sm:h-[30rem]">
                        {(contactVisitedDark === 0 && currentTheme === 'dark' && drawingIsVisible && PortraitDark) || (contactVisitedLight === 0 && currentTheme === "light" && drawingIsVisible && PortraitLight) ?
                            <>
                                <div
                                    className={(currentTheme === "dark" ?
                                        "bg-[var(--dm-glow-color)] sm:shadow-[0_0_140px_130px_var(--dm-glow-color)] shadow-[0_0_90px_70px_var(--dm-glow-color)]" :
                                        "bg-[var(--lm-glow-color)] sm:shadow-[0_0_140px_130px_var(--lm-glow-color)] shadow-[0_0_90px_70px_var(--lm-glow-color)]") +
                                        " glow-animation absolute sm:bottom-[14rem] bottom-[8rem] right-[6rem] sm:right-[11rem] sm:w-[8rem] w-[3rem] sm:h-[8rem] h-[3rem] rounded-full transform-gpu"}
                                ></div>
                                <Image
                                    priority
                                    className="portrait-animation sm:h-[24rem] h-[12rem] max-w-fit z-10 absolute bottom-0 sm:right-6 right-2"
                                    src={currentTheme === "dark" ? PortraitDark : PortraitLight}
                                    alt="Portrait-image"
                                />
                                <Image
                                    priority
                                    className="drawing-animation sm:h-[24.6rem] h-[12.4rem] max-w-fit z-20 absolute -bottom-[0.1rem] sm:right-[1rem] right-[0.2rem]"
                                    src={currentTheme === "dark" ? DrawingDark : DrawingLight}
                                    alt="Drawing-Animation"
                                    unoptimized
                                />
                            </>
                            : drawingIsVisible && (PortraitLight || PortraitDark) &&
                            <>
                                <div
                                    className={(currentTheme === "dark" ?
                                        "bg-[var(--dm-glow-color)] sm:shadow-[0_0_140px_130px_var(--dm-glow-color)] shadow-[0_0_90px_70px_var(--dm-glow-color)]" :
                                        "bg-[var(--lm-glow-color)] sm:shadow-[0_0_140px_130px_var(--lm-glow-color)] shadow-[0_0_90px_70px_var(--lm-glow-color)]") +
                                        " glow-fade-in transform-gpu absolute sm:bottom-[14rem] bottom-[8rem] right-[6rem] sm:right-[11rem] sm:w-[8rem] w-[3rem] sm:h-[8rem] h-[3rem] rounded-full"}
                                ></div>
                                <Image
                                    priority
                                    className="fade-in sm:h-[24rem] h-[12rem] max-w-fit z-10 absolute bottom-0 sm:right-6 right-2"
                                    src={currentTheme === "dark" ? PortraitDark : PortraitLight}
                                    alt="Portrait-image"
                                />
                            </>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
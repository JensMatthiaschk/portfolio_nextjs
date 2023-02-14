import { ThemeContext } from "./ThemeContext.jsx"
import { useContext} from "react"
import { Link } from "react-scroll"
import { useTranslation } from 'next-i18next'

export default function NavButtons() {

    const { currentTheme, sectionActive, setSectionActive } = useContext(ThemeContext);
    let i = '';
    const { t } = useTranslation();

    const menuDots = [
        { section: t("about:section_title", { returnObjects: true }) },
        { section: t("experience:section_title", { returnObjects: true }) },
        { section: t("projects:projects.section_title", { returnObjects: true }) },
        { section: t("contact:section_title", { returnObjects: true }) }
    ];

    return (
        <>
            {currentTheme === 'dark' ?
                <ul className="flex flex-col justify-center h-screen items-end fixed sm:right-5 right-3 gap-y-3 z-40">
                    {menuDots?.map((dot, i) =>
                        <li key={`nav-dot-dm-${i}`}>
                            <Link onClick={() => setSectionActive(dot.section)} to={dot.section} spy={true} smooth={true} offset={dot.offset} duration={500}>
                                <div dot-description={dot.section} className={sectionActive === dot.section ? "dot-section text-xs lg:w-[1rem] lg:h-[1rem] w-[0.8rem] h-[0.8rem] rounded-full bg-[var(--dm-secondary-color)] ease-in-out delay-100 duration-300 border-[1.5px] border-solid border-[var(--dm-secondary-color)] -mr-[0.1rem] sm:-mr-[0.08rem] lg:-mr-[0.05rem]"
                                    : "dot-section text-xs lg:w-[0.9rem] lg:h-[0.9rem] hover:lg:w-[1rem] hover:lg:h-[1rem] w-[0.6rem] hover:w-[0.8rem] h-[0.6rem] hover:h-[0.8rem] rounded-full hover:bg-[var(--dm-secondary-color)] ease-in-out delay-50 duration-300 bg-transparent border-[1.5px] border-solid border-[var(--dm-secondary-color)] hover:-mr-[0.1rem] hover:sm:-mr-[0.08rem] hover:lg:-mr-[0.05rem]"}>
                                </div>
                            </Link>
                        </li>
                    )}
                </ul> :
                <ul className="flex flex-col justify-center h-screen items-end fixed sm:right-5 right-3 gap-y-3 z-40">
                    {menuDots?.map((dot, i) =>
                        <li key={`nav-dot-lm-${i}`}>
                            <Link onClick={() => setSectionActive(dot.section)} to={dot.section} spy={true} smooth={true} offset={dot.offset} duration={500}>
                                <div dot-description={dot.section} className={sectionActive === dot.section ? "dot-section text-xs lg:w-[1rem] lg:h-[1rem] w-[0.8rem] h-[0.8rem] rounded-full bg-[var(--lm-secondary-color)] ease-in-out delay-100 duration-300 border-[1.5px] border-solid border-[var(--lm-secondary-color)] -mr-[0.1rem] sm:-mr-[0.08rem] lg:-mr-[0.05rem]"
                                    : "dot-section text-xs lg:w-[0.9rem] lg:h-[0.9rem] hover:lg:w-[1rem] hover:lg:h-[1rem] w-[0.6rem] hover:w-[0.8rem] h-[0.6rem] hover:h-[0.8rem] rounded-full hover:bg-[var(--lm-secondary-color)] ease-in-out delay-50 duration-300 bg-transparent border-[1.5px] border-solid border-[var(--lm-secondary-color)] hover:-mr-[0.1rem] hover:sm:-mr-[0.08rem] hover:lg:-mr-[0.05rem]"}>
                                </div>
                            </Link>
                        </li>
                    )}
                </ul>
            }
        </>
    )
}
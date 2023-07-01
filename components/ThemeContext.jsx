import { useState, createContext, useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeContextProvider = (props) => {
    const [currentTheme, rawSetCurrentTheme] = useState('light')
    const [sectionActive, setSectionActive] = useState()
    const [contactVisitedLight, setContactVisitedLight] = useState(0)
    const [contactVisitedDark, setContactVisitedDark] = useState(0)
    const [loading, setLoading] = useState(false)
    const [currentScreenWidth, setScreenwidth] = useState()

    const setCurrentTheme = (value) => {
        rawSetCurrentTheme(value);
        // Persist it on update
        window.localStorage.setItem('theme', value);
    };

    useEffect(() => {
        let prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        const localTheme = localStorage.getItem("theme");
        if (localTheme === "dark" || localTheme === "light") {
            rawSetCurrentTheme(localTheme)
        } else if (prefersDarkScheme.matches) rawSetCurrentTheme("dark");
    }, [])

    //LISTEN ON RESIZING SCREEN
    useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenwidth(window.innerWidth)
        })
    }, [])

    // console.log(`${currentTheme}` + "-theme")

    return (
        <ThemeContext.Provider value={{
            currentTheme, setCurrentTheme,
            sectionActive, setSectionActive,
            contactVisitedLight, setContactVisitedLight,
            contactVisitedDark, setContactVisitedDark,
            loading, setLoading,
            currentScreenWidth, setScreenwidth
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
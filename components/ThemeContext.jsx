import { useState, createContext, useEffect } from 'react'
// import { ThemeProvider } from 'next-themes'

export const ThemeContext = createContext()

export const ThemeContextProvider = (props) => {
    let prefersDarkScheme = null;
    const [currentTheme, setCurrentTheme] = useState('light')
    const [sectionActive, setSectionActive] = useState()
    const [contactVisitedLight, setContactVisitedLight] = useState(0)
    const [contactVisitedDark, setContactVisitedDark] = useState(0)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        let prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        const localTheme = localStorage.getItem("theme");
        if (localTheme === "dark" || localTheme === "light") {
            setCurrentTheme(localTheme)
            document.body.classList.toggle(`${localTheme}` + "-theme");
        } else if (prefersDarkScheme.matches) setCurrentTheme("dark");
    }, [])

    console.log(`${currentTheme}` + "-theme")
    console.log('prefersDarkScheme', prefersDarkScheme)


    return (
                <ThemeContext.Provider value={{
                    currentTheme, setCurrentTheme,
                    sectionActive, setSectionActive,
                    contactVisitedLight, setContactVisitedLight,
                    contactVisitedDark, setContactVisitedDark,
                    loading, setLoading
                }}>
                    {props.children}
                </ThemeContext.Provider>
            )
}

            export default ThemeContextProvider
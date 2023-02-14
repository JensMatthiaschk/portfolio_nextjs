import { useState, createContext, useEffect } from 'react'
// import { ThemeProvider } from 'next-themes'

// function getInitialColorMode() {
//     const persistedColorPreference = window.localStorage.getItem('color-mode');
//     const hasPersistedPreference = typeof persistedColorPreference === 'string';
//     // If the user has explicitly chosen light or dark,
//     // let's use it. Otherwise, this value will be null.
//     if (hasPersistedPreference) {
//         return persistedColorPreference;
//     }
//     // If they haven't been explicit, let's check the media
//     // query
//     const mql = window.matchMedia('(prefers-color-scheme: dark)');
//     const hasMediaQueryPreference = typeof mql.matches === 'boolean';
//     if (hasMediaQueryPreference) {
//         return mql.matches ? 'dark' : 'light';
//     }
//     // If they are using a browser/OS that doesn't support
//     // color themes, let's default to 'light'.
//     return 'light';
// }

export const ThemeContext = createContext()

export const ThemeContextProvider = (props) => {
    let prefersDarkScheme = null;
    const [currentTheme, rawSetCurrentTheme] = useState('light')
    const [sectionActive, setSectionActive] = useState()
    const [contactVisitedLight, setContactVisitedLight] = useState(0)
    const [contactVisitedDark, setContactVisitedDark] = useState(0)
    const [loading, setLoading] = useState(false)


    const setCurrentTheme = (value) => {
        rawSetCurrentTheme(value);
        // Persist it on update
        window.localStorage.setItem('theme', value);
    };


    // useEffect(() => {
    //     let prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    //     const localTheme = localStorage.getItem("theme");
    //     if (localTheme === "dark" || localTheme === "light") {
    //         rawSetCurrentTheme(localTheme)
    //         document.body.classList.toggle(`${localTheme}` + "-theme");
    //     } else if (prefersDarkScheme.matches) rawSetCurrentTheme("dark");
    // }, [])

    useEffect(() => {
        let prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        const localTheme = localStorage.getItem("theme");
        if (prefersDarkScheme.matches && localTheme === "dark") {
            rawSetCurrentTheme(localTheme)
            document.body.classList.toggle("dark-theme");
        } else if (prefersDarkScheme.matches && localTheme === "light") {
            rawSetCurrentTheme(localTheme)
            document.body.classList.toggle("light-theme");
        }
        else if (!prefersDarkScheme.matches && localTheme === "dark") {
            rawSetCurrentTheme(localTheme)
            document.body.classList.toggle("dark-theme");
        }
        else if (!prefersDarkScheme.matches && localTheme === "light") {
            rawSetCurrentTheme(localTheme)
            document.body.classList.toggle("dark-theme")
        }
        else if (prefersDarkScheme.matches) rawSetCurrentTheme("dark")
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
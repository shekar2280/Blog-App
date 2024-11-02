"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

// To store the theme of the background beacuse if we use useState it will always give light theme
const getFromLocalStorage = () => {
    if (typeof window !== "undefined") {  // Corrected typeof check
        const value = localStorage.getItem("theme");
        return value || "light"; // Return "light" if no theme is found
    }
    return "light"; // Fallback for server-side rendering
};

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage();
    });

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return <ThemeContext.Provider value={{theme, toggle}} >{children}</ThemeContext.Provider>
}
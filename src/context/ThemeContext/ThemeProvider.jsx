'use client';

import { useState, useEffect } from 'react';
import ThemeContext from './themeContext';

export function ThemeProvider({ children, defaultTheme = 'light', defaultBrand = 'default' }) {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? storedTheme : defaultTheme;
    }); // light/dark

    
    const [brand, setBrand] = useState(() => {
        const storedBrand = localStorage.getItem('brand');
        return storedBrand ? storedBrand : defaultBrand;
    }); // default, brandA, brandB

    useEffect(() => {
        // On mount, check local storage for theme
        const storedTheme = localStorage.getItem('theme');
        const storedBrand = localStorage.getItem('brand');
        if (storedTheme) setTheme(storedTheme);
        if (storedBrand) setBrand(storedBrand);
    }, []);

    useEffect(() => {
        // Store theme in local storage
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Apply theme class to <html>
    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, [theme]);

    // Apply brand attribute to <html>
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', brand);
    }, [brand]);

    // Toggle light/dark
    const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, brand, setBrand }}>
            {children}
        </ThemeContext.Provider>
    );
}

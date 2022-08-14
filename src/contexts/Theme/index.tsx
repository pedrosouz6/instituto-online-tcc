import { createContext, useState, ReactNode, useEffect } from "react";
import { ThemeProvider } from 'styled-components';
import { parseCookies, setCookie } from 'nookies';

import light from '../../../styles/themes/light';
import dark from '../../../styles/themes/dark';

interface ContextThemeType {
    title: string,
    toggleTheme(): void
}

interface ProviderThemeProps {
    children: ReactNode
}

export const ContextTheme = createContext({} as ContextThemeType);

export default function ProviderTheme({ children }: ProviderThemeProps) {

    const [ theme, setTheme ] = useState(light);

    function toggleTheme() {
        setCookie(null, 'theme', theme.title === 'light' ? 'light' : 'dark', {
            maxAge: 30 * 24 * 60 * 60
        })

        setTheme(theme.title === 'light' ? dark : light);
    }

    useEffect(() => {
        const { ['theme']: isThemeExist } = parseCookies(null);

        if(isThemeExist) {
            setTheme(isThemeExist === 'light' ? dark : light);
        }
    }, []);

    return (
        <ContextTheme.Provider value={{
            toggleTheme,
            title: theme.title
        }}>
            <ThemeProvider theme={theme}>

                { children }    
                
            </ThemeProvider>
        </ContextTheme.Provider>
    )
}
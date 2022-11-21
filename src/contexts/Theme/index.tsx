import { createContext, useState, ReactNode, useEffect } from "react";
import { ThemeProvider } from 'styled-components';
import { parseCookies, setCookie } from 'nookies';

import light from '../../../styles/themes/light';
import dark from '../../../styles/themes/dark';

interface ContextThemeType {
    title: string,
    toggleTheme(themeChoose: string): void
}

interface ProviderThemeProps {
    children: ReactNode
}

export const ContextTheme = createContext({} as ContextThemeType);

export default function ProviderTheme({ children }: ProviderThemeProps) {

    const [ theme, setTheme ] = useState(light);

    function toggleTheme(themeChoose: string) {
        setCookie(null, 'theme', themeChoose, {
            maxAge: 30 * 24 * 60 * 60
        })

        setTheme(themeChoose === 'dark' ? dark : light);
    }

    useEffect(() => {
        const { ['theme']: isThemeExist } = parseCookies(null);

        if(isThemeExist) {
            setTheme(isThemeExist === 'light' ? light : dark);
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
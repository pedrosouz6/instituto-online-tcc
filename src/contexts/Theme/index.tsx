import { createContext, useState, ReactNode } from "react";
import { ThemeProvider } from 'styled-components';

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
        setTheme(theme.title === 'light' ? dark : light);
    }

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
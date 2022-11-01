import { useEffect, useState, createContext, ReactNode } from 'react';
import { axios } from '../../axios';

interface ContextHelpProps {
    help: HelpType[],
    toggleRepeatCallApi: () => void
}

interface ProviderHelpProps {
    children: ReactNode
}

interface HelpType {
    id: string,
    title: string,
    description: string,
    status: string,
    date: string
}

interface HelpApiRespost {
    error: boolean,
    message: string,
    results: HelpType[]
}

export const ContextHelp = createContext({} as ContextHelpProps);

export default function ProviderHelp({ children }: ProviderHelpProps) {

    const [ help, setHelp ] = useState<HelpType[]>([]);
    const [ repeatCallApi, setRepeatCallApi ] = useState<boolean>(false);

    useEffect(() => {
        async function getHelp() {
            const response = await axios.get('/get-called');
            const respost: HelpApiRespost = await response.data;
            setHelp(respost.results);
        }

        getHelp();
    }, [repeatCallApi]);


    function toggleRepeatCallApi() {
        setRepeatCallApi(!repeatCallApi);
    }

    return (
        <ContextHelp.Provider value={{
            help,
            toggleRepeatCallApi
        }}>

            { children }

        </ContextHelp.Provider>
    )
}
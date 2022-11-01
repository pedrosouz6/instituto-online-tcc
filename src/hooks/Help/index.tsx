import { useContext } from 'react';
import { ContextHelp } from '../../contexts/Help';

export function useHelp() {
    return useContext(ContextHelp);
}
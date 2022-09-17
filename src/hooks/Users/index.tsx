import { useContext } from 'react';
import { ContextUsers } from '../../contexts/Users';

export function useUsers() {
    return useContext(ContextUsers);
}
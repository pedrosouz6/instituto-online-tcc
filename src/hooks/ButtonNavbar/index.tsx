import { ContextButtonNavbar } from '../../contexts/ButtonNavbar';
import { useContext } from 'react';

export function useButtonNavbar() {
    return useContext(ContextButtonNavbar);
}
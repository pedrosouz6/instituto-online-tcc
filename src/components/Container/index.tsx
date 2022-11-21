import { ReactNode } from 'react';

import { useButtonNavbar } from '../../hooks/ButtonNavbar';

import { ContainerCenter } from "./style";

interface ContainerProps {
    children: ReactNode
}

export function Container({ children }: ContainerProps) {

    const { isMiniNavbar } = useButtonNavbar();

    return (
        <ContainerCenter isMiniNavbar={isMiniNavbar}>
            { children }
        </ContainerCenter>
    )
}
import { ReactNode } from 'react';

import { useButtonNavbar } from '../../hooks/ButtonNavbar';

import { ContainerCenter, DesignerContainer } from "./style";

interface ContainerProps {
    children: ReactNode
}

export function Container({ children }: ContainerProps) {

    const { isMiniNavbar } = useButtonNavbar();

    return (
        <ContainerCenter isMiniNavbar={isMiniNavbar}>
            { children }
            <DesignerContainer isMiniNavbar={isMiniNavbar} />
        </ContainerCenter>
    )
}
import { useTheme } from '../../../hooks/Theme';

import { BsSunFill } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import { IoMdArrowDropup } from 'react-icons/io';

import { 
    ContainerItemsThemeHeader, 
    ItemsItemsThemeHeader,
    ButtonIndicatorHeader
} from "./style";

export function ItemsThemeHeader() {

    const { toggleTheme } = useTheme();

    return (
        <ContainerItemsThemeHeader>
            <ItemsItemsThemeHeader>
                <button onClick={() => toggleTheme('light')}> <i><BsSunFill /></i>Modo Claro</button>
                <button onClick={() => toggleTheme('dark')}> <i><MdDarkMode /></i>Modo Escuro</button>
            </ItemsItemsThemeHeader>
            <ButtonIndicatorHeader>
                <IoMdArrowDropup />
            </ButtonIndicatorHeader>
        </ContainerItemsThemeHeader>
    )
}
import { useState } from "react";

import { ButtonTheme } from "../ButtonTheme";
import { ItemsHeader } from "./ItemsHeader";

import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

import { 
    ContainerHeader,
    UserHeader,
    ImageUserHeader,
    UserHeaderButton
} from "./style";

export function Header() {

    const [ isItemsHeader, setisItemsHeader ] = useState<boolean>(false);

    return (
        <ContainerHeader>
            <ButtonTheme/>
            <UserHeader>
                <ImageUserHeader onClick={() => setisItemsHeader(!isItemsHeader)} />
                <UserHeaderButton onClick={() => setisItemsHeader(!isItemsHeader)}>
                    { isItemsHeader ? <IoIosArrowUp /> : <IoIosArrowDown />} 
                </UserHeaderButton>
                { isItemsHeader && <ItemsHeader /> }
            </UserHeader>
        </ContainerHeader>
    )
}
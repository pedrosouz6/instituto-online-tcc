import { 
    ContainerHeader,
    UserHeader,
    ImageUserHeader,
    InfoUserHeader
} from "./style";

import { ButtonTheme } from "../ButtonTheme";

export function Header() {
    return (
        <ContainerHeader>
            <ButtonTheme/>
            <UserHeader>
                <ImageUserHeader>
                </ImageUserHeader>
                <InfoUserHeader>
                    <p><strong>Pedro</strong></p>
                    <p>pedro@gmail.com</p>
                </InfoUserHeader>
            </UserHeader>
        </ContainerHeader>
    )
}
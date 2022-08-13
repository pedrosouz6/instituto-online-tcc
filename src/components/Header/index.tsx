import { 
    ContainerHeader,
    UserHeader,
    ImageUserHeader,
    InfoUserHeader
} from "./style";

import { Container } from "../../../styles/style";
import { ButtonTheme } from "../ButtonTheme";

import { toggleThemeType } from "../../../pages";

export function Header({ toggleTheme, title }: toggleThemeType) {
    return (
        <Container>
            <ContainerHeader>
                <ButtonTheme toggleTheme={toggleTheme} title={title} />
                <UserHeader>
                    <ImageUserHeader>
                    </ImageUserHeader>
                    <InfoUserHeader>
                        <p><strong>Pedro</strong></p>
                        <p>pedro@gmail.com</p>
                    </InfoUserHeader>
                </UserHeader>
            </ContainerHeader>
        </Container>
    )
}
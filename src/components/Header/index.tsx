import { 
    ContainerHeader,
    UserHeader,
    ImageUserHeader,
    InfoUserHeader
} from "./style";

import { ButtonTheme } from "../ButtonTheme";
import { useUsers } from "../../hooks/Users";

export function Header() {

    const { user } = useUsers();

    return (
        <ContainerHeader>
            <ButtonTheme/>
            <UserHeader>
                <ImageUserHeader>
                </ImageUserHeader>
                <InfoUserHeader>
                    <p><strong>{ user.name }</strong></p>
                    <p>{ user.email }</p>
                </InfoUserHeader>
            </UserHeader>
        </ContainerHeader>
    )
}
import { Title } from "../../Title";
import { 
    ContainerModalNewCalled,
    ModalModalNewCalled,
    HeaderModalNewCalled,
    FormModalNewCalled,
    FormButtonModalNewCalled
} from "./style";

interface ModalNewCalledProps {
    closeModalNewCalled: () => void    
}

export function ModalNewCalled({ closeModalNewCalled }: ModalNewCalledProps) {
    return (
        <ContainerModalNewCalled>
            <ModalModalNewCalled>
                <HeaderModalNewCalled>
                    <h3>Descreva seu problema</h3>

                    <button onClick={() => closeModalNewCalled()}> x </button>
                </HeaderModalNewCalled>

                <FormModalNewCalled>
                    <label htmlFor="title">Título do problema</label>
                    <input type="text" id="title" />

                    <label htmlFor="subject">Faça um breve resumo sobre o seu problema</label>
                    <textarea id="subject" />

                    <FormButtonModalNewCalled type="submit">
                        Enviar
                    </FormButtonModalNewCalled>
                </FormModalNewCalled>

            </ModalModalNewCalled>
        </ContainerModalNewCalled>
    )
}
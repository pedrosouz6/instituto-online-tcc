import { AxiosError } from "axios";
import { FormEvent, useState } from "react";
import { axios } from "../../../axios";
import { useHelp } from "../../../hooks/Help";
import { useMessageModal } from "../../../hooks/ModalMessage";
import { useUsers } from "../../../hooks/Users";
import { Title } from "../../Title";
import { 
    ContainerModalNewCalled,
    ModalModalNewCalled,
    HeaderModalNewCalled,
    FormModalNewCalled,
    FormButtonModalNewCalled
} from "./style";

interface ModalNewCalledProps {
    closeModalNewCalled: () => void,
    toggleRepeatCallApi: () => void
}

interface RespostApiNewCall {
    error: boolean,
    message: string,
}

export function ModalNewCalled({ closeModalNewCalled, toggleRepeatCallApi }: ModalNewCalledProps) {

    const { user } = useUsers();

    const { ErrorModalMessage, ShowModalMessage, TextModalMessage } = useMessageModal();
    
    const [ title, setTitle ] = useState<string>('');
    const [ description, setDescription ] = useState<string>('');

    const [ wrongTitle, setWrongTitle ] = useState<string | null>(null)
    const [ wrongDescription, setWrongDescription ] = useState<string | null>(null)

    function validationFields(e: FormEvent) {
        e.preventDefault();

        setWrongTitle(null);
        setWrongDescription(null);

        if(title.trim() === '' && description.trim() === '') {
            setWrongDescription('Faça um resumo, para nos ajudar');
            return setWrongTitle('Qual o título?');
        }

        if(!title.trim()) {
            return setWrongTitle('Qual o título?');
        }

        if(!description.trim()) {
            return setWrongDescription('Faça um resumo, para nos ajudar.');
        }

        if(title.trim().length > 100) {
            return setWrongTitle(`O título deve ser menor ou igual a 100 caracteres.`);
        }

        if(description.trim().length > 250) {
            return setWrongDescription(`A descrição deve ser menor ou igual a 250 caracteres.`);
        }

        createNewCall();
    }

    async function createNewCall() {
        try {
            const response = await axios.post(`/new-called/`, {
                id: user.id,
                description,
                title
            });

            const respost: RespostApiNewCall = await response.data;

            ShowModalMessage(true);
            TextModalMessage(respost.message);
            ErrorModalMessage(respost.error);
            toggleRepeatCallApi();
            closeModalNewCalled();

        } catch(err) {
            const error = err as AxiosError<RespostApiNewCall>;
            ShowModalMessage(true);
            TextModalMessage(error.response?.data.message);
            ErrorModalMessage(error.response?.data.error);
            closeModalNewCalled();
        }
    }

    return (    
        <ContainerModalNewCalled>
            <ModalModalNewCalled>
                <HeaderModalNewCalled>
                    <h3>Descreva seu problema</h3>

                    <button onClick={() => closeModalNewCalled()}> x </button>
                </HeaderModalNewCalled>

                <FormModalNewCalled 
                onSubmit={e => validationFields(e)}
                wrongDescription={wrongDescription}
                wrongTitle={wrongTitle}
                >
                    <label htmlFor="title">Título do problema</label>
                    <input 
                    type="text" 
                    id="title"
                    placeholder="Ex: Instituto Online"
                    value={title}
                    onChange={e => setTitle(e.target.value)} />

                    { wrongTitle && <p>{ wrongTitle }</p> }

                    <label htmlFor="description">Faça um breve resumo sobre o seu problema</label>
                    <textarea 
                    id="description"
                    placeholder="Ex: Não estou encontrando algo"
                    value={description}
                    onChange={e => setDescription(e.target.value)} />

                    { wrongDescription && <p>{ wrongDescription }</p> }


                    <FormButtonModalNewCalled type="submit">
                        Enviar
                    </FormButtonModalNewCalled>
                </FormModalNewCalled>

            </ModalModalNewCalled>
        </ContainerModalNewCalled>
    )
}
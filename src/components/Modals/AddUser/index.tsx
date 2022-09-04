import { FormEvent, useState } from 'react';

import { IoMdClose } from 'react-icons/io';

import InputMask from 'react-input-mask';

import { ErrorIndicator } from '../../ErrorIndicator';

import { 
    ContainerModalAddUser,
    ModalModalAddUser,
    HeaderModalAddUser,
    FormModalAddUser,
    ContainerButtonSendFormModalAddUser,
    FormInputModalAddUser,
    FormContainerInputModalAddUser,
    FormContainerInputsModalAddUser,
    ErrorMessageModalAddUser
} from "./style";

interface ModalAddUserProps {
    toggleModalAddUser: () => void
}

export function ModalAddUser({ toggleModalAddUser }: ModalAddUserProps) {

    const [ name, setName ] = useState<string>('');
    const [ date, setDate ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ tel, setTel ] = useState<string>('');
    const [ cep, setCep ] = useState<string>('');

    const [ isNameCorrect, setIsNameCorrect ] = useState<boolean>(true);
    const [ isDateCorrect, setIsDateCorrect ] = useState<boolean>(true);
    const [ isEmailCorrect, setIsEmailCorrect ] = useState<boolean>(true);
    const [ isPasswordCorrect, setIsPasswordCorrect ] = useState<boolean>(true);
    const [ isTelCorrect, setIsTelCorrect ] = useState<boolean>(true);
    const [ isCepCorrect, setIsCepCorrect ] = useState<boolean>(true);

    const [ messageInputs, setMessageInputs ] = useState<string>('');  

    const [ inputsEmpty, setInputsEmpty ] = useState<boolean>(false);

    function createUser(e: FormEvent) {
        e.preventDefault();

        setIsCepCorrect(true);
        setIsDateCorrect(true);
        setIsEmailCorrect(true);
        setIsNameCorrect(true);
        setIsPasswordCorrect(true);

        const validateEmail: RegExp = /\S+@\S+\.\S+/;

        if(!(name.trim() && date.trim() && password.trim() && email.trim() && cep.trim() && tel.trim())){
            return setInputsEmpty(true);
        } 

        setInputsEmpty(false);

        if(name.length < 2) {
            setIsNameCorrect(false);
            return setMessageInputs('O nome tem que ter mais de 1 letra');
        }

        setIsNameCorrect(true);

        console.log(validateEmail)

        if(!validateEmail.test(email)) {
            setIsEmailCorrect(false);
            return setMessageInputs('O e-mail não está no seu devido formato');
        }

        setIsEmailCorrect(true);
    }

    return (
        <ContainerModalAddUser>
            <ModalModalAddUser>
                <HeaderModalAddUser>
                    <h3>Criar um novo usuário</h3>
                    <button onClick={() => toggleModalAddUser()}><i><IoMdClose /></i></button>
                </HeaderModalAddUser>

                <FormModalAddUser onSubmit={e => createUser(e)}>

                    <FormContainerInputsModalAddUser>
                        <FormContainerInputModalAddUser>
                            <label htmlFor="name">Nome</label>
                            <FormInputModalAddUser>
                                <input 
                                type="text" 
                                id="name" 
                                placeholder='Nome'
                                value={name}
                                onChange={e => setName(e.target.value)} />

                                { !isNameCorrect && <ErrorIndicator text={messageInputs} /> }
                            </FormInputModalAddUser>
                        </FormContainerInputModalAddUser>

                        <FormContainerInputModalAddUser>
                            <label htmlFor="date">Data de nascimento</label> 
                            <FormInputModalAddUser>
                                <input 
                                type="date" 
                                id='date' 
                                value={date}
                                onChange={e => setDate(e.target.value)}
                                />

                                <ErrorIndicator text="O nome está errado" />
                            </FormInputModalAddUser>
                        </FormContainerInputModalAddUser>

                        <FormContainerInputModalAddUser>
                            <label htmlFor="email">E-mail</label>
                            <FormInputModalAddUser>
                                <input 
                                type="email" 
                                id="email" 
                                placeholder='E-mail'
                                value={email}
                                onChange={e => setEmail(e.target.value)} />

                                { !isEmailCorrect && <ErrorIndicator text={messageInputs} /> }
                            </FormInputModalAddUser>
                        </FormContainerInputModalAddUser>

                        <FormContainerInputModalAddUser>
                            <label htmlFor="password">Senha</label>
                            <FormInputModalAddUser>
                                <input 
                                type="password" 
                                id="password" 
                                placeholder='Senha'
                                value={password}
                                onChange={e => setPassword(e.target.value)} />

                                <ErrorIndicator text="O senha está errado" />
                            </FormInputModalAddUser>
                        </FormContainerInputModalAddUser>

                        <FormContainerInputModalAddUser>
                            <label htmlFor="tel">Telefone</label>
                            <FormInputModalAddUser>
                                <InputMask
                                id='tel'
                                placeholder='Telefone'
                                mask="(99) 99999-9999"
                                value={tel}
                                onChange={e => setTel(e.target.value)} />

                                <ErrorIndicator text="O telefone está errado" />
                            </FormInputModalAddUser>
                        </FormContainerInputModalAddUser>

                        <FormContainerInputModalAddUser>
                            <label htmlFor="cpf">CPF</label>
                            <FormInputModalAddUser>
                                <InputMask
                                id='cpf'
                                placeholder='CPF'
                                mask="999.999.999-99"
                                value={cep}
                                onChange={e => setCep(e.target.value)} />

                                <ErrorIndicator text="O cpf está errado" />
                            </FormInputModalAddUser>
                        </FormContainerInputModalAddUser>
                    </FormContainerInputsModalAddUser>

                    { 
                        inputsEmpty && 
                        <ErrorMessageModalAddUser> 
                            Preencha o(s) campo(s) acima 
                        </ErrorMessageModalAddUser> 
                    } 

                    <ContainerButtonSendFormModalAddUser>
                        <input type="submit" value="Criar" />
                    </ContainerButtonSendFormModalAddUser>
                </FormModalAddUser>
            </ModalModalAddUser>
        </ContainerModalAddUser>
    )
}
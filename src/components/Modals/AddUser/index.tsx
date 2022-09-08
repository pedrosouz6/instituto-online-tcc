import { FormEvent, useState } from 'react';

import { IoMdClose } from 'react-icons/io';

import InputMask from 'react-input-mask';

import { ErrorIndicator } from '../../ErrorIndicator';
import { NameValidation } from './Validations/Name'; 
import { EmailValidation } from './Validations/Email';
import { PasswordValidation } from './Validations/Password';
import { TelValidation } from './Validations/Tel';
import { CPFValidation } from './Validations/CPF';
import { DateValidation } from './Validations/Date';
import { Button } from '../../Button';

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

export interface ValidationReturn {
    message: string;
    error: boolean
} 

export function ModalAddUser({ toggleModalAddUser }: ModalAddUserProps) {

    const [ name, setName ] = useState<string>('');
    const [ date, setDate ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ tel, setTel ] = useState<string>('');
    const [ CPF, setCPF ] = useState<string>('');

    const [ isNameCorrect, setIsNameCorrect ] = useState<boolean>(true);
    const [ isDateCorrect, setIsDateCorrect ] = useState<boolean>(true);
    const [ isEmailCorrect, setIsEmailCorrect ] = useState<boolean>(true);
    const [ isPasswordCorrect, setIsPasswordCorrect ] = useState<boolean>(true);
    const [ isTelCorrect, setIsTelCorrect ] = useState<boolean>(true);
    const [ isCPFCorrect, setIsCPFCorrect ] = useState<boolean>(true);

    const [ messageInputs, setMessageInputs ] = useState<string>('');  

    const [ inputsEmpty, setInputsEmpty ] = useState<boolean>(false);

    function createUser(e: FormEvent) {
        e.preventDefault();

        setIsTelCorrect(true);
        setIsCPFCorrect(true);
        setIsDateCorrect(true);
        setIsEmailCorrect(true);
        setIsNameCorrect(true);
        setIsPasswordCorrect(true);

        if(!(
            name.trim() && 
            date.trim() && 
            password.trim() && 
            email.trim() && 
            CPF.trim() && 
            tel.trim())) 
            { return setInputsEmpty(true); }  

        setInputsEmpty(false);

        const validatedName = NameValidation(name);
        if(validatedName.error) {
            setIsNameCorrect(false);
            return setMessageInputs(validatedName.message);
        }

        const validatedDate = DateValidation(date);
        if(validatedDate.error) {
            setIsDateCorrect(false);
            return setMessageInputs(validatedDate.message);
        }

        const validatedEmail = EmailValidation(email);
        if(validatedEmail.error) {
            setIsEmailCorrect(false);
            return setMessageInputs(validatedEmail.message);
        }

        const validatedPassword = PasswordValidation(password);
        if(validatedPassword.error) {
            setIsPasswordCorrect(false);
            return setMessageInputs(validatedPassword.message);
        }

        const validatedCPF = CPFValidation(CPF);
        if(validatedCPF.error) {
            setIsCPFCorrect(false);
            return setMessageInputs(validatedCPF.message);
        }

        const validatedTel = TelValidation(tel); 
        if(validatedTel.error) {
            setIsTelCorrect(false);
            return setMessageInputs(validatedTel.message);
        }
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

                                { !isDateCorrect && <ErrorIndicator text={messageInputs} /> }
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

                                { !isPasswordCorrect && <ErrorIndicator text={messageInputs} /> }
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

                                { !isTelCorrect && <ErrorIndicator text={messageInputs} /> }
                            </FormInputModalAddUser>
                        </FormContainerInputModalAddUser>

                        <FormContainerInputModalAddUser>
                            <label htmlFor="cpf">CPF</label>
                            <FormInputModalAddUser>
                                <InputMask
                                id='cpf'
                                placeholder='CPF'
                                mask="999.999.999-99"
                                value={CPF}
                                onChange={e => setCPF(e.target.value)} />

                                { !isCPFCorrect && <ErrorIndicator text={messageInputs} /> }
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
                        <Button type="submit">Criar</Button>
                    </ContainerButtonSendFormModalAddUser>
                </FormModalAddUser>
            </ModalModalAddUser>
        </ContainerModalAddUser>
    )
}
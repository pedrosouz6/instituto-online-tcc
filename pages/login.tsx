import Head from 'next/head';
import { FormEvent, useState } from 'react';
import { ErrorIndicator } from '../src/components/ErrorIndicator';
import { useMessageModal } from '../src/hooks/ModalMessage';
import { useRouter } from 'next/router';

import { PasswordValidation } from '../src/components/Modals/AddUser/Validations/Password';
import { EmailValidation } from '../src/components/Modals/AddUser/Validations/Email';

import { FaLock } from 'react-icons/fa';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

import { 
    Containerlogin,
    FormLogin,
    FormContainerInputLogin,
    FormInputLogin,
    FormInputIconLogin,
    FormButtonLogin,
    FormEyeLogin,
    MessageIsInputEmpty,
    FormContainerLogin
} from '../styles/pages/login';

import { axios, ErrorAxiosType } from '../src/axios';
import { AxiosError } from 'axios';
import { Title } from '../src/components/Title';

export default function Login() {
    
    const router = useRouter();
    const { TextModalMessage, ErrorModalMessage, ShowModalMessage } = useMessageModal();

    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    const [ isTypePassword, setIsTypePassword ] = useState<boolean>(true);

    const [ isEmailCorrect, setIsEmailCorrect ] = useState<boolean>(true);
    const [ isPasswordCorrect, setIsPasswordCorrect ] = useState<boolean>(true);
    const [ message, setMessage ] = useState<string>('');

    const [ isInputEmpty, setIsInputEmpty ] = useState<boolean>(false);

    function validateForm(e: FormEvent) {
        e.preventDefault();
        setIsEmailCorrect(true);
        setIsPasswordCorrect(true);

        if(!(email.trim() || password.trim())) {
            setIsInputEmpty(true);
            return setMessage('Preecha o(s) campo(s) acima');
        }

        setIsInputEmpty(false);

        const validatedEmail = EmailValidation(email);
        if(validatedEmail.error) {
            setIsEmailCorrect(false);
            return setMessage(validatedEmail.message);
        }

        const validatedPassword = PasswordValidation(password);
        if(validatedPassword.error) {
            setIsPasswordCorrect(false);
            return setMessage(validatedPassword.message);
        }

        makeLogin();
    }

    async function makeLogin() {
        try {
            const response = await axios.post('/login', {
                email,
                password
            })
            const respost: ErrorAxiosType = await response.data;
            
            router.push('/users');
        } catch(err) {
            const error = err as AxiosError<ErrorAxiosType>;
            const datas = error.response?.data;
            ShowModalMessage(true);
            ErrorModalMessage(datas?.error);
            TextModalMessage(datas?.message);
        }
    }

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>

            <Containerlogin>    
                <FormLogin onSubmit={e => validateForm(e)}>
                    <Title text="Entrar na sua conta" />

                    <FormContainerLogin>
                        <FormContainerInputLogin>
                            <label htmlFor='email'>E-mail</label>
                            <FormInputLogin>
                                <input 
                                type='email' 
                                id='email' 
                                placeholder='E-mail'
                                value={email}
                                onChange={e => setEmail(e.target.value)} />

                                <FormInputIconLogin>
                                    <i><MdEmail /></i>
                                </FormInputIconLogin>

                                { !isEmailCorrect && <ErrorIndicator text={message} /> }
                            </FormInputLogin>
                        </FormContainerInputLogin>

                        <FormContainerInputLogin>
                            <label htmlFor='password'>Senha</label>
                            <FormInputLogin>
                                <input 
                                type={isTypePassword ? 'password' : 'text'} 
                                id='password' 
                                placeholder='Senha'
                                value={password}
                                onChange={e => setPassword(e.target.value)} />

                                <FormInputIconLogin>
                                    <i><FaLock /></i>
                                </FormInputIconLogin>

                                <FormEyeLogin isPasswordCorrect={isPasswordCorrect}>
                                    <i onClick={() => setIsTypePassword(!isTypePassword)}>
                                        { isTypePassword ? <AiFillEye /> : <AiFillEyeInvisible /> }
                                    </i>
                                </FormEyeLogin>

                                { !isPasswordCorrect && <ErrorIndicator text={message} /> }
                            </FormInputLogin>
                        </FormContainerInputLogin>

                        <a href="#">Não lembro a senha</a>
                        { isInputEmpty && <MessageIsInputEmpty>Preecha o(s) campo(s) acima</MessageIsInputEmpty> }

                        <FormButtonLogin type="submit" value="Entrar" />
                    </FormContainerLogin>
                </FormLogin>    
            </Containerlogin>
        </>
    )
}

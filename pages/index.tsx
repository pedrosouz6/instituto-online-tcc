import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FormEvent, useState } from 'react';

import { setCookie } from 'nookies';
import { AxiosError } from 'axios';
import { axios, ErrorAxiosType } from '../src/axios';

import { useUsers } from '../src/hooks/Users';
import { User } from '../src/contexts/Users';

import { ErrorIndicator } from '../src/components/ErrorIndicator';
import { useMessageModal } from '../src/hooks/ModalMessage';
import { PasswordValidation } from '../src/components/Modals/AddUser/Validations/Password';
import { EmailValidation } from '../src/components/Modals/AddUser/Validations/Email';
import { Loading } from '../src/components/Loading';

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
    FormContainerLogin,
    FormLogo
} from '../styles/pages/login';

interface RespostLogin {
    message: string,
    error: boolean,
    token: string,
    results: User[]
}

export default function Login() {
    
    const { setUser } = useUsers();
    
    const router = useRouter();
    const { TextModalMessage, ErrorModalMessage, ShowModalMessage } = useMessageModal();

    const [ isLoading, setIsLoading ] = useState<boolean>(false);

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
        setIsLoading(true);

        if(!(email.trim() || password.trim())) {
            setIsInputEmpty(true);
            setIsLoading(false);
            return setMessage('Preecha o(s) campo(s) acima');
        }

        setIsInputEmpty(false);

        const validatedEmail = EmailValidation(email);
        if(validatedEmail.error) {
            setIsLoading(false);
            setIsEmailCorrect(false);
            return setMessage(validatedEmail.message);
        }

        const validatedPassword = PasswordValidation(password);
        if(validatedPassword.error) {
            setIsLoading(false);
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
            });

            const respost: RespostLogin = await response.data;
            setUser(respost.results[0]);
            setCookie(null, 'token_user', respost.token);
            
            setTimeout(() => {
                if(respost.results[0].office === 'administrador') {
                    router.push('/home');
                    return setIsLoading(false);
                } 

                router.push('/help');
                return setIsLoading(false);
                
            }, 500);
        } catch(err) {
            const error = err as AxiosError<ErrorAxiosType>;
            const datas = error.response?.data;
            ShowModalMessage(true);
            ErrorModalMessage(datas?.error);
            TextModalMessage(datas?.message);
            setIsLoading(false);
        }
    }

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>

            { isLoading && <Loading /> }

            <Containerlogin>    
                <FormLogin onSubmit={e => validateForm(e)}>
                    <FormLogo>
                        <Image src='/logogg.png'
                        alt="Logo Instituto Manasses"
                        width={150}
                        height={60} />
                    </FormLogo>

                    <h1>Entrar na sua conta</h1>

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

                        { isInputEmpty && <MessageIsInputEmpty>Preecha o(s) campo(s) acima</MessageIsInputEmpty> }

                        <FormButtonLogin type="submit">Entrar</FormButtonLogin>
                    </FormContainerLogin>
                </FormLogin>    
            </Containerlogin>
        </>
    )
}
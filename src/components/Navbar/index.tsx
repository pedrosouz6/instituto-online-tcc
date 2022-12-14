import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { AiOutlineMenu } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import { AiFillTool } from 'react-icons/ai';
import { IoMdHelp } from 'react-icons/io';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { HiDocumentDuplicate } from 'react-icons/hi';
import { SiMinutemailer } from 'react-icons/si';
import { MdOutlineComputer } from 'react-icons/md';
import { FaMoneyCheck } from 'react-icons/fa';
import { MdScreenSearchDesktop } from 'react-icons/md';
import { HiHome } from 'react-icons/hi';
import { TbDeviceAnalytics } from 'react-icons/tb';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

import { useUsers } from '../../hooks/Users';
import { useButtonNavbar } from '../../hooks/ButtonNavbar';

import { 
    ContainerNavbar,
    MenuNavbar,
    ItemsNavbar,
    ContainerLogo,
    ContainerMiniNavbar,
    ItemTitleNavbar,
    FeitoPorNavbar
} from "./style";
import Image from 'next/image';

export function Navbar() {

    const { pathname } = useRouter();

    const { isMiniNavbar, savePreferenceUser, setIsMiniNavbar } = useButtonNavbar();
    const { userType } = useUsers();

    const [ isMenuResponsive, setIsMenuResponsive ] = useState<boolean>(false);

    function toggleMenuResponsive() {
        setIsMiniNavbar(false);
        setIsMenuResponsive(!isMenuResponsive);
    }

    return (
        <>
            <MenuNavbar isMenuResponsive={isMenuResponsive} isMiniNavbar={isMiniNavbar} >
                <button onClick={() => toggleMenuResponsive()}>
                    <i><AiOutlineMenu /></i>
                </button>
            </MenuNavbar>
            <ContainerNavbar isMenuResponsive={isMenuResponsive} isMiniNavbar={isMiniNavbar}>
                <ContainerLogo>
                    { isMiniNavbar ? 
                    <Image src='/loogo.png'
                        alt="Logo Instituto Manasses"
                        width={40}
                        height={30} /> : 
                        <Image src='/logo_branca.png'
                        alt="Logo Instituto Manasses"
                        width={70}
                        height={50} /> 
                    }
                </ContainerLogo>

                <ItemsNavbar isMiniNavbar={isMiniNavbar} >
                    <ul>


                        {
                            userType === 'administrador' &&
                            <li>
                                <Link href="/home">
                                    <a className={pathname === '/home' ? 'active' : ''}> 
                                        <i><HiHome /></i> <span>Home</span>
                                    </a>
                                </Link>
                            </li>
                        }

                        {
                            userType === 'administrador' &&
                            <li>
                                <Link href="/users">
                                    <a className={pathname === '/users' ? 'active' : ''}> 
                                        <i><FaUsers /></i>
                                        <span>Usuários</span>
                                    </a>
                                </Link>
                            </li>
                        }
                        <li>
                            <Link href="/help">
                                <a className={pathname === '/help' ? 'active' : ''}>
                                    <i><IoMdHelp /></i> 
                                    <span>Ajuda</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </ItemsNavbar>

                <ItemsNavbar isMiniNavbar={isMiniNavbar}>
                    <ul>
                        <ItemTitleNavbar> <i><TbDeviceAnalytics /></i> <span>Dashboard</span></ItemTitleNavbar>

                        <li>
                            <Link href="/calendar">
                                <a className={pathname === '/calendar' ? 'active' : ''}> 
                                    <i><BsFillCalendarEventFill /></i> 
                                    <span>Agenda</span>
                                </a>
                            </Link>
                        </li>
                        {
                            userType === 'administrador' &&
                                <li>
                                    <Link href="/docs">
                                        <a className={pathname === '/docs' ? 'active' : ''}> 
                                            <i><HiDocumentDuplicate /></i> 
                                            <span>Documentos</span>
                                        </a>
                                    </Link>
                                </li>
                        }
                    </ul>
                </ItemsNavbar>

                <ContainerMiniNavbar isMenuResponsive={isMenuResponsive}>
                    <button onClick={() => savePreferenceUser()}>
                        <i> { isMiniNavbar ? <IoIosArrowForward /> :  <IoIosArrowBack /> }</i>
                    </button>
                </ContainerMiniNavbar>

                { !isMiniNavbar &&
                    <FeitoPorNavbar>
                        Feito por: <strong>Instituto Online</strong>
                    </FeitoPorNavbar>
                }
            </ContainerNavbar>
        </>
    )
}
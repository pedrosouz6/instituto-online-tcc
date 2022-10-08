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
    ContainerMiniNavbar
} from "./style";

export function Navbar() {

    const { pathname } = useRouter();

    const { isMiniNavbar, savePreferenceUser, setIsMiniNavbar } = useButtonNavbar();
    const { userType } = useUsers();
    console.log(userType); 

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
                    <h1>{ isMiniNavbar ? "L" : "Logo" }</h1>
                </ContainerLogo>

                <ItemsNavbar isMiniNavbar={isMiniNavbar} >
                    <ul>
                        <li> <i><HiHome /></i> <span>Home</span></li>
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
                            <Link href="/appearance">
                                <a className={pathname === '/appearance' ? 'active' : ''}>  
                                    <i><MdScreenSearchDesktop /></i> 
                                    <span>Aparência</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/settings">
                                <a className={pathname === '/settings' ? 'active' : ''}> 
                                    <i><AiFillTool /></i> 
                                    <span>Configurações</span>
                                </a>
                            </Link>
                        </li>
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
                        <li> <i><TbDeviceAnalytics /></i> <span>Dashboard</span></li>

                        <li>
                            <Link href="/calendar">
                                <a className={pathname === '/calendar' ? 'active' : ''}> 
                                    <i><BsFillCalendarEventFill /></i> 
                                    <span>Agenda</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/docs">
                                <a className={pathname === '/docs' ? 'active' : ''}> 
                                    <i><HiDocumentDuplicate /></i> 
                                    <span>Documentos</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sendEmail"> 
                                <a className={pathname === '/sendEmail' ? 'active' : ''}> 
                                    <i><SiMinutemailer /></i> 
                                    <span>Disparos de E-mails</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/invoicing">
                                <a className={pathname === 'invoicing' ? 'active' : ''}> 
                                    <i><FaMoneyCheck /></i> 
                                    <span>Faturamento</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </ItemsNavbar>

                <ContainerMiniNavbar isMenuResponsive={isMenuResponsive}>
                    <button onClick={() => savePreferenceUser()}>
                        <i> { isMiniNavbar ? <IoIosArrowForward /> :  <IoIosArrowBack /> }</i>
                    </button>
                </ContainerMiniNavbar>

            </ContainerNavbar>
        </>
    )
}
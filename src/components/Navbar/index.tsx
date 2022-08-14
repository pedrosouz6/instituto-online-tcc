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

import { 
    ContainerNavbar,
    MenuNavbar,
    ItemsNavbar,
    ContainerLogo
} from "./style";

export function Navbar() {

    const { pathname } = useRouter();

    const [ menuResponsive, setMenuResponsive ] = useState(false);

    return (
        <>
            <MenuNavbar isResponsive={menuResponsive}>
                <button onClick={() => setMenuResponsive(!menuResponsive)}>
                    <i><AiOutlineMenu /></i>
                </button>
            </MenuNavbar>
            <ContainerNavbar isResponsive={menuResponsive}>
                <ContainerLogo>
                    <h1>logo</h1>
                </ContainerLogo>

                <ItemsNavbar>
                    <ul>
                        <li> <i><HiHome /></i> Home</li>
                        <li>
                            <Link href="/">
                                <a className={pathname === '/users' ? 'active' : ''}> 
                                    <i><FaUsers /></i>
                                    Usuários
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/appearance">
                                <a className={pathname === '/appearance' ? 'active' : ''}>  
                                    <i><MdScreenSearchDesktop /></i> 
                                    Aparência
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/settings">
                                <a className={pathname === '/settings' ? 'active' : ''}> 
                                    <i><AiFillTool /></i> 
                                    Configurações
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/help">
                                <a className={pathname === '/help' ? 'active' : ''}>
                                    <i><IoMdHelp /></i> 
                                    Ajuda
                                </a>
                            </Link>
                        </li>
                    </ul>
                </ItemsNavbar>

                <ItemsNavbar>
                    <ul>
                        <li> <i><TbDeviceAnalytics /></i> Dashboard</li>

                        <li>
                            <Link href="/calendar">
                                <a className={pathname === '/calendar' ? 'active' : ''}> 
                                    <i><BsFillCalendarEventFill /></i> 
                                    Agenda
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/docs">
                                <a className={pathname === '/docs' ? 'active' : ''}> 
                                    <i><HiDocumentDuplicate /></i> 
                                    Documentos
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sendEmail"> 
                                <a className={pathname === '/sendEmail' ? 'active' : ''}> 
                                    <i><SiMinutemailer /></i> 
                                    Disparos de E-mails
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/textEditor">
                                <a className={pathname === '/textEditor' ? 'active' : ''}> 
                                    <i><MdOutlineComputer /></i> 
                                    Editor de texto
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/invoicing">
                                <a className={pathname === 'invoicing' ? 'active' : ''}> 
                                    <i><FaMoneyCheck /></i> 
                                    Faturamento
                                </a> 
                            </Link>
                        </li>
                    </ul>
                </ItemsNavbar>
            </ContainerNavbar>
        </>
    )
}
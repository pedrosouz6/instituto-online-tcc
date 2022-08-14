import { useState } from 'react';

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
                        <li><a> <i><FaUsers /></i> Usuários</a></li>
                        <li><a> <i><MdScreenSearchDesktop /></i> Aparência</a></li>
                        <li><a> <i><AiFillTool /></i> Configurações</a></li>
                        <li><a> <i><IoMdHelp /></i> Ajuda</a></li>
                    </ul>
                </ItemsNavbar>

                <ItemsNavbar>
                    <ul>
                        <li> <i><TbDeviceAnalytics /></i> Dashboard</li>
                        <li><a> <i><BsFillCalendarEventFill /></i> Agenda</a></li>
                        <li><a> <i><HiDocumentDuplicate /></i> Documentos</a></li>
                        <li><a> <i><SiMinutemailer /></i> Disparos de E-mails</a></li>
                        <li><a> <i><MdOutlineComputer /></i> Editor de texto</a></li>
                        <li><a> <i><FaMoneyCheck /></i> Faturamento</a></li>
                    </ul>
                </ItemsNavbar>
            </ContainerNavbar>
        </>
    )
}
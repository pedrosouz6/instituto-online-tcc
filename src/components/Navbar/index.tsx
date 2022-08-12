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

import { 
    ContainerNavbar,
    MenuNavbar,
    ItemsNavbar
} from "./style";

export function Navbar() {
    return (
        <ContainerNavbar>
            <h1>logo</h1>
            <MenuNavbar>
                <h4>Menu</h4>
                <button>
                    <i><AiOutlineMenu /></i>
                </button>
            </MenuNavbar>

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
                    <li>Dashboard</li>
                    <li><a> <i><BsFillCalendarEventFill /></i> Agenda</a></li>
                    <li><a> <i><HiDocumentDuplicate /></i> Documentos</a></li>
                    <li><a> <i><SiMinutemailer /></i> Disparos de E-mails</a></li>
                    <li><a> <i><MdOutlineComputer /></i> Editor de texto</a></li>
                    <li><a> <i><FaMoneyCheck /></i> Faturamento</a></li>
                </ul>

            </ItemsNavbar>
        </ContainerNavbar>
    )
}
import { MdError } from 'react-icons/md';
import { IoMdArrowDropup } from 'react-icons/io';
import { ContainerErrorIndicator } from './style';

interface ErrorIndicatorProps {
    text: string
}

export function ErrorIndicator({ text }: ErrorIndicatorProps) {
    return (
        <ContainerErrorIndicator>
            <i><MdError /></i>

            <span>
                { text }

                <i><IoMdArrowDropup /></i>
            </span>
        </ContainerErrorIndicator>
    )
}
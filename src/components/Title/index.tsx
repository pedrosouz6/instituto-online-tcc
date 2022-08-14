import { ComponentTitle } from './style';

interface TitleProps {
    text: string
}

export function Title({ text }: TitleProps) {
    return (
        <ComponentTitle>{ text }</ComponentTitle>
    )
}
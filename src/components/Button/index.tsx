import { ButtonHTMLAttributes } from "react";

import { ComponentButton } from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
    return (
        <ComponentButton {...props} />
    )
}
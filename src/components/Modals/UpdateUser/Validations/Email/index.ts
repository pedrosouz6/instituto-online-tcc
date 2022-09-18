import { ValidationReturn } from "../..";

export function EmailValidation(email: string): ValidationReturn {
    const validateEmail: RegExp = /\S+@\S+\.\S+/;

    if(email.length > 250) {
        return { error: true, message: "O e-mail é muito extenso" };
    }

    if(validateEmail.test(email)) {
        return { error: false, message: "O e-mail está correto" };
    }

    return { error: true, message: "O e-mail está errado" };
} 
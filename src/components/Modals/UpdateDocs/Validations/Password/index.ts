import { ValidationReturn } from "../..";

export function PasswordValidation(password: string): ValidationReturn {
    if(password.length < 5) {
        return { message: 'A senha deve ser maior que 4 caracteres', error: true };
    }

    if(password.length > 31) {
        return { message: 'A senha deve ser menor que 32 caracteres', error: true };
    }

    return { message: 'A senha está correta', error: false };
}
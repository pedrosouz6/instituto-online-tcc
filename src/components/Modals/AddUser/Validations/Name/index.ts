import { ValidationReturn } from "../..";

export function NameValidation(name: string): ValidationReturn {
    
    if(name.length < 2) {
        return { message: "O nome deve ser maior que 1 caracter", error: true };
    }

    if(name.length > 119) {
        return { message: "O nome deve ser menor que 120 caracter", error: true };
    }

    return { message: "O nome está correto", error: false };
}
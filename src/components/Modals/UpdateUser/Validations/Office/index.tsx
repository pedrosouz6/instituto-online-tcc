import { ValidationReturn } from "../..";

export function OfficeValidation(office: string): ValidationReturn {
    if(!(office === 'diretor' || office === 'gestor' || office === 'rh' || office === 'ti' || office === 'usuario' || office === 'administrador')) {
        return { message: 'O cargo não está correto', error: true };
    }

    return { message: 'O cargo está correto', error: false };
}
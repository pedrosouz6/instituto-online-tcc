import { ValidationReturn } from "../..";

export function OfficeValidation(office: string): ValidationReturn {
    if(!(office === 'Balé' || office === 'Creches comunitárias' || office === 'Judô' || office === 'Horta')) {
        return { message: 'O projeto não está correto', error: true };
    }

    return { message: 'O projeto está correto', error: false };
}
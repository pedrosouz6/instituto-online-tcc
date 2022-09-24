import { ValidationReturn } from "../..";

export function OfficeValidation(office: string): ValidationReturn {
    if(!(office === 'fullstack' || office === 'backend' || office === 'frontend' || office === 'devops')) {
        return { message: 'O cargo não está correto', error: true };
    }

    return { message: 'O cargo está correto', error: false };
}
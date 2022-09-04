import { ValidationReturn } from "../..";

export function DateValidation(date: string): ValidationReturn {
    const newDate = new Date().toISOString().split('T')[0];

    const dateNow = newDate.split('-');
    const dateBorn = date.split('-');

    if(dateBorn[0] > dateNow[0]) {
        return { error: true, message: "O ano está incorreto" }; 
    }

    if(dateBorn[0] == dateNow[0] && dateBorn[1] > dateNow[1]) {
        return { error: true, message: "O mes está incorreto" }; 
    }

    return { error: false, message: "" };    
}
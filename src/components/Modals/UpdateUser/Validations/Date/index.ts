import { ValidationReturn } from "../..";

export function DateValidation(date: string): ValidationReturn {
    const newDate = new Date().toISOString().split('T')[0];
    const patternData: RegExp = /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/;

    if(!patternData.test(date)) {
        return { error: true, message: "O formato da data está errado. Ex: YYYY-MM-DD" };
    }

    const dateNow = newDate.split('-');
    const dateBorn = date.split('-');

    if(dateBorn[0] > dateNow[0]) {
        return { error: true, message: `O ano deve ser igual ou menor que ${dateNow[0]}` }; 
    }

    if(dateBorn[0] == dateNow[0] && dateBorn[1] > dateNow[1]) {
        return { error: true, message:  `O mês não pode ser maior que ${dateNow[1]}, em ${dateNow[0]}` }; 
    }

    if(dateBorn[2] > dateNow[2] && dateBorn[1] == dateBorn[1] && dateBorn[0] == dateNow[0]) {
        return { error: true, message:  `O dia não pode ser maior que ${dateNow[2]}, em ${dateNow[1]}/${dateNow[0]}` }; 
    }

    return { error: false, message: "A data está correta" };    
}
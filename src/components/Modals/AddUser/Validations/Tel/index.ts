import { ValidationReturn } from "../..";

export function TelValidation(tel: string): ValidationReturn {
    tel = tel.replace(/\D/g, '');

    if (!(tel.length >= 10 && tel.length <= 11)) {
        return { error: true, message: "O telefone está errado" };
    }

    if (tel.length == 11 && parseInt(tel.substring(2, 3)) != 9) {
        return { error: true, message: "O telefone deve começar pelo número 9" };
    }

    var codigosDDD: Array<number> = 
    [
        11, 12, 13, 14, 15, 16, 17, 18, 19,
        21, 22, 24, 27, 28, 31, 32, 33, 34,
        35, 37, 38, 41, 42, 43, 44, 45, 46,
        47, 48, 49, 51, 53, 54, 55, 61, 62,
        64, 63, 65, 66, 67, 68, 69, 71, 73,
        74, 75, 77, 79, 81, 82, 83, 84, 85,
        86, 87, 88, 89, 91, 92, 93, 94, 95,
        96, 97, 98, 99
    ];

    if (codigosDDD.indexOf(parseInt(tel.substring(0, 2))) == -1) {
        return { error: true, message: "O DDD não é válido" };
    }

    return { error: false, message: "O Telefone está correto" };
}
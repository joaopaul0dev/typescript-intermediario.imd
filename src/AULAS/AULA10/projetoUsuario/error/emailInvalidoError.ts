export class emailInvalidoError implements Error {
    name: string;
    message: string;

    constructor() {
        this.name = "EmailInvalido";
        this.message = "O email fornecido é inválido.";    
    }
    toString() {
        return `${this.name}: ${this.message}`;
    } 

}
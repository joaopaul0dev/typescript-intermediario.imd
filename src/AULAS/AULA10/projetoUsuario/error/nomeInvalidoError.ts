export class nomeInvalidoError implements Error {
    name: string;
    message: string;

    constructor() {
        this.name = "nomeInvalido";
        this.message = "O nome fornecido é inválido.";    
    }
    toString() {
        return `${this.name}: ${this.message}`;
    } 

}
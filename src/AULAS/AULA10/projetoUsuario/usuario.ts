import { emailInvalidoError } from "./error/emailInvalidoError";
import { nomeInvalidoError } from "./error/nomeInvalidoError";

export class Usuario {
    nome: string;
    email: string;

    private constructor(nome: string, email: string) {
        this.nome = nome;
        this.email = email;
    }

    public static criarUsuario(nome: string, email: string){
        //testes ou validações podem ser feitos aqui

        //teste de email
        if (!this.emailInvalido(email)){
            throw new emailInvalidoError(); 
        }
        

        //teste de nome
        if (!this.nomeInvalido(nome)){
            throw new nomeInvalidoError();
        }

        return new Usuario(nome, email);
    }

        
        
    private static emailInvalido(email: string): boolean {
        //lógica para validar email
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(email);
    }

    private static nomeInvalido(nome: string): boolean {
        //lógica para validar nome
        if (nome.length > 10|| nome == ''){
            return false;
        }
        return true;
    }
}
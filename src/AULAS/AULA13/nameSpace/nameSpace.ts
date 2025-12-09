namespace ExemploNamespace {
     //dentro do namespace: variável, função e classe.

    let nome = "João"; //so existe dentro do namespace, nao possui importação externa.

    export function imprimirNome() {
        return nome;
    }

    export class Pessoa {
        constructor(public nome: string) { }
    }
}
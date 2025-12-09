interface Pessoa{
    nome: string;
    idade?: number;
    imprimir?(): void;
}

let p1: Pessoa = {nome: "ze"}

let pessoas: Pessoa [] =[
    {nome: 'João', idade: 16},
    {nome: 'Ana', idade: 25},
    {nome: 'Carlos', idade: 15},
    {nome: 'Beatriz', idade: 32},
    {nome: 'Mariana'}
]

function listaNomesPessoas(p: Pessoa[]){
    p.forEach(prop => console.log(prop.nome + " - " +prop.idade));
} 

class pessoa3 {

}

interface pessoa2 {
    sobrenome: string;
}


//listaNomesPessoas(pessoas);
class Funcioanrio extends pessoa3 implements pessoa, pessoa2 {
    cpf: string;
    nome: string;
    anoDeNascimento: number;
    sobrenome: string;

    imprimirNome(): void {
        console.log(`Nome: ${this.nome}`);
    }
}

let f1 = new Funcioanrio();
f1.nome = "ze da silva";
f1.imprimirNome();
//EXEMPLO - 01 - GENERICS

function info<T>(arg:T):T { // atribuicao de variavel de tipo: T 
    return arg
}
//console.log(info<number>(10));
//console.log(typeof(info("texto")));

//EXEMPLO - 02 - GENERICS 

let lista = new Array<string>();
lista.push("texto");
console.log(lista[0].substring(0,3));

//EXEMPLO - 03 - GENERICS RESTRICTION

class Professor implements temNome {
    nome: string;
    
    constructor(nome: String) {
        this.nome = <string>nome;
    }
}

class Aluno0 implements temNome {
    nome: string;
    
    constructor(nome: String) {
        this.nome = <string>nome;
    }
}

interface temNome {
    nome: string;
}

function imprimirNome<T extends temNome>(obj:T) {
    console.log(obj.nome);
}

let p0 = new Professor("carlos");
let a = new Aluno0("Bruno");

imprimirNome<Professor>(p0); 
imprimirNome<Professor>(a);

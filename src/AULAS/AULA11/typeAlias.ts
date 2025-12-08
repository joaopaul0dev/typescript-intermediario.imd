// EXEMPLO - 01 - TYPE ALIAS

type Aluno = {
    nome: string,
    email: string
}

let Aluno1 :{
    nome: "jose",
    email: "jose@gmail.com"
} 

let Aluno2 : Aluno = {
    nome: "Ana",
    email: "Ana@email.com"
}

// EXEMPLO - 02 - TYPE ALIAS

type ID = number | string;

function ImprimirID(id: ID) {
    console.log(`O ID é: ${id}`);
}

imprimirID(123);
imprimirID("ABC123");

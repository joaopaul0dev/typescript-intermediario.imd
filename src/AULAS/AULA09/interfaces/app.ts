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

function listaNomes(p: Pessoa[]){
    p.forEach(prop => console.log(prop.nome + " - " +prop.idade));
} 

listaNomes(pessoas);
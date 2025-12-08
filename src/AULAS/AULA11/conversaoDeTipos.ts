//EXEMPLO - 01 - CONVERSAO DE TIPOS
let codigo: any = 12;
let id = <number>codigo;
let id2 = codigo as number;

//EXEMPLO 02 

class ContaBancaria {
    saldo:number;
}

class ContaInvestimento extends ContaBancaria {
    aplicacao:number;
}
let conta: ContaBancaria = new ContaInvestimento();
let cont2 = <ContaInvestimento>conta;
let conta3 = conta as ContaInvestimento;
conta.saldo

//EXEMPLO 03

let txt: string = "12";
let numero = parseInt(txt) //transforma valor de txt em number.
console.log(typeof(numero))

let num2: number = 23
let txt2: string = num2.toString() //transforma valor de num 2 em string.
console.log(typeof(txt2))

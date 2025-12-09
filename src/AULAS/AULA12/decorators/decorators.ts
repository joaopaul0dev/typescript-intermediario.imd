@exemploDecoratorClasse
class pessoa {
    constructor() {
     console.log("Objeto criado");   
    }
}

function exemploDecoratorClasse(constructor:Function) {
    console.log("Classe decorada: ", constructor);
}

//@teste()
//sacar(valor: number) {
//    this.saldo -= valor;
//    console.log(`Saque realizado. Novo saldo: ${this.saldo}`);
//}

//@validacao()
//public _valor: number;
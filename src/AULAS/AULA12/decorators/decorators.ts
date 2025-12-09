function dataDecorator<T extends { new(...args: any[]): {} }>(constructor: T): T {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args);
            console.log("Inicio da execução do decorator");
            console.log(`Data: ${new Date().getDate()}`);
            console.log("Fim da execução do decorator");
        }
    }
}

function exemploDecoratorClasse(constructor: Function) {
    console.log(constructor);
}

@dataDecorator
class pessoa {
    constructor() {
        console.log("Objeto criado");
    }
}

new pessoa();
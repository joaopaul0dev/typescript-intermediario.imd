import { Brinquedo } from "./brinquedo";

export class barco extends Brinquedo {

    public mover(): void {
        console.log('navegando... ');
    }
}
//a resposta ao metodo mover atua de tres formas diferentes em tres objetos diferentes nisso se da a capacidade do polimorfismo.
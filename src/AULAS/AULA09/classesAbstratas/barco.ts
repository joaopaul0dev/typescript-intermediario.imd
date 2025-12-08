import { brinquedo } from "./brinquedo";

export class barco extends brinquedo{
    versao: number;

    constructor(velocidade: number){
        super(velocidade);
    }

    mover(): void {
        console.log("O barco está navegando");
    }
}

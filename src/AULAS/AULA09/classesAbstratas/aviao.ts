import { brinquedo } from "./brinquedo";

export class Aviao extends brinquedo{
    versao: number;

    mover(): void {
        console.log("O avião está voando");
    }
}
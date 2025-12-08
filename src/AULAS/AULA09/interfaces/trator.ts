import { brinquedo } from "../classesAbstratas/brinquedo";

export class trator extends brinquedo implements mobilidade { 
   
    andarPraFrente(): void { // Implementação do método da interface
        console.log("Trator andando pra frente");
    }
    andarPraTras(): void {
        console.log("Trator andando pra trás");
    }
    virarDireita(graus: number): void {
        console.log(`Trator virando à direita ${graus} graus`);
    }
    virarEsquerda(graus: number): void {
        console.log(`Trator virando à esquerda ${graus} graus`);
    }
    parar(): void {
        console.log("Trator parando");
    }

    versao: number; // Implementação da propriedade abstrata

    constructor(velocidade: number){
        super(velocidade);
    }

    mover(): void {
        console.log("O trator está se movendo");
    }
}
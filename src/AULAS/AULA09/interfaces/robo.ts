export class robo implements mobilidade {
    andarPraFrente(): void {
        console.log("Andando pra frente");
    }
    andarPraTras(): void {
        console.log("Andando pra trás");
    }
    virarDireita(graus: number): void {
        console.log(`Virando à direita ${graus} graus`);
    }
    virarEsquerda(graus: number): void {
        console.log(`Virando à esquerda ${graus} graus`);
    }
    parar(): void {
        console.log("Parando");
    }
} 
//nao e possivel ter dois inicializadores com tipagens diferentes
class PolimorfismoDeSobrecarga{
    /*constructor(potencia: number, torque: number);{}

    constructor();{}*/ //erro: constructor duplicado.

    /*mover(): void {
        console.log("O veículo está se movendo.");    }
        
    mover(distancia: number): void {
        console.log(`O veículo se moveu x metros.`);
    }*/ //erro: mwtodo duplicado.

    constructor(private velocidade: number, args: any){

        if(typeof args === "string"){
            console.log("o arg e string");
        } else if (typeof args === "boolean"){
            console.log("o arg e boolean");
        } else {
            console.log("o arg e outro tipo");
    }
}
}
let teste; // tipagem implícita como 'any'
teste = 10;
teste = "texto";
teste = true;
console.log(teste);

let p = new PolimorfismoDeSobrecarga(1,"oi");
let p2 = new PolimorfismoDeSobrecarga(0, false);
let p3 = new PolimorfismoDeSobrecarga(5, {carro: "sedan"});
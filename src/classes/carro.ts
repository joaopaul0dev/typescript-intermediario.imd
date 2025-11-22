class carro{
    modelo:string;
    cor:string;
    placa:number;
    numDePortas:number;

    //outro inicializador cria e define todos os atributos do objeto carro, podendo ou nao ter o numDePortas definido.
    constructor(modelo:string, cor:string, placa:number, numDePortas?:number){
        this.modelo = modelo;
        this.cor = cor;
        this.placa = placa;

        if(numDePortas == undefined){
            this.numDePortas = 0;
        } else {
            this.numDePortas = numDePortas;
        }
    }
}    
let p = new carro ("fiesta", "branco", 1010, 12)
let p2 = new carro ("CIVIC", "rosinha", 9)
console.log('a cor do carro ${c.modelo} e ${c.cor} com ${c.numDePortas}')
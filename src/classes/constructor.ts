export class carro{
    // inicializador construct cria e define todos os atributos do objeto carro, podendo ou nao ter o numDePortas definido.
    public constructor(
        readonly fabricante:string,
        private _modelo:string,
        private _cor:string,
        private _placa:string,
        private _numDePortas:number){}
        
     
        get numDePortas(): number{
        return this._numDePortas;
    }

        set numDePortas(numDePortas: number){
        if (numDePortas < 2){
            this._numDePortas = 2; 
        } else {
            this._numDePortas = numDePortas;
        }
    }

//usando um metodo para exibir alteraçoes via console
    exibirInformacoes(){
        console.log(
            `Fabricante: ${this.fabricante}
            Modelo: ${this._modelo}
            Cor: ${this._cor}
            Placa: ${this._placa}
            Numero de portas: ${this._numDePortas}`
        )
    }
 
}

let veiculo = new carro("Chevrolet","Onix","Preto","ABC-1234",4);

veiculo.exibirInformacoes();

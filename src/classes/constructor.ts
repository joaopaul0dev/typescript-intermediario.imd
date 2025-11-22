export class carro{
    //outro inicializador cria e define todos os atributos do objeto carro, podendo ou nao ter o numDePortas definido.
    public constructor(
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
 
}


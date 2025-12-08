class carro {
    _Motor: motor; // Composição
    _Direcao: direcao; // Composição
}

class motor {
   private _potencia: number;
   
   public get potencia(): number { //set e get de potencia
        return this._potencia;
    }
    
    public set potencia(value: number) {
        this._potencia = value;
    }
}

class direcao {
    private _direcao: string;

    public get direcao(): string { //set e get de direcao
        return this._direcao;
    }
    
    public set direcao(value: string) {
        this._direcao = value;
    }
}


let carro1 = new carro();
carro1._Motor = new motor();
carro1._Direcao = new direcao();
carro1._Motor.potencia = 150;
carro1._Direcao.direcao = "Hidraulica";

console.log("Potencia do motor: " + carro1._Motor.potencia + " CV");
console.log("Tipo de direcao: " + carro1._Direcao.direcao);
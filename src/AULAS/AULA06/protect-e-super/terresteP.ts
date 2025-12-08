class pTerrestre extends pTransporte {
    private _numRodas: number;

    constructor(numRodas: number, capacidade: number){ {
        super(capacidade);
        this._numRodas = numRodas;
    }
}
}

let transporte = new pTransporte(4); // Não é possível acessar numRodas aqui, pois é excluivo da classe pTerrestre
let terrestre = new pTerrestre(4, 100); // E possível acessar numRodas aqui, pois é exclusivo da classe pTerrestre
console.log(terrestre);
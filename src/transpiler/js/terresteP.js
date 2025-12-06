"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class pTerrestre extends pTransporte {
    _numRodas;
    constructor(numRodas, capacidade) {
        {
            super(capacidade);
            this._numRodas = numRodas;
        }
    }
}
let transporte = new pTransporte(4); // Não é possível acessar numRodas aqui, pois é excluivo da classe pTerrestre
let terrestre = new pTerrestre(4, 100); // E possível acessar numRodas aqui, pois é exclusivo da classe pTerrestre
console.log(terrestre);
//# sourceMappingURL=terresteP.js.map
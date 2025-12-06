"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class carro {
    _Motor; // Composição
    _Direcao; // Composição
}
class motor {
    _potencia;
    get potencia() {
        return this._potencia;
    }
    set potencia(value) {
        this._potencia = value;
    }
}
class direcao {
    _direcao;
    get direcao() {
        return this._direcao;
    }
    set direcao(value) {
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
//# sourceMappingURL=composicao.js.map
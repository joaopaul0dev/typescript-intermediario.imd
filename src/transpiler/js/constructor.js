"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carro = void 0;
class carro {
    fabricante;
    _modelo;
    _cor;
    _placa;
    _numDePortas;
    // inicializador construct cria e define todos os atributos do objeto carro, podendo ou nao ter o numDePortas definido.
    constructor(fabricante, _modelo, _cor, _placa, _numDePortas) {
        this.fabricante = fabricante;
        this._modelo = _modelo;
        this._cor = _cor;
        this._placa = _placa;
        this._numDePortas = _numDePortas;
    }
    get numDePortas() {
        return this._numDePortas;
    }
    set numDePortas(numDePortas) {
        if (numDePortas < 2) {
            this._numDePortas = 2;
        }
        else {
            this._numDePortas = numDePortas;
        }
    }
    //usando um metodo para exibir alteraçoes via console
    exibirInformacoes() {
        console.log(`Fabricante: ${this.fabricante}
            Modelo: ${this._modelo}
            Cor: ${this._cor}
            Placa: ${this._placa}
            Numero de portas: ${this._numDePortas}`);
    }
}
exports.carro = carro;
let veiculo = new carro("Chevrolet", "Onix", "Preto", "ABC-1234", 4);
veiculo.exibirInformacoes();
//# sourceMappingURL=constructor.js.map
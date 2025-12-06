"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carro = void 0;
var carro = /** @class */ (function () {
    //outro inicializador cria e define todos os atributos do objeto carro, podendo ou nao ter o numDePortas definido.
    function carro(fabricante, _modelo, _cor, _placa, _numDePortas) {
        this.fabricante = fabricante;
        this._modelo = _modelo;
        this._cor = _cor;
        this._placa = _placa;
        this._numDePortas = _numDePortas;
    }
    Object.defineProperty(carro.prototype, "numDePortas", {
        get: function () {
            return this._numDePortas;
        },
        set: function (numDePortas) {
            if (numDePortas < 2) {
                this._numDePortas = 2;
            }
            else {
                this._numDePortas = numDePortas;
            }
        },
        enumerable: false,
        configurable: true
    });
    return carro;
}());
exports.carro = carro;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.veiculo = void 0;
const motor_1 = require("./motor");
const direcao_1 = require("./direcao");
class veiculo {
    _motor;
    _direcao;
    constructor() {
        this._motor = new motor_1.Motor();
        this._direcao = new direcao_1.Direcao();
    }
    get motor() {
        return this._motor;
    }
    set motor(motor) {
        this._motor = motor;
    }
    get direcao() {
        return this._direcao;
    }
    set direcao(direcao) {
        this._direcao = direcao;
    }
}
exports.veiculo = veiculo;
let c = new veiculo();
c.motor.potencia = 200;
console.log(c.motor.potencia);
//# sourceMappingURL=veiculo.js.map
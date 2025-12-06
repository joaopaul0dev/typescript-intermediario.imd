"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.barco = void 0;
const brinquedo_1 = require("./brinquedo");
class barco extends brinquedo_1.Brinquedo {
    mover() {
        console.log('navegando... ');
    }
}
exports.barco = barco;
//a resposta ao metodo mover atua de tres formas diferentes em tres objetos diferentes nisso se da a capacidade do polimorfismo.
//# sourceMappingURL=barco.js.map
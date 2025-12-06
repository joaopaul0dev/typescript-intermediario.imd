"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aviao = void 0;
const brinquedo_1 = require("./brinquedo");
class Aviao extends brinquedo_1.Brinquedo {
    mover() {
        console.log('voando... ');
    }
}
exports.Aviao = Aviao;
// o metodo mover esta sendo sobrescrito de acordo com a nesscecidade 
//# sourceMappingURL=aviao.js.map
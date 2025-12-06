"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aviao_1 = require("./aviao");
const barco_1 = require("./barco");
const brinquedo_1 = require("./brinquedo");
let brinquedo = new brinquedo_1.Brinquedo(100);
let aviao = new aviao_1.Aviao(50);
let Barco = new barco_1.barco(20);
function movimentarBrinquedo(b) {
    b.mover();
}
movimentarBrinquedo(brinquedo);
//# sourceMappingURL=app.js.map
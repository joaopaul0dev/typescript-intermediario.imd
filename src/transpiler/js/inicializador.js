"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Moto {
    _modelo;
    _cor;
    _numDaPlaca;
    _numDeRodas;
    //metodos get e set, inicializadores padroes define e retorna o valor do atributo _cor dado como parametro na linha 17 "c.cor = "Verde";"
    get cor() {
        return this._cor;
    }
    set cor(cor) {
        this._cor = cor;
    }
    get numDeRodas() {
        return this._numDeRodas;
    }
    set numDeRodas(numDeRodas) {
        if (numDeRodas < 2) {
            this._numDeRodas = 2;
        }
        else {
            this._numDeRodas = numDeRodas;
        }
    }
}
let c = new Moto();
c.numDeRodas = -1;
console.log(c.numDeRodas);
//# sourceMappingURL=inicializador.js.map
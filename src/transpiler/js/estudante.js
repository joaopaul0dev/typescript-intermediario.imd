"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class estudante {
    _id;
    _creditos;
    constructor(_id, nome, _creditos) {
        this._id = _id;
        this._creditos = _creditos;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        if (id <= 0) {
            this._id = 1;
        }
        else {
            this._id = id;
        }
    }
    get creditos() {
        return this.creditos;
    }
    set creditos(creditos) {
        if (creditos < 0) {
            this.creditos = 0;
        }
        else {
            this.creditos = creditos;
        }
    }
}
let e = new estudante(0, "João", -20);
console.log(e.id);
console.log(e.creditos);
//# sourceMappingURL=estudante.js.map
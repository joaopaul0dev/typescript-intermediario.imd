"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//sobrecarga de inicializadores
class Teste {
    exec(a, b) {
        return a + b;
    }
}
let t = new Teste();
console.log(t.exec(4, 5)); // 4 + 5 = 9
console.log(t.exec('a', 'b')); // 'a' + 'b' = 'ab'
//# sourceMappingURL=sobrecarga.js.map
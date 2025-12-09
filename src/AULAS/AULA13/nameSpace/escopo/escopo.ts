///<reference path="StringUtils.ts"

namespace Texto{
    export function imprimir(Texto:string) {
        console.log(Texto);
    }

    export function contarTexto(Texto:string): number {
        return Texto.length;
    }
}

//Texto.imprimir("Joao Paulo");
//console.log(Texto.contarTexto("Joao Paulo"))

console.log(StringUtils.maiuscula("ufrn"));
console.log(StringUtils.minuscula("UFN"));
console.log(StringUtils.validaTexto("UFRN12345"));
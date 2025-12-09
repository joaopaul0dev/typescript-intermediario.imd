namespace StringUtils {
    let max = 10;

    export function maiuscula(Texto:string) {
        return Texto.toUpperCase();
    } 

    export function minuscula(Texto:string) {
        return Texto.toLocaleLowerCase();
    } 

    export function validaTexto(Texto:string): boolean {
        return Texto.length <= max;
    }
}
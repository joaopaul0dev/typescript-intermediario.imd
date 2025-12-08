//USANDO REST
//EXEMPLO 01 
function listaNomes(...nomes:string[]) {
    return nomes.join(", ");
}
console.log(listaNomes("Ana", "Bruno", "Carlos"));

//EXEMPLO 02
function somaValores(...valores:number[]) {
    let t = 0;
    valores.forEach( e => t += e );
    return t;
}
//console.log(somaValores(10, 20, 30, 40, 50));

//EXEMPLO 03
let num = [5, 10, 15, 20, 25];
//console.log(Math.max(...num));
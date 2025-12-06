import { Aviao } from "./aviao";
import { barco } from "./barco";
import { Brinquedo } from "./brinquedo";

/*let brinquedo = new Brinquedo (100);
let aviao = new Aviao(50);
let Barco = new barco(20);*/

function movimentarBrinquedo(b: Brinquedo){
    b.mover();
}
/*movimentarBrinquedo(brinquedo)
movimentarBrinquedo(aviao)
movimentarBrinquedo(Barco)*/

//variavel sem tipo definido
let teste;
teste = 10;
teste = "texto";
teste = true;

//let m = new Motor(100)

let b1 = new Brinquedo(10, "texto");
let b2 = new Brinquedo(10, {nome: 'qualquer'});
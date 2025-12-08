import { brinquedo } from "./brinquedo";
import { barco } from "./barco";
import { Aviao } from "./aviao";

let brinq: brinquedo = new barco(0);
brinq.mover(); //console.log("O barco está navegando");

brinq = new Aviao(0);
brinq.mover(); //console.log("O avião está voando");
import { Monitor } from "../monitor";
import { Teclado } from "./teclado";
import { Memoria } from "../memoria";
import { PlacaMae } from "../placaMae";

export class Computador{
    private _monitor: Monitor;
    private _teclado: Teclado;
    private _memoria: Memoria;
    private _placaMae: PlacaMae;

    public constructor(monitor: Monitor, teclado: Teclado, memoria: Memoria, placaMae: PlacaMae){
        this._monitor = monitor;
        this._teclado = teclado;
        this._memoria = memoria;
        this._placaMae = placaMae;
    }
    
    public get monitor() : Monitor {
        return this._monitor;
    }

    public set monitor(monitor : Monitor) {
        this._monitor = monitor;
    }
    
    public get teclado() : Teclado {
        return this._teclado;
    }

    public set teclado(teclado : Teclado) {
        this._teclado = teclado;
    }
    
    public get memoria() : Memoria {
        return this._memoria;
    }

    public set memoria(memoria : Memoria) {
        this._memoria = memoria;
    }
    
    public get placaMae() : PlacaMae {
        return this._placaMae;
    }

    public set placaMae(placaMae : PlacaMae) {
        this._placaMae = placaMae;
    }
}
let monitor = new Monitor(15);
let teclado = new Teclado(104);
let memoria = new Memoria(8);
let placaMae = new PlacaMae("ATX");

let computador = new Computador(monitor, teclado, memoria, placaMae);
console.log(computador);


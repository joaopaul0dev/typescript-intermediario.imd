export class Teclado{
    private _teclado: number;
    
    public constructor(teclado: number){
        this._teclado = teclado;
    }

    public get teclado() : number {
        return this._teclado;
    }
     
    public set teclado(teclado : number) {
        this._teclado = teclado;
    }
        
}
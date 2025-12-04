export class Memoria{
    private _memoria: number;
    
    public constructor(memoria: number){
        this._memoria = memoria;
    }

    public get memoria() : number {
        return this._memoria;
    }
     
    public set memoria(memoria : number) {
        this._memoria = memoria;
    }
        
}
export class Monitor{
    private _tamanho: number;
    
    public constructor(tamanho: number){
        this._tamanho = tamanho;
    }

    public get tamanho() : number {
        return this._tamanho;
    }
     
    public set tamanho(tamanho : number) {
        this._tamanho = tamanho;
    }
        
}
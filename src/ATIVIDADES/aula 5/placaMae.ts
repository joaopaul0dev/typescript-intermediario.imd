export class PlacaMae{
    private _tipo: string;
    
    public constructor(tipo: string){
        this._tipo = tipo;
    }

    public get tipo() : string {
        return this._tipo;
    }
     
    public set tipo(tipo : string) {
        this._tipo = tipo;
    }
        
}
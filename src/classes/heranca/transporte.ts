class Transporte {
    private _capacidade: number;
    
    public get capacidade() : number {
        return this._capacidade
    }
    
    set capacidade(capacidade : number) {
        this._capacidade = capacidade;
    }
}
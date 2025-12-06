export declare class carro {
    readonly fabricante: string;
    private _modelo;
    private _cor;
    private _placa;
    private _numDePortas;
    constructor(fabricante: string, _modelo: string, _cor: string, _placa: string, _numDePortas: number);
    get numDePortas(): number;
    set numDePortas(numDePortas: number);
    exibirInformacoes(): void;
}
//# sourceMappingURL=constructor.d.ts.map
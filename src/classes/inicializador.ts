export class Moto{
    private _modelo: string;
    private _cor: string;
    private _numDaPlaca: number; 
    private _numDeRodas: number;

    //metodos get e set, inicializadores padroes define e retorna o valor do atributo _cor dado como parametro na linha 17 "c.cor = "Verde";"
    get cor():string{
        return this._cor
    }

   set cor(cor: string) {
        this._cor = cor;
    }
    
    get numDeRodas(): number{
        return this._numDeRodas;
    }

    set numDeRodas(numDeRodas: number){
        if (numDeRodas < 2){
            this._numDeRodas = 2; 
        } else {
            this._numDeRodas = numDeRodas;
        }

}
}
let c = new Moto();
c.numDeRodas = -1;
console.log(c.numDeRodas)


class Moto{
    modelo: string = "";
    _cor: string = "";
    numDaPlaca: number = 0; 

    //metodos get e set, inicializadores padroes define e retorna o valor do atributo _cor dado como parametro na linha 17 "c.cor = "Verde";"
    get cor():string{
        return this._cor
    }

   set cor(cor: string) {
        this._cor = cor;
    }

}
let c = new Moto();
c.cor = "Verde";
console.log(c.cor)


class listaGenerica<T, K> {
    lista: T[] = [];
    private _id: K;

    constructor(id: K) {
        this._id = id;
    } 

    set id(id: K) { 
        this._id = id;
    }

    get id(): K {
        return this._id;
    }



    adicionar(arg: T) {
        this.lista.push(arg);
    }

    imprimir() {    
        this.lista.forEach( e => console.log(e) );
        };
}

let listaNum = new listaGenerica<number, string>("num01");
listaNum.adicionar(10);
listaNum.adicionar(20);
listaNum.adicionar(30);

listaNum.imprimir();

let listaStr = new listaGenerica<string, number>(101);
listaStr.adicionar("Ana");
listaStr.adicionar("Bruno");
listaStr.adicionar("Carlos");

listaStr.imprimir();
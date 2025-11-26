class estudante {

    constructor(
        private _id: number,
        nome: string,
        private _creditos: number
    ){}

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        if (id <= 0) {
            this._id = 1;
        } else {
            this._id = id;
        }
    }

    get creditos(): number {
        return this.creditos;
    }

    set creditos(creditos: number) {
        if (creditos < 0) {
            this.creditos = 0;
        } else {
            this.creditos = creditos;
        }
    }
}

let e = new estudante(0, "João", -20);
console.log(e.id);
console.log(e.creditos);
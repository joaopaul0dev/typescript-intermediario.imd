export class Brinquedo {
    constructor ( private _velocidade: number, args: any){
        if (typeof args == 'number') {
            console.log('${typeof _args} numero passado como parametro')
        } else if (typeof args == 'string') {
            console.log('${typeof _args} texto passado como parametro')
        } else{
            console.log('outro atributo foi passado')
        }
    }

    public mover(){
        console.log('movendo o brinquedo...')
    }

}
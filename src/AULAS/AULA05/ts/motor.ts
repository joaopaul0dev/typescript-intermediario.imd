export class Motor{
    private _motor: number;
    private _potencia: number;

    public constructor(motor: number, potencia: number){
        this._motor = motor;
        this._potencia = potencia;
    }

    public get motor() : number {
        return this._motor;
    }
     
    public set motor(motor : number) {
        this._motor = motor;
    }

    public get potencia() : number {
        return this._potencia;
    }
     
    public set potencia(potencia : number) {
        this._potencia = potencia;
    }
        
}
export class Motor{
    private _motor: number;

    public constructor(motor: number){
        this._motor = motor;
    }

    public get motor() : number {
        return this._motor;
    }
     
    public set motor(motor : number) {
        this._motor = motor;
    }
        
}
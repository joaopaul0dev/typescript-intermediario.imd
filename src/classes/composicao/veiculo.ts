import { Motor } from "./motor";
import { Direcao } from "./direcao";

export class veiculo{
    private _motor: Motor;
    private _direcao: Direcao;
        
    public constructor(){
        this._motor = new Motor();
        this._direcao = new Direcao();
    }
    
    public get motor(): Motor {
        return this._motor;
    }

   public set motor(motor : Motor) {
    this._motor = motor;
   }

   
   public get direcao() : Direcao {
    return this._direcao; 
   }
   
   public set direcao(direcao : Direcao) {
    this._direcao = direcao;
   }
}

let c = new veiculo();
c.motor.potencia = 200;
console.log(c.motor.potencia)
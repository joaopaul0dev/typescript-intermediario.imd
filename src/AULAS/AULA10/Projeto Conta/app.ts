import { SaldoInsuficienteError } from "./app/projeto_conta/errors/saldoinsuficienteerror";
import { ValorInvalidoError } from "./app/projeto_conta/errors/valorinvalidoerror";
import { ContaBancaria } from "./app/projeto_conta/contabancaria"; 
import { emailInvalidoError } from "../projetoUsuario/error/emailInvalidoError"; 
import { nomeInvalidoError } from "../projetoUsuario/error/nomeInvalidoError"; 
import { Usuario } from "../projetoUsuario/usuario"; 


// try {
//     let usuario = Usuario.criarUsuario('emerson@email.com','Emersonxxxxxxxx');    
//     console.log(`${usuario.nome} - ${usuario.email}`)
// } catch (e) {

//     if(e instanceof EmailInvalidoError){
//         console.log(`@ -> ${e.message}`)
//     }else if (e instanceof NomeInvalidoError){
//         console.log(`N -> ${e.message}`)
//     }
    
// }

// console.log("Programa executando......")

let c1 = new ContaBancaria();
let c2 = new ContaBancaria();


try {
    c1.depositar(110)
} catch (e) {
    console.log(`${e.message} ${e.valorInvalido}`);
} finally{
    console.log(`Saldo da conta C1: ${c1.saldo}`)
    console.log(`Saldo da conta C2: ${c2.saldo}`)
    console.log(`------------------------------`)
}

try {
    c1.sacar(10)
} catch (e) {
    if(e instanceof ValorInvalidoError){

    }
    if(e instanceof SaldoInsuficienteError){
        
    }

    console.log(e.message);
} finally{
    console.log(`Saldo da conta C1: ${c1.saldo}`)
    console.log(`Saldo da conta C2: ${c2.saldo}`)
    console.log(`------------------------------`)
}


try {
    c1.transferir(50,c2)
} catch (e) {
    console.log(e.message);
} finally{
    console.log(`Saldo da conta C1: ${c1.saldo}`)
    console.log(`Saldo da conta C2: ${c2.saldo}`)
    console.log(`------------------------------`)
}




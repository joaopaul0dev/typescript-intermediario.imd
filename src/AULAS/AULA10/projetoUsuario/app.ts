import { emailInvalidoError } from "./error/emailInvalidoError";
import { nomeInvalidoError } from "./error/nomeInvalidoError";
import { Usuario } from "./usuario";

try {
    let user = Usuario.criarUsuario("Joãoxxxxxxxxxxxxxxxxxxxxxxxxx","joaoe,mainoi/??0912nolkl.co~m");
    console.log("Usuário criado: ", user);
} catch (e) {
    if(e instanceof emailInvalidoError){
        console.log("error no email",e.message);
    } else if (e instanceof nomeInvalidoError){
        console.log("error no nome",e.message);
    }
    
}
console.log("Programa continua...");
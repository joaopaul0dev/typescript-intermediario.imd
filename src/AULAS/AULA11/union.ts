//EXEMPLO - 01 - UNION
let x : number | string | boolean;
x = 10;
x = "Teste";
x = true;
//x = []; // ERRO

//EXEMPLO - 02 - UNION

function imprimirID(id: number | string ) {
    console.log(id);
}

imprimirID(101); //OK
imprimirID("202"); //OK
//imprimirID(true); //ERRO: tipagem inválidax 


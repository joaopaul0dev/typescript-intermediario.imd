//EXEMPLO - 01 - ENUM
enum Cores {
    Vermelho,
    Verde,
    Azul
}

let c: Cores = Cores.Vermelho;
//console.log(c); //0
//console.log(Cores.Azul); //2

//EXEMPLO - 02 - ENUM

enum DiaSemana {
    Domingo = 1,
    Segunda,
    Terca,
    Quarta = 10,
    Quinta,
    Sexta,
    Sabado
}

let d: DiaSemana = DiaSemana.Quarta;
console.log(d); //4

//EXEMPLO - 03 - ENUM

enum DiaSemana2 {
   Dom = "Domingo",
   Seg = "Segunda",
   Ter = "Terca",
   Qua = "Quarta",
   Qui = "Quinta",
   Sex = "Sexta",
   Sab = "Sabado"
}

let d2: DiaSemana2 = DiaSemana2.Dom;
console.log(d2); //Domingo

//EXEMPLO - 04 - ENUM

enum Status {
    Ativo = "Sistema Ativo",
    Inativo = 0
}
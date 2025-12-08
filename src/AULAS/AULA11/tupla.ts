let arr = [1,4,5];
arr[0] = 10;

let arr2 =["p1", "p2", "p3"]
let arr3: any = [true, 123, "teste", [1,2,3], {objeto: "Ana", idade: 25}];

//EXEMPLO - 01 TUPLA 

let tupla: [string, number, boolean] = ["Ana", 25, true]
//tupla = [25, "Ana", true] // ERRO

tupla[0] = "Bruno"
tupla[1] = 30
tupla[2] = false

console.log(tupla)
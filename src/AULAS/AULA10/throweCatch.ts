function calcularIdade(anoNascimento: number) {
let idade = 2024 - anoNascimento;    

if (idade < 1900){
    throw new Error("Idade inválida");
} else {
    console.log("Idade válida");
}

try {
    calcularIdade(1800);
} catch (e) {
    console.log((e.message));
}

}
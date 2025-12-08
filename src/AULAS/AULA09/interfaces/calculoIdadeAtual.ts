interface calculoIdadeAtual{
    (anoNascimento: number): number;
}
    let idadeAtual: calculoIdadeAtual

    idadeAtual = function(ano: number) {
        
        return new Date().getFullYear() - ano;
    }
console.log(idadeAtual(2007));

class MinhaClasse {
    static x:number = 1;

    static exibirValorX(){
        console.log(MinhaClasse.x)
}
}

console.log(MinhaClasse.x);

MinhaClasse.exibirValorX(); // Método estático chamado sem instanciar a classe

let obj = new MinhaClasse();
//obj.exibirValorX(); // Erro: Método estático não pode ser chamado em uma instância da classe
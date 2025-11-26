class Terrestre extends Transporte {
    public exibirInfo() {
        console.log(t.capacidade);
    }
}

let t = new Terrestre();
t.capacidade = 5;
t.exibirInfo();
class Terrestre extends Transporte {
    public exibirInfo() {
        console.log(`Capacidade: ${this.capacidade}`);
    }
}

let o = new Terrestre();
o.capacidade = 5;
o.exibirInfo(); 

//sobrecarga de inicializadores
class Teste{

    public exec(a:string, b:string):string;

    public exec(a:number, b:number): number;

    public exec(a: any, b:any): any {
        return a + b;
    }

}

let t = new Teste()

console.log(t.exec(4,5)); // 4 + 5 = 9
console.log(t.exec('a','b')); // 'a' + 'b' = 'ab'
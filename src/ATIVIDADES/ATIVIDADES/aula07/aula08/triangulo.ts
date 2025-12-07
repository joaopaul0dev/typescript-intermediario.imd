import { FiguraGeometrica } from "./figuraGeometrica";

export class triangulo extends FiguraGeometrica {
 desenharTriangulo(): string{
    return "Desenhando um triangulo";
 }
}

let tri = new triangulo();
tri.desenhar();
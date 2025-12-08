import { brinquedo } from "../classesAbstratas/brinquedo";

export class controleRemoto {

    moverPraFrente(obj: brinquedo): void {
        obj.mover();
    }
}

import CalculadoraDeTarifaManipulador from "./CalculadoraDeTarifaManipulador";
import Corrida from "./Corrida";

export default class CalculadoraTarifaNoturnaManipulador implements CalculadoraDeTarifaManipulador {
    TARIFA = 3.9
    constructor (readonly next?: CalculadoraDeTarifaManipulador) {
        
    }
    
    calcular(corrida: Corrida): number {
        if(corrida.periodoNoturno() && !corrida.domingo()) {
            return corrida.distancia * this.TARIFA;
        }
        if(!this.next) throw new Error("fim do encadeamento");
        return this.next.calcular(corrida);
        
    }

}
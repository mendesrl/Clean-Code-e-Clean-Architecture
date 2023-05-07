import CalculadoraDeTarifaManipulador from "./CalculadoraDeTarifaManipulador";
import Corrida from "./Corrida";

export default class CalculadoraTarifaDomingoManipulador implements CalculadoraDeTarifaManipulador {
    TARIFA = 2.9
    constructor (readonly next?: CalculadoraDeTarifaManipulador) {
        
    }
    
    calcular(corrida: Corrida): number {
        if(!corrida.periodoNoturno() && corrida.domingo()) {
            return corrida.distancia * this.TARIFA;
        }
        if(!this.next) throw new Error("fim do encadeamento");
        return this.next.calcular(corrida);
        
    }

}
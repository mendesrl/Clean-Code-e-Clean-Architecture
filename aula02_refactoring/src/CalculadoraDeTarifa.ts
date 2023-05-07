import Corrida from "./Corrida";

export default interface CalculadoraDeTarifa {
    calcular(corrida: Corrida): number;

  
}
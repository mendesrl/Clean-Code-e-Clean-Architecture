import CalculadoraTarifaDomingoManipulador from "../src/CalculadoraTarifaDomingoManipulador";
import CalculadoraTarifaDomingoNoiteManipulador from "../src/CalculadoraTarifaDomingoNoiteManipulador";
import CalculadoraTarifaNormalManipulador from "../src/CalculadoraTarifaNormalManipulador";
import CalculadoraTarifaNoturnaManipulador from "../src/CalculadoraTarifaNoturnaManipulador";
import Rota from "../src/Rota";

let rota: Rota;

beforeEach(() => {
  const calculadoraTarifaNoturnaManipulador = new CalculadoraTarifaNoturnaManipulador();
  const calculadoraTarifaDomingoNoiteManipulador = new CalculadoraTarifaDomingoNoiteManipulador(calculadoraTarifaNoturnaManipulador);
  const calculadoraTarifaDomingoManipulador = new CalculadoraTarifaDomingoManipulador(calculadoraTarifaDomingoNoiteManipulador);
  const calculadoraTarifaNormalManipulador = new CalculadoraTarifaNormalManipulador(calculadoraTarifaDomingoManipulador);
  rota = new Rota(calculadoraTarifaNormalManipulador);
})

test("Deve calcular a tarifa em um dia normal", function () {
  rota.addCorrida(10, new Date("2023-03-01T10:00:00"));

  const tarifa = rota.calcularRotas();
  expect(tarifa).toBe(21);
});

test("Deve calcular a tarifa de uma corrida noturna", function () {
  rota.addCorrida(10, new Date("2023-03-01T23:00:00"));

  const tarifa = rota.calcularRotas();
  expect(tarifa).toBe(39);
});

test("Deve calcular a tarifa de uma corrida aos domingos", function () {
  rota.addCorrida(10, new Date("2021-03-07T10:00:00"));

  const tarifa = rota.calcularRotas();
  expect(tarifa).toBe(29);
});

test("Deve calcular a tarifa de uma corrida aos domingos a noite", function () {
  rota.addCorrida(10, new Date("2021-03-07T23:00:00"));

  const tarifa = rota.calcularRotas();
  expect(tarifa).toBe(50);
});

test("Deve retornar uma mensagem de erro se a distancia for invalida", function () {
  expect(() => rota.addCorrida(-10, new Date("2021-03-07T23:00:00"))).toThrow(
    new Error("A distancia da corrida é invalida")
  );
});

test("Deve retornar uma mensagem de erro se a data for invalida", function () {
  expect(() => rota.addCorrida(10, new Date("021-03-3:00:00"))).toThrow(
    new Error("A data da corrida é invalida")
  );
});

test("Deve retornar a tarifa minima caso a tafira seja menor que a tarifa minima", function () {
  rota.addCorrida(1, new Date("2023-03-01T10:00:00"));
  const tarifa = rota.calcularRotas();
  expect(tarifa).toBe(10);
});

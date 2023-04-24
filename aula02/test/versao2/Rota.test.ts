import Rota from "../../src/versao2/Rota";

test("Deve calcular a tarifa em um dia normal", function () {
  const rota = new Rota();
  rota.addCorrida(10, new Date("2023-03-01T10:00:00"));

  const tarifa = rota.calcularRotas();
  expect(tarifa).toBe(21);
});

test("Deve calcular a tarifa de uma corrida noturna", function () {
  const rota = new Rota();
  rota.addCorrida(10, new Date("2023-03-01T23:00:00"));

  const tarifa = rota.calcularRotas();
  expect(tarifa).toBe(39);
});

test("Deve calcular a tarifa de uma corrida aos domingos", function () {
  const rota = new Rota();
  rota.addCorrida(10, new Date("2021-03-07T10:00:00"));

  const tarifa = rota.calcularRotas();
  expect(tarifa).toBe(29);
});

test("Deve calcular a tarifa de uma corrida aos domingos a noite", function () {
  const rota = new Rota();
  rota.addCorrida(10, new Date("2021-03-07T23:00:00"));

  const tarifa = rota.calcularRotas();
  expect(tarifa).toBe(50);
});

test("Deve retornar uma mensagem de erro se a distancia for invalida", function () {
  const rota = new Rota();
  expect(() => rota.addCorrida(-10, new Date("2021-03-07T23:00:00"))).toThrow(
    new Error("A distancia da corrida é invalida")
  );
});

test("Deve retornar uma mensagem de erro se a data for invalida", function () {
  const rota = new Rota();
  expect(() => rota.addCorrida(10, new Date("021-03-3:00:00"))).toThrow(
    new Error("A data da corrida é invalida")
  );
});

test("Deve retornar a tarifa minima caso a tafira seja menor que a tarifa minima", function () {
  const rota = new Rota();
  rota.addCorrida(1, new Date("2023-03-01T10:00:00"));
  const tarifa = rota.calcularRotas();
  expect(tarifa).toBe(10);
});

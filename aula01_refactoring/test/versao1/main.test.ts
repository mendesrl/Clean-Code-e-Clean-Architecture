import { calcularRotas } from "../../src/versao1/main"

test("Deve calcular a tarifa em um dia normal",function(){
    const entrada = [{
        distancia:10,
        diaDaSemana: new Date('2023-03-01T10:00:00')
    }]
    const tarifa = calcularRotas(entrada)
    expect(tarifa).toBe(21);
})

test("Deve calcular a tarifa de uma corrida noturna",function(){
    const entrada = [{
        distancia:10,
        diaDaSemana: new Date('2023-03-01T23:00:00')
    }]
    const tarifa = calcularRotas(entrada)
    expect(tarifa).toBe(39);
})

test("Deve calcular a tarifa de uma corrida aos domingos",function(){
    const entrada = [{
        distancia:10,
        diaDaSemana: new Date('2021-03-07T10:00:00')
    }]
    const tarifa = calcularRotas(entrada)
    expect(tarifa).toBe(29);
})

test("Deve calcular a tarifa de uma corrida aos domingos a noite",function(){
    const entrada = [{
        distancia:10,
        diaDaSemana: new Date('2021-03-07T23:00:00')
    }]
    const tarifa = calcularRotas(entrada)
    expect(tarifa).toBe(50);
})

test("Deve retornar uma mensagem de erro se a distancia for invalida",function(){
    const entrada = [{
        distancia: -10,
        diaDaSemana: new Date('2021-03-07T23:00:00')
    }]
    expect(()=> calcularRotas(entrada)).toThrowError('A distancia da corrida é invalida')
})

test("Deve retornar uma mensagem de erro se a data for invalida",function(){
    const entrada = [{
        distancia: 10,
        diaDaSemana: new Date('021-03-3:00:00')
    }]
    expect(()=> calcularRotas(entrada)).toThrowError('A data da corrida é invalida');
})

test("Deve retornar a tarifa minima caso a tafira seja menor que a tarifa minima",function(){
    const entrada = [{
        distancia: 1,
        diaDaSemana: new Date('2021-03-07T23:00:00')
    }]
    const tarifa = calcularRotas(entrada)
    expect(tarifa).toBe(10);
})
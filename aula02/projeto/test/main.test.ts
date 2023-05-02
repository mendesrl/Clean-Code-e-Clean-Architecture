import { validate } from "../src/main"

test.each([
    "407.302.170-27",
    "684.053.160-00",
    "746.971.314-01"
])('Deve testar um CPF válido %s', function(cpf: string) {
    const isValid = validate(cpf)
    expect(isValid).toBeTruthy();
})

// test('Deve terstar um CPF válido', function() {
//     const isValid = validate("447.118.751-15")
//     expect(isValid).toBeTruthy();
// })
 test('Deve terstar um CPF inválido %s', function() {
     const isValid = validate("44.118.751-15")
     expect(isValid).toBeFalsy();
 })
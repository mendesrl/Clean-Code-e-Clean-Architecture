import { validate } from "../src/main"

test('Deve terstar um CPF válido', function() {
    const isValid = validate("447.118.751-15")
    expect(isValid).toBeTruthy();
})

test('Deve terstar um CPF inválido', function() {
    const isValid = validate("44.118.751-15")
    expect(isValid).toBeFalsy();
})
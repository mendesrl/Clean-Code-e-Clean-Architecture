import Product from "../../src/minhaVersao/Product";


test("Should calculate of three products", function () {
    const product1 = new Product("Prato","2,00", 1);
    const product2 = new Product("agua","5,00", 1);
    const product3 = new Product("arroz","1,00", 1);

    expect(product1.getValue() + product2.getValue() + product3.getValue() ).toBe(8);
});
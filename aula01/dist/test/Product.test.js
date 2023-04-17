"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("../src/Product"));
test("Should calculate of three products", function () {
    const product1 = new Product_1.default("Prato", "2,00", 1);
    const product2 = new Product_1.default("agua", "5,00", 1);
    const product3 = new Product_1.default("arroz", "1,00", 1);
    expect(product1.getValue() + product2.getValue() + product3.getValue()).toBe(8);
});

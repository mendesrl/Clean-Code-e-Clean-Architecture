"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(description, price, amount) {
        this.description = description;
        this.price = price;
        this.amount = amount;
    }
    getValue() {
        const formatPrice = parseFloat(this.price);
        return this.amount * formatPrice;
    }
}
exports.default = Product;

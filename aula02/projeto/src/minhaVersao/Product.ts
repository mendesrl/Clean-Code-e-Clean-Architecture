export default class Product {

    constructor (readonly description: string, readonly price: string, readonly amount: number) {}
 
     getValue() : number {
        const formatPrice = parseFloat(this.price)

         return this.amount * formatPrice;
     }
}
// 1. Create a class Product with properties name (string), price (number), and methods:
// - getDetails(): Returns a string representation of the product details (name and price).

// applyDiscount(discount): Applies a discount (percentage) to the product's price and returns the discounted price.
class Product {
    constructor(name,price){
this.name=name;
this.price=price;
    }
    getDetails(){
        return `this is the name: ${this.name} and this is the price: ${this.price}`;
    }
    applyDiscount(discount){
        this.price=this.price-(discount*this.price);
        return this.price;
    }
    }

let me =new Product("samsung",1000);
console.log(me.applyDiscount(0.5));
;
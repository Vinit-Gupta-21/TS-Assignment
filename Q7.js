"use strict";
class Product {
    productID;
    name;
    price;
    category;
    constructor(productID, name, price, category) {
        this.productID = productID;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
function printProduct(i) {
    console.log(i.productID);
    console.log(i.name);
    console.log(i.price);
    console.log(i.category);
}
const ob = new Product(1, "Lenevo", 50000, "Electronic");
const ob2 = new Product(2, "Carrom", 6000, "Indoor Games");
printProduct(ob);
console.log("-----------");
printProduct(ob2);

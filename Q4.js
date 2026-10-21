"use strict";
class Product {
    productID = 1;
    price = 5000;
    category = "electronics";
    displayInfo() {
        console.log(this.productID);
        console.log(this.price);
    }
}
class ElectronicProduct extends Product {
    display() {
        console.log(this.category);
    }
}
const ob = new ElectronicProduct();
console.log(ob.productID);
// console.log(ob.price);
ob.displayInfo();
ob.display();

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
    displayInfo() {
        console.log(this.productID);
        console.log(this.name);
        console.log(this.price);
        console.log(this.category);
    }
}
const ob = new Product(1, "Samsung", 50000, "electronics");
const ob2 = new Product(2, "Study Table", 10000, "furniture");
const ob3 = new Product(3, "shirt", 5000, "clothes");
ob.displayInfo();
ob2.displayInfo();
ob3.displayInfo();

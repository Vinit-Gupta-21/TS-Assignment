"use strict";
class Product {
    static companyName = "TechStore";
    static displayCompany() {
        console.log(this.companyName);
    }
    productID = 1;
    name = "Oppo";
    price = 18000;
    displayInfo() {
        console.log(this.productID);
        console.log(this.name);
        console.log(this.price);
    }
}
const ob = new Product();
const ob2 = new Product();
Product.displayCompany();
ob.displayInfo();
ob2.displayInfo();

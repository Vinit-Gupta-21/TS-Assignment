"use strict";
class Product {
    calculateDiscount(price) {
        return price - (price * (5 / 100));
    }
}
class ElectronicProduct extends Product {
    calculateDiscount(price) {
        return price - (price * (10 / 100));
    }
}
class ClothingProduct extends Product {
    calculateDiscount(price) {
        return price - (price * (15 / 100));
    }
}
const ob = new Product();
const ob2 = new ElectronicProduct();
const ob3 = new ClothingProduct();
console.log(ob.calculateDiscount(1000));
console.log(ob2.calculateDiscount(1000));
console.log(ob3.calculateDiscount(1000));

interface IProduct {
    productID: number
    name: String
    price: number
    category: String
}

class Product implements IProduct {
    productID: number
    name: String
    price: number
    category: String

    constructor(productID: number,name: String,price: number,category: String) {
        this.productID=productID;
        this.name=name
        this.price=price
        this.category=category
    }
}
function printProduct(i: IProduct) {
    console.log(i.productID);
    console.log(i.name);
    console.log(i.price);
    console.log(i.category);

}


const ob = new Product(1,"Lenevo",50000,"Electronic");
const ob2 = new Product(2,"Carrom",6000,"Indoor Games");

printProduct(ob);
console.log("-----------");
printProduct(ob2);
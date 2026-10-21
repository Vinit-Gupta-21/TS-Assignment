abstract class Product{
    productID:number=1
    name:String="Lenevo"
    price:number=60000

    abstract calculateFinalPrice(price:number):void;
    displayInfo(){
        console.log(this.productID);
        console.log(this.name);
        console.log(this.price);
    }
}

class ElectronicProduct extends Product{
    calculateFinalPrice(price:number): void {
        this.price =price - (price*(10/100));
    }
}

class GroceryProduct extends Product{
    calculateFinalPrice(price: number): void {
        this.price =price - (price*(5/100));
    }
}

const ob= new  ElectronicProduct();
const ob2 = new GroceryProduct();

ob.calculateFinalPrice(5000);
ob2.calculateFinalPrice(5000);
ob.displayInfo();
ob2.displayInfo();

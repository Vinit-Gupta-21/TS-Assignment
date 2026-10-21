class Product{
    public productID:number=1
    private price:number=5000
    protected category:String="electronics"

    displayInfo(){
        console.log(this.productID);
        console.log(this.price);
        
    }

}
class ElectronicProduct extends Product{
    display(){
        console.log(this.category);
        
    }
}

const ob = new ElectronicProduct();
console.log(ob.productID);
// console.log(ob.price);
ob.displayInfo()
ob.display()


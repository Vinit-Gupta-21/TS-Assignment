class Product{
    static companyName:String ="TechStore"
    static displayCompany(){
        console.log(this.companyName);
    }
    productID:number=1
    name:String="Oppo"
    price:number=18000
    displayInfo(){
        console.log(this.productID);
        console.log(this.name);
        console.log(this.price);
    }
}

const ob =new Product()
const ob2 = new Product();

Product.displayCompany()
ob.displayInfo()
ob2.displayInfo()


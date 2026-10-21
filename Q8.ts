function displayProducts<T>(a:T[]){
    console.log(a);
}

const productsNames=["Lenevo","IPhone","Mac","ps5"]
const productPrices=[60000, 122000,80000,90000]
const productIDs=[1,2,3,4]

function  getFirstElement<T>(a:T[]){
    console.log(a[0]);
}

displayProducts(productIDs)
displayProducts(productsNames)
displayProducts(productPrices)

getFirstElement(productIDs)
getFirstElement(productsNames)
getFirstElement(productPrices)
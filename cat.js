
class Mkulima{
    constructor(){
        this.farms = []
        this.products = []
        this.orders = []
        this.addFarm =(farmId,name,farmer,phone,address)=>{
            var farmer = {farmId:farmId,farmer:farmer,name:name,phone:phone,address:address}
            this.farms.push(farmer)
        }
        this.removeFarm = (farmId)=>{
            let index= this.farms.findIndex(item=>item.farmId===farmId)
            this.farms.splice(index,1)
            return this.farms

        }
       this.updateFarm = (farmId,name,farmer,phone,address)=>{
        var updatedFarmer = this.farms.find(i =>i.farmId===farmId);
                updatedFarmer.name = name;
                updatedFarmer.farmer = farmer;
                updatedFarmer.phone = phone;
                updatedFarmer.address = address;

        }
        this.getFarm = (farmId)=>{
           var getFarmer = this.farms.find(i =>i.farmId ===farmId);
                return  getFarmer
        }
       this.addProduct  = (productId, name, price)=>{
        var product = {productId:productId,name:name,price:price}
        this.products.push(product)

       }
        this.removeProduct = (productId) => {
            let index= this.farms.findIndex(item=>item.productId===productId)
            this.farms.splice(index,1)
            return this.products

        }
        this.updateProduct = function(productId,productName,newPrice){
           var updatedProduct =  this.products.find(i => i.productId ===productId)
                updatedProduct.productId = productId;
                updatedProduct.name = productName;
                updatedProduct.price = newPrice;
        }
        this.getProduct = (productId)=>{
           var getProduct =  this.products.find(i => i.productId ===productId)
                return getProduct
        }
        this.printProducts = ()=>{
                return this.products
        }
        this.calculateOrderCost = (productId,quantity)=>{
            var buyProduct = this.products.find(i => i.productId ===productId)
            return`${quantity} ${buyProduct.name} for KES ${quantity*buyProduct.price}`
        }
 
    }
  
}


let farm = new Mkulima();
farm.addFarm("125b","Cows","Lisa","112890", "Longisa");
farm.addFarm("120a","Kales","Uhania","112789", "Mau");
farm.addFarm("105a","Apples","Killan","112490", "Limuru");
farm.addFarm("135a","Fish","linet","112900", "Siaya");

console.log(farm.farms);

console.log(farm.removeFarm("105a"));

farm.updateFarm("125b","Lina","Sheep","112400", "Narok");

farm.getFarm("120a");

farm.addProduct("1","kales",200);
farm.addProduct("2","apple juice",460);
farm.addProduct("3","mutton",300);
farm.addProduct("4","milk",100);
console.log(farm.products);

console.log(farm.removeProduct("2"));



console.log(farm.updateProduct("1","butter",20));
console.log(farm.products);

console.log(farm.getProduct("4"));

console.log(farm.printProducts());

console.log(farm.calculateOrderCost("1",10)); 
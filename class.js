calculatePurchase(3,'orange')
function calculatePurchase(quantity,fruitName){
   var  priceList = {
        orange:25,
        mango:30,
        kiwi:40,
        berries:100
    }
    let price = (priceList[fruitName])*quantity
    console.log(`${quantity} ${fruitName} for ${price}`)
}

class KioskCalc{
    constructor(fruit,quantity){
        this.fruit = fruit
        this.quantity = quantity
        this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
        this.getTotalCost =()=>{
            return `${quantity} ${fruit} for KES ${quantity*this.fruitsPriceList[fruit]}`
        }
        
    }
}
let Orange = new KioskCalc('orange',5)
console.log(Orange.getTotalCost())
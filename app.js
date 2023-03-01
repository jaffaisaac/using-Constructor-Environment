class Aeroplain{
    constructor(capacity){
        this.checkCapacity = function(value){
            if(value >= capacity){
                return true;
            }
            return false
        }
    }
}
const jet = new Aeroplain(400);
console.log(jet.checkCapacity(10)) //false 
console.log(jet.checkCapacity(500)) //true 

console.log(jet.capacity) //undefined
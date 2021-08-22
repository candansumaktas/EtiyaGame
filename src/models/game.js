export default class Game {
    constructor(id, name, unitPrice, minAge){       
        this.id = id;
        this.name = name;
        this.unitPrice = unitPrice;
        this.minAge = minAge;

        if(!id || !name || !unitPrice|| !minAge){
        console.log(this.name +" oyununun bilgilerini eksik girdiniz! Lütfen kontrol ediniz.")
        }
    }
}

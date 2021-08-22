import Sale from "../models/sale.js"
export default class SellingService{
    constructor(){
        this.sales = []  

    }
     
    sell(user, game){
        if(user.age < game.minAge){
            console.log(user.name + ", yaşınız " + game.minAge + "'den küçük olduğu için "+ game.name +" isimli oyunu satın alamazsınız!")
        }else{
            let sale=new Sale(user,game)
            this.sales.push(sale)
            console.log(user.name+" isimli kullanıcı "+game.name+" oyununu başarılı bir şekilde satın aldı.")

        }
    }

    listSelling(){

        for (let i = 0; i < this.sales.length; i++) {
            console.log((this.sales[i].user).name+"= "+(this.sales[i].game).name)
        }
    }
}

export default class User {
    constructor(id, name, age){

        this.id = id;
        this.name = name;
        this.age = age;
        
        if(!id || !name || !age){
        console.log(this.name + ", eksik bilgi girdiniz! Lütfen kontrol ediniz.")
        }
    }
}
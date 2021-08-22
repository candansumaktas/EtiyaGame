export default class GameService{
    constructor(){
        this.games = []      
    }

    add(game){
        if(typeof(game)=="object"){
            this.games.push(game)            
        }
    }

    list(){
        return this.games;
    }
    
    remove(game) {
        for(let i=0; i<this.games.length;i++){
            if(game.id === this.games[i].id){
            this.games.splice(i, 1)
            }
        }  
        
        console.log(game.name+" isimli oyun silindi.")
    }
}

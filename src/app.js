import GameService from "./services/gameService.js"
import Game from "./models/game.js"
import UserService from "./services/userService.js"
import User from "./models/user.js"
import SellingService from "./services/sellingService.js"



//game
let game1 = new Game(1, "GTA", 101, 15)
let game2 = new Game(2, "Lol", 102, 15)
let game3 = new Game(3, "Mlbb", 103, 15)
let game4 = new Game(4, "Darkness Reborn", 15)

let gameService = new GameService()

gameService.add(game1)
gameService.add(game2)
gameService.add(game3)

console.log(gameService.list())

let gameToRemove = new Game(5, "PUBG", 105,15)
gameService.remove(gameToRemove)

//user
let user1 = new User(1, "Candan Sumaktaş", 28);
let user2 = new User(2, "Soner Sumaktaş", 29);
let user3 = new User(3, "Eren Sumaktaş", 12);
let user4 = new User(4, "Ela Sumaktaş");

let userService = new UserService()

userService.add(user1)
userService.add(user2)
userService.add(user3)

console.log(userService.list())

let userToRemove = new User(5, "Yaren Sumaktaş", 18)
userService.remove(userToRemove)
 
//sell
let sellingService = new SellingService()

sellingService.sell(user1,game1)
sellingService.sell(user2,game2)
sellingService.sell(user3,game3)

console.log(sellingService.listSelling())



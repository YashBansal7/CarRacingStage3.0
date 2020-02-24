class Player {
  //We are defining index , name and distance for the player here.
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  //We are getting the playercount from the database .
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }
//We are updating the playercount.
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
//We are updating the player index.
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
//We are getting the player info.
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}

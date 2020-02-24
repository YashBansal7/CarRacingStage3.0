class Form {
//Here we are create the input box for the name,the reset button , the play button , the greeting message and the title.We used HTML elements here.
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.resetbutton = createButton('Reset')
    this.greeting = createElement('h2');
    this.title = createElement('h2');
  }
  //Here we are hiding the buttons and messages when the game states are changing.
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }
//Here we are displaying title,input,button and greeting.We are also increasing the playercount here.
  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.resetbutton.position(100,100);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
    //Here we are reseting the gamestate and playercount to 0 when the reset button is pressed.
this.resetbutton.mousePressed(()=>{
game.update(0);
player.updateCount(0);
});
}
}

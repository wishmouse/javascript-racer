var rabbit_1;
var rabbit_2;  //adding game piece
var myBackground;
var fence_1;
var fence_2;
var fence_3;

function myGamePiece_1(){


}


function startGame() {
    playField.start();
    rabbit_1 = new component(40, 40, "blue", 10, 20); //size and location of game piece
    rabbit_2 = new component(40, 40, "red", 10, 70); //size and location of game piece
    fence_1= new component(15, 100, "green", 150, 0);//obstacle
    fence_2= new component(15, 100, "green", 280, 100);//obstacle
    fence_3= new component(15, 120, "green", 400, 0);//obstacle
   }



var playField = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 500;
        this.canvas.height = 200;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 5);
        window.addEventListener('keydown', function (e) {
            playField.key = e.keyCode;
        })
        window.addEventListener('keyup', function (e) {
            playField.key = false;
        })
        },

        clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}


function component(width, height, color, x, y) {  //game piece
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y; 
    this.update = function() {
        ctx = playField.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY; 
    } 
  }

function updateGameArea() {
    playField.clear();
    fence_1.update();
    fence_2.update();
    fence_3.update()
    rabbit_1.speedX = 0;
    rabbit_1.speedY = 0;    
    if (playField.key && playField.key == 37) {rabbit_1.speedX = -1; }//left
    if (playField.key && playField.key == 39) {rabbit_1.speedX = 1; }//right
    if (playField.key && playField.key == 38) {rabbit_1.speedY = -1; }//up
    if (playField.key && playField.key == 40) {rabbit_1.speedY = 1; }//down
    rabbit_1.newPos();    
    rabbit_1.update();
    rabbit_2.speedX = 0;
    rabbit_2.speedY = 0;    
    if (playField.key && playField.key == 83) {rabbit_2.speedX = -1; }//left
    if (playField.key && playField.key == 70) {rabbit_2.speedX = 1; }//right
    if (playField.key && playField.key == 69) {rabbit_2.speedY = -1; }//up
    if (playField.key && playField.key == 68) {rabbit_2.speedY = 1; }//down
    rabbit_2.newPos();    
    rabbit_2.update();
}


  




/*
$(document).ready(function(){
var leftKey = 37;
var rightKey = 39;
var upKey = 38;
var downKey = 40;


var playerOne = 0; //P
var playerTwo = 0; // Q
var trackLength = 0; //defined below

  
//players and tracks from dropdown

function setTrackLength(){
      
    trackLength = prompt("How far do you want to go? Enter a distance between 50 and 100");
       if (trackLength < 10){
      trackLength = 10;
    } else if 
          (trackLength > 100){
          trackLength = 100;
        };
          
  for (i = 1; i <= trackLength; i++){
  $("#playerOne_strip").append("<td>");
  //$("#playerTwo_strip").append("<td>");
    
    };
  
 }; //close setTrackLength

      
  setTrackLength();  

 // Reset the table to empty  
 //removes class for all td to start a game
  
function startGame(){     
  
  $("td").removeClass("active");
  $("#playerOne_strip > td:first").addClass( "active" ); 
  //$("#playerTwo_strip > td:first").addClass( "active" );

  
 $(document).on('keydown',function(e) {//add keydown eventListener (keydown)
     
  if(e.keyCode===39) { //right arrow
    if(playerOne < trackLength){
      movePlayer ('playerOne_strip');
      playerOne++;
    
    }  else        {
        alert("Game Over");
        gameOver();
      } 
  };

  if(e.keyCode===37) {
    if(playerOne < trackLength){
      reversPlayer ('playerOne_strip');
      playerOne--;
    
    }  
  };
   //end of playerOne, P, 80

    
  /*if(e.keyCode===81){
    if (playerTwo < trackLength){
     movePlayer ('playerTwo_strip');
      playerTwo++;
    }
    else{
        alert("Player 2 wins");
        gameOver();
      }
 };// end of playerTwo, Q, 81
     
   }); // close keydown eventListener (keydown)
    
  };

var speed = setInterval

startGame();
  
  movePlayer = function(player) {
    var activeCell = $("#" + player + " td.active");
    var moveCell = activeCell.next();

    activeCell.removeClass("active");
    moveCell.addClass("active");
  }; //close 'updatePlayer function'

  reversePlayer = function(player){
    var activeCell = $("#" + player + " td.active");
    var moveCell = activeCell.prev();

    activeCell.removeClass("active");
    moveCell.addClass("active");
  }; //close 'updatePlayer function'
  

  function gameOver() {
        window.location.reload(true);
  }; //close 'game over function'

}); //close 'document ready function'
*/

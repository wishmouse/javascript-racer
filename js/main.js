$(document).ready(function(){

var playerOne = 0; //P
var playerTwo = 0; // Q
var trackLength = 0;
  
//players and tracks from dropdown

function setTrackLength(){
      
    trackLength = prompt("How far do you want to go? Enter a distance between 10 and 30");
       if (trackLength < 5){
      trackLength = 5;
    } else if 
          (trackLength > 30){
          trackLength = 30;
        };
          
  for (i = 1; i <= trackLength; i++){
  $("#playerOne_strip").append("<td>");
  $("#playerTwo_strip").append("<td>");
    
    };
  
 }; //close setTrackLength

      
  setTrackLength();  

 // Reset the table to empty  
 //removes class for all td to start a game
  
function startGame(){     
  
  $("td").removeClass("active");
  $("#playerOne_strip > td:first").addClass( "active" ); 
  $("#playerTwo_strip > td:first").addClass( "active" );

  
 $(document).on('keyup',function(e) {//add keyup eventListener (keyup)
     
  if(e.keyCode===80) {
    if(playerOne < trackLength){
      movePlayer ('playerOne_strip');
      playerOne++;
    }
    else        {
        alert("Player 1 wins");
        gameOver();
      } 
  };
   //end of playerOne, P, 80

    
  if(e.keyCode===81){
    if (playerTwo < trackLength){
     movePlayer ('playerTwo_strip');
      playerTwo++;
    }
    else{
        alert("Player 2 wins");
        gameOver();
      }
 };// end of playerTwo, Q, 81
   
           
   }); // close keyup eventListener (keyup)
    
  };// close startGame function

startGame();
  
  movePlayer = function(player) {
    var activeCell = $("#" + player + " td.active");
    var moveCell = activeCell.next();

    activeCell.removeClass("active");
    moveCell.addClass("active");
  }; //close 'updatePlayer function'
  

  function gameOver() {
        window.location.reload(true);
  }; //close 'game over function'

}); //close 'document ready function'

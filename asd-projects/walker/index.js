/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var randomColor = "#000000".replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16);
  });
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    W: 87,
    A: 65,
    S: 83,
    D: 68,
  }
  var walker = {
    xPos: 0,
    yPos: 0,
    xSpeed: 0,
    ySpeed: 0,
  }
  var walker2 = {
    xPos: 0,
    yPos: 0,
    xSpeed: 0,
    ySpeed: 0,
  }
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown); 
  $(document).on('keyup', handleKeyUp);                      // change 'eventType' to the type of event you want to handle
  document.getElementById("walker").addEventListener("click", changeColor1)
  document.getElementById("walker2").addEventListener("click", changeColor2)

                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    
    repositionGameItem()
    wallCollision()
    redrawGameItem()
  }
  
  /* 
  Called in response to events.
  */
  
  function changeColor1(){
    var randomColor = "#000000".replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });
    document.getElementById("walker").style.backgroundColor = randomColor
    console.log("color change!")
  }
  function changeColor2(){
    var randomColor = "#000000".replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });
    document.getElementById("walker2").style.backgroundColor = randomColor
  }

  function handleKeyDown(event) {
    if(event.which === KEY.LEFT){
      walker.xSpeed = -5;
      walker.ySpeed = 0
    }
    if(event.which === KEY.UP){
      walker.ySpeed = -5;
      walker.xSpeed = 0;
    }
    if(event.which === KEY.RIGHT){
      walker.xSpeed = 5;
      walker.ySpeed = 0
    }
    if(event.which === KEY.DOWN){
      walker.ySpeed = 5;
      walker.xSpeed = 0;
    }
    if(event.which === KEY.A){
      walker2.xSpeed = -5;
      walker2.ySpeed = 0
    }
    if(event.which === KEY.W){
      walker2.ySpeed = -5;
      walker2.xSpeed = 0;
    }
    if(event.which === KEY.D){
      walker2.xSpeed = 5;
      walker2.ySpeed = 0
    }
    if(event.which === KEY.S){
      walker2.ySpeed = 5;
      walker2.xSpeed = 0;
    }
  }
  function handleKeyUp(event) {
    if(event.which === KEY.LEFT){
      walker.xSpeed = 0;
    }
    if(event.which === KEY.UP){
      walker.ySpeed = 0;
    }
    if(event.which === KEY.RIGHT){
      walker.xSpeed = 0;
    }
    if(event.which === KEY.DOWN){
      walker.ySpeed = 0;
    }
    if(event.which === KEY.A){
      walker2.xSpeed = 0;
    }
    if(event.which === KEY.W){
      walker2.ySpeed = 0;
    }
    if(event.which === KEY.D){
      walker2.xSpeed = 0;
    }
    if(event.which === KEY.S){
      walker2.ySpeed = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function repositionGameItem(){
    walker.xPos += walker.xSpeed
    walker.yPos += walker.ySpeed
    walker2.xPos += walker2.xSpeed
    walker2.yPos += walker2.ySpeed
  }
  function redrawGameItem(){
    $("#walker").css("left", walker.xPos)
    $("#walker").css("top", walker.yPos)
    $("#walker2").css("left", walker2.xPos)
    $("#walker2").css("top", walker2.yPos)
  }
  function wallCollision(){
    if(walker.xPos >= $("#board").width()-45){
      walker.xPos -= walker.xSpeed
    }
    if(walker.xPos < 0){
      walker.xPos -= walker.xSpeed
    }
    if(walker.yPos >= $("#board").height()-45){
      walker.yPos -= walker.ySpeed
    }
    if(walker.yPos < 0){
      walker.yPos -= walker.ySpeed
    }
    if(walker2.xPos >= $("#board").width()-45){
      walker2.xPos -= walker2.xSpeed
    }
    if(walker2.xPos < 0){
      walker2.xPos -= walker2.xSpeed
    }
    if(walker2.yPos >= $("#board").height()-45){
      walker2.yPos -= walker2.ySpeed
    }
    if(walker2.yPos < 0){
      walker2.yPos -= walker2.ySpeed
    }
  }
}

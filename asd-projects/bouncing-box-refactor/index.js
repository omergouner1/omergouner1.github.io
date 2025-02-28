/* global $ */
'use strict'
$(document).ready(function () {
  //////////////////////////////////////////////////////////////////
  /////////////////// SETUP ///////////////////////////////
  //////////////////////////////////////////////////////////////////
  var BOARD_WIDTH = $('#board').width();	// Number: the maximum X-Coordinate of the screen
  var positionX = 0;
  var speedX = 10;
  var points = 0;
  // Every time the box is clicked, call the handleBoxClick Function (see below)
  $('#box').on('click', handleBoxClick);
  // Every 50 milliseconds, call the update Function (see below)
  setInterval(update, 50);


  //////////////////////////////////////////////////////////////////
  /////////////////// CORE LOGIC ///////////////////////////////
  //////////////////////////////////////////////////////////////////

  /* 
  This Function will be called 20 times/second. Each time it is called,
  it should move the Box to a new location. If the box drifts off the screen
  turn it around! 
  */
  function update() {

    // set box position //
    setPosition()

    // set boundary of box //
    boxBoundary()
  }
  function setPosition() {
    positionX += speedX;
    $('#box').css("left", positionX);
  }
  function boxBoundary() {
    if (positionX > BOARD_WIDTH) {
      speedX = -speedX;
    }
    else if (positionX < 0) {
      speedX = -speedX;
    }
  }
  /* 
  This Function will be called each time the box is clicked. Each time it is called,
  it should increase the points total, increase the speed, and move the box to
  the left side of the screen.
  */
  function handleBoxClick() {
    // increase points
    increasePoints()

    // increase speed
    increaseSpeed()

    // reset the position of the box
    resetBox()
  }

  function increasePoints() {
    points += 1;
    $('#box').text(points);
  }
  function increaseSpeed() {
    if (speedX >= 0) {
      speedX += 3;
    }
    else if (speedX < 0) {
      speedX -= 3;
    }
  }
  function resetBox() {
    positionX = 0;
  }
  //////////////////////////////////////////////////////////////////
  /////////////////// HELPER FUNCTIONS ///////////////////////////////
  //////////////////////////////////////////////////////////////////










}); // DO NOT DELETE THIS LINE OF CODE. ALL JAVASCRIPT ABOVE HERE
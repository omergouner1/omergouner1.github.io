 /* global $ */
 'use strict'
 $(document).ready(function () {
     //////////////////////////////////////////////////////////////////
     /////////////////// EXAMPLE HEADER ///////////////////////////////
     //////////////////////////////////////////////////////////////////

     var BOARD_WIDTH = $('#board').width();	// Number: the maximum X-Coordinate of the screen

     // Every 50 milliseconds, call the update Function (see below)
     setInterval(main, 50);

     var x = 0;
     var y = 100;
     var left = 10;
     var down = 30;

     /* 
     This Function will be called 20 times/second. Each time it is called,
     it should move the Box to a new location. If the box drifts off the screen
     turn it around! 
     */
     function main() {
         getNewPosition()
     }

     // HELPER FUNCTIONS //
     function getNewPosition() {

         $('#box').css("top", y);
         $('#box').css("left", x);
         if (x > 1300) {
             left = -left;
         }
         else if (x < 0) {
             left = -left;
         }
         if (y > 600) {
             down = -down;
         }
         else if (y < 0) {
             down = -down;
         }
         x += left;
         y += down;
     }
 }); 
// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here

  applyFilter(reddify)
  applyFilterNoBackground(decreaseBlue)
  applyFilterNoBackground(increaseGreenByBlue)

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) { // Apply's the new filter to the image.
  for (var i = 0; i < image.length; i++) {
    for (var j = 0; j < image[i].length; j++) {
      var rgbString = image[i][j] // Converts the string into a number
      var rgbNumbers = rgbStringToArray(rgbString) // Puts the numbers into an array
      filterFunction(rgbNumbers) // Sends the numbers to be filtered
      rgbString = rgbArrayToString(rgbNumbers) // Puts the numbers back into a string
      image[i][j] = rgbString // New sorted numbers
    }
  }
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) { // Applies the filter to the image without the background
  var backgroundColour = image[0][0]
  for (var i = 0; i < image.length; i++) {
    for (var j = 0; j < image[i].length; j++) {
      if (image[i][j] === backgroundColour) {
        var rgbString = image[i][j]
        var rgbNumbers = rgbStringToArray(rgbString)
        filterFunction(rgbNumbers)
        rgbString = rgbArrayToString(rgbNumbers)
        image[i][j] = rgbString
      }

    }
  }
}

// TODO 5: Create thiltFe keepInBounds function
function keepInBounds(num1) { // Makes sure there are no numbers below 0 and above 255
  if (num1 < 0) {
    return 0
  } else if (num1 > 255) {
    return 255
  } else {
    return num1
  }

}

// TODO 3: Create reddify function
function reddify(array1) { // Turns every RED value of each pixel to 200
  array1[RED] = 200

}

// TODO 6: Create more filter functions

function decreaseBlue(array2) { // Subtracts 50 from every BLUE value of each pixel 
  array2[BLUE] = keepInBounds(array2[BLUE] - 50)

}
function increaseGreenByBlue(array3) { // Sets every GREEN value to the sum of every GREEN value and every BLUE value
  array3[GREEN] = keepInBounds(array3[BLUE] + array3[GREEN])
}
// CHALLENGE code goes below here

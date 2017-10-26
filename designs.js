
// Select color input

// Select size input

// When size is submitted by the user, call makeGrid()

 function makeGrid() {
// Your code goes here!
// Define all variable and select color nad size input
   let color = $('#colorPicker').val();
   let tableheight = $('#input_height').val();
   let tableWidth = $('input_width').val();
   let grid = "";

// Nested loops to create individual boxes
    for (let i=0; i < tableHeight; i++){
    grid += "<tr>"
    for(let m=0; m < tableWidth; m++){
      grid += "<td></td>"
    }
    grid += "</tr>"
    }

}

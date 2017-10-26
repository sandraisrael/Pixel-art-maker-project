
// Select color input

// Select size input

// When size is submitted by the user, call makeGrid()

 $('#actionButton').on('click', function makeGrid() {
// Your code goes here!
// Define all variable and select color nad size input
   let color = $('#colorPicker').val();
   let tableHeight = $('#input_height').val();
   let tableWidth = $('#input_width').val();
   let grid = "";

// Nested loops to create individual boxes
    for (let i=0; i < tableHeight; i++){
      grid += "<tr>"
      for(let m=0; m < tableWidth; m++){
        grid += "<td></td>"
      }
      grid += "</tr>"
  };

// create grid and adds class: selected
    $('#pixel_canvas').html(grid).addClass('selected');

// eventlistener for every click and add selected color
    $('.selected').on('click',function(event){
      $(event.target).css('background',color);
    });

};

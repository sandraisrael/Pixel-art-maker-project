const submitted = $('#sizePicker');
submitted.on("submit", function(event) {
    event.preventDefault();
    makeGrid();
});

function makeGrid() {

    // Define all variable and select color nad size input
    let tableHeight = $('#input_height').val();
    let tableWidth = $('#input_width').val();
    let grid = "";

    // Nested loops to create individual boxes
    for (let i = 0; i < tableHeight; i++) {
        grid += "<tr>"
        for (let m = 0; m < tableWidth; m++) {
            grid += "<td></td>"
        }
        grid += "</tr>"
    }

    // create grid
    $('#pixel_canvas').html(grid);

    // eventlistener for every click on cell
    $('td').on('click', function(event) {
        let color = $('#colorPicker').val();
        $(event.target).css('background', color);
    });
};

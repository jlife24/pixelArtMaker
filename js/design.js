// Select color input
// Select size input
let height, width, color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWidth').val();
  makeGrid(height, width);
  console.log("Height:" + height + " Width:" + width);
})


function makeGrid(height, width) {
  $('tr').remove();
// Your code goes here!
  for(let x = 1; x <= height; x++){
    $('#pixelCanvas').append('<tr id=table' + x + '></tr>');
    for(let y = 1; y <= width; y++){
      $('#table' + x).append('<td></td>');
    }
  }

// adding color to cell
$('td').click(function setColor(){
  color = $('#colorPicker').val();

  if($(this).attr('style')) {
    $(this).removeAttr('style')
  }else {
    $(this).attr('style', 'background-color:' + color);
  }
});

}

$(document).ready(function()
{
  var config = {
    pixel_size: 5,
    default_color: '#5D5D5D',
    debug: true,
    canvas_width: 'max',
    canvas_height: 'max'
  };

  var atomic    = new Atomic(config).init();  // ядро
  var atomizer  = new Atomizer(atomic).init();// редактор



  //atomic.d_matrix([]);



});

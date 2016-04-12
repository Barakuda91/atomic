(function( window, undefined ) {
  function g(config)
  {
  /*---CONFIG---*/
    var _this   = this;
    this.config = {};
    this.config.pixel_size    = config.pixel_size     || 5;
    this.config.default_color = config.default_color  || '#fff';
    this.config.debug         = config.debug          || false;



    this.canvas_element = document.getElementById("canvas");
    this.canvas = this.canvas_element.getContext("2d");

    this.click = false;

  /*----functions_privat----*/
/*--------------------------------------------------------------------------------------------------------------------
    * логирование проекта
    */
    this.logir = function(text, type)
    {
      var types = {0: 'INFO',1: 'WARN',2: 'ERROR'}
      type = type || 0;
      if(this.config.debug && typeof text == 'string') console.log(types[type]+': '+text);
      if(this.config.debug && typeof text == 'object') console.log(text);
    };
    this.get_position = function(e)
    {
      var rect = this.canvas_element.getBoundingClientRect();
      x = Math.floor((e.clientX - rect.left)/_this.config.pixel_size);
      y = Math.floor((e.clientY - rect.top)/_this.config.pixel_size);

      return [x,y];

    };
    this.init = function()
    {
      this.logir('Atomic Start');
      return this;
    };



/*--------------------------------------------------------------------------------------------------------------------
    отрисовывает пиксель цвета color в координатах x, y
    */
    this.d_pixel = function(x, y, color)
    {
      var c = this.canvas;
      if(typeof x == "object")
      {
        color = x[2] || y || this.config.default_color;
        y = x[1];
        x = x[0];
      }
      this.logir({color:color,x:x,y:y});

      c.fillStyle = color;
      c.fillRect(
        x*this.config.pixel_size,
        y*this.config.pixel_size,
        this.config.pixel_size,
        this.config.pixel_size
      );
      c.fillStyle = this.config.default_color;
    };

/*--------------------------------------------------------------------------------------------------------------------

    */
    this.d_matrix = function(matrix, color)
    {
      var _this = this;
      //color = color || this.config.default_color;
      matrix.forEach(function(el)
      {
        _this.d_pixel(el, color);
      });
    };
  /*----function_public-----*/
    this.test = 3;
  }

  window.Atomic = g;
})(window);

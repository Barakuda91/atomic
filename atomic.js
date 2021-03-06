(function( window, undefined ) {
  window.Atomic = function  (config)
  {
  /*---CONFIG---*/
    var _this   = this;
    this.config = {};
    this.config.pixel_size    = config.pixel_size     || 5;
    this.config.default_color = config.default_color  || '#fff';
    this.config.debug         = config.debug          || false;
    this.config.canvas_height = (config.canvas_height !== 'max' && typeof config.canvas_height == 'number') ? config.canvas_height : window.innerWidth;
    this.config.canvas_width  = (config.canvas_width !== 'max' && typeof config.canvas_width == 'number') ? config.canvas_width : window.innerHeight;

    this.pain_blok = 1;


    this.global_bloks = {
      map: {
        0: {name: 'empty', color: '#E4E4E4', walking: 1, strength: 0},
        1: {name: 'ground', color: '#582B02', walking: 1, strength: 0},
        2: {name: 'rock', color: '#848484', walking: 0, strength: 6},
        3: {name: 'glass', color: '#289000', walking: 1, strength: 0},
      },
      entity: {
        0: ''
      }
    }
    this.canvas_element = document.getElementById("canvas");
    this.canvas = this.canvas_element.getContext("2d");

    this.key_press = {
      ctrl: false
    }
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
      changeSize();
      function changeSize()
      {
        var canvas = document.getElementById("canvas");
        if(canvas)
        {
                canvas.width=document.body.clientWidth;
                canvas.height=document.body.clientHeight;
        }
      }
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
        (this.config.pixel_size*this.pain_blok),
        (this.config.pixel_size*this.pain_blok)
      );

      c.fillStyle = this.config.default_color;
      $('.cont').append('['+x+','+y+',"'+color+'"],');
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
    this.test = 3;
  }
})(window);

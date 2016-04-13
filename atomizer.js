(function( window, undefined ) {

  function g(atomic)
  {
    var _this = this;
    this.mouse_position = {
      last: [0,0] // последний отрисованый пиксел ??
    }

    this.bloks = {
      0: {name: 'rock', color:'gray'},
      1: {name: 'wall', color:'black'},
      2: {name: 'water', color:'blue'}
    }

    this.current_block = 0;
// инициализация модуля редактирования и создания карт и объектов
    this.init = function()
    {
      atomic.canvas_element.addEventListener('mousedown', this.mousedown);
      atomic.canvas_element.addEventListener('mouseup', this.mouseup);
      atomic.canvas_element.addEventListener('mousemove', this.mousemove);

      document.body.addEventListener('keydown', this.keydown);
      document.body.addEventListener('keyup', this.keyup);
      $('.change_block').click(this.change_block);

      atomic.logir('Atomizer Start');
      return this;
    }

// обработка нажатия ЛКМ
    this.mousedown = function(e)
    {
      atomic.click = true;
    }

// обработка отпускания ЛКМ
    this.mouseup = function(e)
    {
      atomic.click = false;
      atomic.d_pixel(atomic.get_position(e), _this.bloks[_this.current_block].color);
    }

// обработка движения мыши
    this.mousemove = function(e)
    {
      if(!atomic.click) return;
      var position = atomic.get_position(e);
      // if(this.key_press.ctrl)
      // {
      //   if(this.mouse_position.last[0] == position.x)
      //
      //   this.mouse_position.last = position;
      //
      // }
      atomic.d_pixel(atomic.get_position(e), _this.bloks[_this.current_block].color);
    }
// обработка нажатия клавиш
    this.keydown = function(e)
    {
      switch (e.keyCode)
      {
        case 17:
          atomic.key_press.ctrl = true;
        break;
      }
    }
    this.keyup = function(e)
    {
      switch (e.keyCode)
      {
        case 17:
          atomic.key_press.ctrl = false;
        break;
      }
    }
//
    this.change_block = function()
    {
      _this.current_block = $(this).data('block');
    }
  }

  window.Atomizer = g;
})(window);

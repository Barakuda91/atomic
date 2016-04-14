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

      $('#blocks, #infos').draggable({
        containment:'parent',
        cursor: 'pointer',
        handle: '.navigation'
      });
      $('#blocks .hide, #infos .hide').click(function()
      {
        $(this).parent().parent().find('.body').toggle();
      });

      $('body').on('keydown', this.keydown);
      $('body').on('keyup', this.keyup);
      $('.change_block').click(this.change_block);
      $('#pain_blok').change(this.change_pain_blok);

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
    this.change_pain_blok = function()
    {
      atomic.pain_blok = $(this).val();
    }
  }

  window.Atomizer = g;
})(window);

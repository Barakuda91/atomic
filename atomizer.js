(function( window, undefined ) {

  function g(atomic)
  {

// инициализация модуля редактирования и создания карт и объектов
    this.init = function()
    {
      atomic.canvas_element.addEventListener('mousedown', this.mousedown);
      atomic.canvas_element.addEventListener('mouseup', this.mouseup);
      atomic.canvas_element.addEventListener('mousemove', this.mousemove);
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
      atomic.d_pixel(atomic.get_position(e), 'lime');
    }

// обработка движения мыши
    this.mousemove = function(e)
    {
      if(!atomic.click) return;
      atomic.d_pixel(atomic.get_position(e), 'lime');

    }

  }

  window.Atomizer = g;
})(window);

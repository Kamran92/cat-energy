window.addEventListener("DOMContentLoaded", () => {
  /*кнопка меню для мобильной версии*/
  const header = $(".header"),
    nav = $(".header__nav-btn");

  const toggleClass = (elem, selector) => {
    elem.hasClass(selector)
      ? elem.removeClass(selector)
      : elem.addClass(selector)
  };

  nav.click(() => {
    toggleClass(header, "header--show")
  });

  /*слайдер*/
  const toggle = $(".example__toggle"),
    wrapContainer = $(".example__wrap-container"),
    wrapImg1 = $(".example__wrap-img1"),
    btnLeft = $(".example__btn-left"),
    btnRight = $(".example__btn-right"),
    scale = $(".example__toggle--scale");

  function changeStyles(inputValue) {
    toggle.val(inputValue);
    wrapImg1.css("width", inputValue + "%");
    wrapContainer.css("width", inputValue + "%");
  };

  const changeSelectorProperty = (
    selector,
    property,
    value) => {
    selector.css(property, value)
  };

  toggle.on("input", (event) => {
    const inputValue = event.target.value;
    changeStyles(inputValue);
  });

  btnLeft.on("click", () => {
    changeStyles(0);
    changeSelectorProperty(
      scale,
      "margin-left",
      "0px");
  });
  btnRight.on("click", () => {
    changeStyles(100);
    changeSelectorProperty(
      scale,
      "margin-left",
      "40px");
  });

  /*мобильная версия сладера*/
  $(window).resize(() => {
    const widthWindow = $(window).width();

    if (widthWindow < 768) {
      const num = +toggle.val();
      switch (true) {
        case (num < 50)
        :
          changeStyles(0);
          break;
        case (num >= 50)
        :
          changeStyles(100);
          break;
      }
    }
  })
});
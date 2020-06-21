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
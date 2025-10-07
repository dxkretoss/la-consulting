document.addEventListener("click", function (event) {
  if (event.target.closest(".header__inline-menu .header__menu-item")) {
    var menuItem = event.target.closest(".header__menu-item"),
      hasMegamenu = menuItem.closest(".has_megamenu");
    if (hasMegamenu.classList.contains("active_menu")) {
      hasMegamenu.classList.remove("active_menu"),
        document.querySelector(".list-menu--inline").classList.remove("active");
      var oldWidth = document.body.offsetWidth;
      document.body.classList.remove("overflow-hidden"),
        (document.body.style.width = oldWidth + "px");
    } else {
      document
        .querySelectorAll(".header__inline-menu .has_megamenu")
        .forEach(function (element) {
          element.classList.remove("active_menu");
        }),
        hasMegamenu.classList.add("active_menu"),
        document.querySelector(".list-menu--inline").classList.add("active");
      var oldWidth = document.body.offsetWidth;
      document.body.classList.add("overflow-hidden"),
        (document.body.style.width = oldWidth + "px");
    }
  }
}),
  document.addEventListener("click", function (event) {
    var container = document.querySelector(".block__mega-menu-main-wrapper"),
      hasMegamenu = document.querySelectorAll(".has_megamenu");
    // if (!container.contains(event.target)) {
    //   var isMegamenuClick = Array.from(hasMegamenu).some(function (element) {
    //     return element.contains(event.target);
    //   });
    //   isMegamenuClick ||
    //     (hasMegamenu.forEach(function (element) {
    //       element.classList.remove("active_menu");
    //     }),
    //     document.querySelector(".list-menu--inline").classList.remove("active"),
    //     document.body.classList.remove("overflow-hidden"),
    //     (document.body.style.width = "auto"));
    // }
  });

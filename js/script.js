let menu = document.querySelector("#navbar #menu-container");

let hamburger = document.querySelector("#hamburger-menu");

hamburger.addEventListener("click", () => {
  menu.style.display = "block";
});

document.addEventListener("click", e => {
  if (e.target == menu) {
    menu.style.display = "none";
  }
});

// Smooth Scrolling
$("a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});

// Change active menu item on scroll
$(document).ready(function () {
  $(window).scroll(function () {
    var topMenu = $(window).scrollTop();

    const menuItems = ["about", "projects", "skills", "education", "contact"];

    menuItems.forEach((item, i) => {
      if (i == 0) {
        if (topMenu >= $(`#${item}`).offset().top) {
          // If you have scrolled past section one do this.
          $(`.${item}-menu`).addClass("nav-active"); // Adds class of current-menu-item to the menu item with a class of menu-item-1
        } else {
          // If you have not scrolled section one do this.
          $(`.${item}-menu`).removeClass("nav-active"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
        }
      } else {
        if (topMenu >= $(`#${menuItems[i - 1]}`).offset().top) {
          $(`.${item}-menu`).addClass("nav-active");
          $(`.${menuItems[i - 1]}-menu`).removeClass("nav-active");
        } else {
          $(`.${item}-menu`).removeClass("nav-active");
        }
      }
    });
  });
});

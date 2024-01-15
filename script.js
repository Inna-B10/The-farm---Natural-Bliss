// sticky nav
document.addEventListener("scroll", (event) => {
  var navbar = document.getElementById("navbar");

  if (
    document.body.scrollTop >= 200 ||
    document.documentElement.scrollTop >= 200
  ) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  // console.log(navbar.offsetTop);
});

//SCROLL ON CLICK + animated nav link
//https://codepen.io/yuki-san/details/eJqLNO
var sections = $("section"),
  nav = $("nav"),
  nav_height = nav.outerHeight();

$(window).on("scroll", function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function () {
    var top = $(this).offset().top - nav_height - 160,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find("a").removeClass("active");
      sections.removeClass("active");

      $(this).addClass("active");
      nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
    }
  });
});

nav.find("a").on("click", function () {
  var $el = $(this),
    id = $el.attr("href");

  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - nav_height - 150,
    },
    500
  );

  return false;
});

$(document).ready(function () {
  $(".ham").click(function () {
    $(this).toggleClass("active");
    var allClasses = $(this.classList);
    var lastClass = allClasses[allClasses.length - 1];
    var nav = $("nav");

    if (lastClass === "active") {
      nav.find("ul").removeClass("hidden");
    } else {
      nav.find("ul").addClass("hidden");
    }
  });
  // console.log(allClasses);
  // console.log(allClasses.length);
  // console.log(allClasses[allClasses.length - 1]);
});

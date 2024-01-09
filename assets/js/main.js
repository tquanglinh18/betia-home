$(function () {
  $(".header__menu-mobile").click(() => {
    if ($(".header-mobile")[0].classList.contains("header-mobile--active")) {
      $(".header-mobile")
        .addClass("header-mobile--hide")
        .removeClass("header-mobile--active");
      setTimeout(() => {
        $(".header-mobile").css({
          display: "none",
        });
      }, 500);
    } else {
      $(".header-mobile")
        .removeClass("header-mobile--hide")
        .addClass("header-mobile--active")
        .show();
    }
  });

  $(".filter").each((index, item) => {
    $(item).click(() => {
      var cssQuerryFilterSelected =
        "#" + $(item).attr("id") + " .filter__option";
      $(cssQuerryFilterSelected).toggleClass("hidden");
      console.log(cssQuerryFilterSelected);
      $("#" + $(item).attr("id") + " .filter__selected--dropdown-icon img")
        .toggleClass("no-dropdown-rotate")
        .toggleClass("dropdown-rotate");
    });
  });

  $(".banner-slick").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "200px",
    prevArrow: `<div class="slick-prev">
      <img src="./assets/images/ic_dropdown.png" alt="" class="rotate-90"/>
          </div>`,
    nextArrow: `<div class="slick-next">
      <img src="./assets/images/ic_dropdown.png" alt="" class="rotate--90"/>
          </div>`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
          arrows: false,
        },
      },
    ],
  });

  $(".product__detail--banner").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    arrows: false,
  });

  const listBtnMenuParent = document.querySelectorAll(".btn-menu-parent");
  const listSubmenu = document.querySelectorAll(".sub-menu");
  const listDropDown = document.querySelectorAll(".dropdown");

  for (let i = 0; i < listBtnMenuParent.length; i++) {
    listBtnMenuParent[i].setAttribute("id", `btn-menu-parent-${i + 1}`);
    listBtnMenuParent[i].addEventListener("click", () => {
      var cssQuerry =
        "#" + listBtnMenuParent[i].getAttribute("id") + " .sub-menu__products";

      if (!listBtnMenuParent[i].classList.contains("active")) {
        $(cssQuerry).each((index, item) => {
          $(item).css({
            "animation-delay": index * 0.3 + 0.3 + "s",
          });
          setTimeout(() => {
            $(item).css({
              opacity: 1,
            });
          }, (index * 0.3 + 0.3) * 1000);
        });
        for (var j = 0; j < listBtnMenuParent.length; j++) {
          listBtnMenuParent[j].classList.remove("active");
          listDropDown[j].classList.replace(
            "dropdown-rotate",
            "no-dropdown-rotate"
          );
          listSubmenu[j].classList.add("hidden");
        }
        listBtnMenuParent[i].classList.add("active");
        listSubmenu[i].classList.remove("hidden");
        listDropDown[i].classList.replace(
          "no-dropdown-rotate",
          "dropdown-rotate"
        );
      } else {
        for (var j = 0; j < listBtnMenuParent.length; j++) {
          listBtnMenuParent[j].classList.remove("active");
        }
        listSubmenu[i].classList.add("hidden");
        listDropDown[i].classList.replace(
          "dropdown-rotate",
          "no-dropdown-rotate"
        );
        $(cssQuerry).each((index, item) => {
          $(item).removeAttr("style");
        });
      }
    });
  }
});

function openTab(evt, tabName) {
  var idTabSelected = "#".concat(tabName);
  var currentTarget = evt.currentTarget;
  $(".tab-content").hide().removeClass("tab-content--active");
  $(".tablinks").removeClass("active");
  $(idTabSelected).show().addClass("tab-content--active");
  $(currentTarget).addClass("active");
  if (!$(".filter").hasClass("hidden")) {
    $(".filter .filter__option").addClass("hidden");
  }
  if (
    $(".filter__selected--dropdown-icon img").hasClass("no-dropdown-rotate")
  ) {
    $(".filter__selected--dropdown-icon img")
      .addClass("no-dropdown-rotate")
      .removeClass("dropdown-rotate");
  }
}

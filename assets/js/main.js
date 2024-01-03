$(function () {
  $(".filter__selected").click(() => {
    $(".filter__option").toggleClass("hidden");
    $(".filter__selected--dropdown-icon img").toggleClass("rotate-180");
  });

  $(".banner-slick").slick({
    dots: false,
    infinite: true,
    speed: 300,
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
});

function openTab(evt, tabName) {
  var idTabSelected = "#".concat(tabName);
  var currentTarget = evt.currentTarget;
  $(".tabcontent").hide().removeClass("tabcontent-active");
  $(".tablinks").removeClass("active");
  $(idTabSelected).show().addClass("tabcontent-active");
  $(currentTarget).addClass("active");
}

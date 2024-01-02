$(function () {});

function openTab(evt, tabName) {
  var idTabSelected = "#".concat(tabName);
  var currentTarget = evt.currentTarget;
  $(".tabcontent").hide().removeClass("tabcontent-active");
  $(".tablinks").removeClass("active");
  $(idTabSelected).show().addClass("tabcontent-active");
  $(currentTarget).addClass("active");
}

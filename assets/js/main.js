const theme = localStorage.getItem("theme");

$(document).ready(function() {
  if (theme) $("body").attr("class", theme);
});

$("#toggle-theme").on("click", function() {
  $("body").toggleClass("light dark");
  localStorage.setItem("theme", $("body").attr("class"));
});

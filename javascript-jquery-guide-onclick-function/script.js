//JavaScript
// var box = document.getElementsByClassName("body-box-content")[0];
// var btn = document.getElementById("body-button");
// var close = document.getElementsByClassName("body-box-close")[0];

// btn.onclick = function () {
//   box.style.opacity == "0"
//     ? (box.style.opacity = "1")
//     : (box.style.opacity = "0");
// };

// close.onclick = function () {
//   box.style.opacity = "0";
// };

// JQuery
$("#body-button").click(function () {
  $(".body-box-content").css("opacity") == 0
    ? $(".body-box-content").css("opacity", "1")
    : $(".body-box-content").css("opacity", "0");
});

$(".body-box-close").click(function () {
  $(".body-box-content").css("opacity", "0");
});

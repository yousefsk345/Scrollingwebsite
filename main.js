let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let yousef = document.querySelector(".yousef");

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value / 2 + "px";
  moon.style.top = value * 3 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 3 + "px";
  yousef.style.fontSize = value + "px";
  if (scrollY >= 67) {
    yousef.style.fontSize = 67 + "px";
    yousef.style.position = "fixed";
    if (scrollY >= 460) {
      yousef.style.display = "none";
    } else {
      yousef.style.display = "block";
    }
  }
  if (scrollY >= 165) {
    document.querySelector(".main").style.background =
      "linear-gradient(#376281, #10001f)";
  } else {
    document.querySelector(".main").style.background =
      "linear-gradient(#200016, #10001f)";
  }
};

let starts = document.getElementById("start");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let boat1 = document.getElementById("boat1");
let aH2 = document.querySelector(".a-h2");
let cv = document.getElementById("cv");

window.onscroll = function () {
  let value = window.scrollY;

  // console.log(value);
  starts.style.left = value + "px";
  moon.style.top = value * 3 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river.style.top = value + "px";
  boat.style.left = value * 3 + "px";
  boat.style.top = value + "px";
  aH2.style.fontSize = value + "px";
  if (value >= 67) {
    aH2.style.fontSize = 67 + "px";
    aH2.style.position = "fixed";
    if (value >= 478) {
      aH2.style.display = "none";
    } else {
      aH2.style.display = "block";
    }
    if (value >= 127) {
      starts.style.display = "none";
    } else {
      starts.style.display = "block";
    }
  }
  if (value >= 478) {
    aH2.style.display = "none";
  } else {
    aH2.style.display = "block";
  }
  if (scrollY >= 67) {
    document.querySelector(".main").style.background =
      "linear-gradient(#376281, #10001f)";
  } else {
    document.querySelector(".main").style.background = "#200016";
  }
};

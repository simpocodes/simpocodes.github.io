let html = document.querySelector("html");
let body = document.querySelector("body");
let bg_Change = document.querySelector(".bg-change p span");
let a = document.querySelectorAll("a");
let menu = document.querySelector(".menu");
let close = document.querySelector(".close");
let nav = document.querySelector("nav");
let ulul = document.querySelectorAll("nav ul ul");
let banner = document.querySelector(".banner");
let slides = document.querySelectorAll(".slide");
let product = document.querySelectorAll(".product");
let price = document.querySelectorAll(".price");

// console.log(slides);

//............changing the background theme
bg_Change.addEventListener("click", (c) => {
  body.classList.toggle("text-white");
  body.classList.toggle("bg-dark");
  nav.classList.toggle("bg-dark");

  html.classList.toggle("text-white");
  c.target.classList.toggle("to-right");
  ulul.forEach((ulul) => {
    ulul.classList.toggle("bg-dark");
  });
  a.forEach((a) => {
    a.classList.toggle("achors-bg-change");
  });
  banner.classList.toggle("dark-banner");

  //....all price

  product.forEach((p) => {
    p.classList.toggle("dark-product");
  });
  price.forEach((p) => {
    p.classList.toggle("dark-price");
  });
});

//.............displaying the menu on sm and md deveices
menu.addEventListener("click", (c) => {
  nav.classList.toggle("show");
});
close.addEventListener("click", (c) => {
  c.preventDefault();
  nav.classList.remove("show");
});

//...............bannner images control slides
slides.forEach((e) => {});
// console.log(slides[0]);

// function timeout() {
//   setTimeout(timeInterval, 1000);
// }
// timeout();

// console.log();
let interval;
function timeInterval() {
  interval = setInterval(showSlide, 5000);
}
let num = 0;
function showSlide() {
  num += 1;
  if (num == 0) {
    console.log(num);
    slides[num].style.display = "block";
  } else if (num > 0) {
    removed = num - 1;
    slides[removed].style.display = "none";
    slides[num].style.display = "block";
  }
  if (num >= slides.length - 1) {
    num = 0;
  }
}

function clearTime() {
  clearInterval(interval);
}
body.addEventListener("load", (l) => {
  alert("hey");
});

function beginInterval() {
  // alert("hey");
  timeInterval();
}

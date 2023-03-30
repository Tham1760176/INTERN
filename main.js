const x = document.getElementById("myLinks");
function myFuntion() {
  const x = document.getElementById("myLinks");
  const a = window.screen.width;
  console.log({ a: window.screen.width }, "screen");
  if (x.style.display == "block" && a <= 768) {
    console.log(x.style.display, 1);
    x.style.display = "none";
  } else {
    console.log(x.style.display, 2);
    x.style.display = "block";
  }
}

window.addEventListener("resize", function () {
  const a = window.screen.width;
  if (a <= 768) {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
});

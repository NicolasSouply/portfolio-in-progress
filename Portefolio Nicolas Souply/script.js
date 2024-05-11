console.log("Connecté");

document.addEventListener("DOMContentLoaded", function () {
  let nbrImg = 2;
  let position = 0;
  let container = document.getElementById("container");
  let arrowLeft = document.getElementById("arrow-left");
  let arrowRight = document.getElementById("arrow-right");

  container.style.width = 800 * nbrImg + "px";

  for (let i = 0; i < nbrImg; i++) {
    let div = document.createElement("div");
    div.className = "photo";
    div.style.backgroundImage = "url('img/img" + i + ".jpg')";
    container.appendChild(div);
  }

  arrowLeft.addEventListener("click", function () {
    if (position < 0) position++;
    container.style.transform = "translate(" + position * 800 + "px)";
    container.style.transition = "all 0.5s ease";
  });
  arrowRight.addEventListener("click", function () {
    if (position > -nbrImg + 1) position--;
    container.style.transform = "translate(" + position * 800 + "px)";
    container.style.transition = "all 0.5s ease";
  });
  document
    .getElementById("downloadButton")
    .addEventListener("click", function () {
      window.location.href = "img/cv-nicolas-souply.jpg";
    });
});

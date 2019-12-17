const mouseOverRed = document.getElementsByClassName("logo-heading");

mouseOverRed[0].addEventListener("mouseover", function(event) {
    event.target.style.color = "red";

    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
});

const btn = document.querySelector(".btn");

btn.addEventListener("click", function(){ btn.style.background = "orange" });

const destImg = document.querySelector(".content-destination img");
let scale = 1;

destImg.addEventListener("wheel", function zoom(event) {
    destImg.onwheel = zoom;
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    destImg.style.transform = `scale(${scale})`;
});

const letsGo = document.querySelector(".text-content h2");

window.addEventListener("load", () => {
    letsGo.setAttribute("style", "background-color: red;")
    letsGo.style.transform = "scale(1.5)";
    letsGo.style.transition = "all 5s";
});

const introEffect = document.querySelector(".intro h2");

window.addEventListener("scroll", (e) => {
    introEffect.setAttribute("style", "background-color: purple;")
    introEffect.style.transform = "scale(0.7)";
    introEffect.style.transition = "all 3s";
});

const imgResize = document.querySelectorAll(".img-content img");

window.addEventListener("resize", (e) => {
    imgResize[0].setAttribute("style", "border: 2px solid gold")
    imgResize[1].setAttribute("style", "border: 2px solid gold")
});

const images = document.querySelector(".intro img");

images.addEventListener("mouseenter", () => {
    images.style.transform = "scale(0.75)";
    images.style.transition = "transform 0.3s"
});
images.addEventListener("mouseleave", () => {
    images.style.transform = "scale(1)"
});

const copy = document.querySelector(".footer p");

copy.addEventListener("dblclick", () => {
    copy.style.transform = "scale(2)";
});

const screenError = document.querySelector(".content-destination");

document.addEventListener("fullscreenerror", (e) => {
    console.error("an error occured changing into fullscreen");
    console.log(event);
});


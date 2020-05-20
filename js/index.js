const mouseOverGreen = document.getElementsByClassName("nav");

mouseOverGreen[0].addEventListener("mouseover", function(event) {
    event.target.style.color = "green";

    setTimeout(function() {
        event.target.style.color = "";
    }, 2000); //sets duration for function and ends it after "2000" units, makes cool effect on nav
});

const btn = document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", event => {
        btn.style.background = "orange"
    })
});

//use for each here to get each button instead, I changed code above to achieve this.

const destImg = document.querySelector(".content-destination img");
let scale = 1;

destImg.addEventListener("wheel", function zoom(event) {
    destImg.onwheel = zoom;
    event.preventDefault(); //prevents default event coming from the browser so this event will actually run.
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    destImg.style.transform = `scale(${scale})`; //researched this on stack overflow
});

const letsGo = document.querySelector(".text-content h2");

window.addEventListener("load", () => { //window makes this event available in global scope? Automatically fires event when page loads?
    letsGo.setAttribute("style", "background-color: red;")
    letsGo.setAttribute("style", "border: 4px solid pink") //You can use setAttribute to set an attribute to an element (style, class, id, title, etc.) or change the one it currently has.
    //I tried adding one here above, but it canceled out the first setAttribute I had. I wonder why they cannot co-exist.. maybe because they are both affecting the style attribute on the same element?
    letsGo.style.transform = "scale(1.5)"; //makes h2 tag scale up in size
    letsGo.style.transition = "all 5s"; //this sets how long the transition will last
});

const introEffect = document.querySelector(".intro h2");

window.addEventListener("scroll", (event) => { // setting up our function, event happens on scroll from user.
    introEffect.setAttribute("style", "background-color: cyan;") //here we select the style attribute of the ".intro h2" and change the background color to cyan.
    introEffect.style.transform = "scale(0.2)"; //scales size of element down tiny tiny
    introEffect.style.transition = "all 13s"; // sets time it takes for the effect to take place
});

const imgResize = document.querySelectorAll(".img-content img"); //selecting all img tags within .img-content div

window.addEventListener("resize", (e) => { //looking for a resize of the window to happen from the user
    imgResize[0].setAttribute("style", "border: 2px solid gold") //here I selected the style attribute of the selected element (.img-content img) using setAttribute and then added a gold border upon resize of the window
    imgResize[1].setAttribute("style", "border: 2px solid red") //[0] and [1] are how you select which image you are changing. For example I will change this gold border to a different color.
});

const images = document.querySelector(".intro img"); //this is how we select the image of the bus (".intro img")

images.addEventListener("mouseenter", () => { //this looks for the mouse to enter ".intro img" and the fires the event
    images.style.transform = "scale(0.75)"; // this property affects the selected img and scales it down to 75%
    images.style.transition = "transform 0.3s" //this affects the timing/duration of the transition
});
images.addEventListener("mouseleave", () => {
    images.style.transform = "scale(1)" //putting "scale(1)" here will make the image go back to it's original size after the mouse leaves. //this few lines of code is used to complete the desired effect.  When the mouse leaves the image, the image will return back to its original size, therefore you get the "scale(1)" in the code    images.style.transform = "scale(1)"
});

const copy = document.querySelector(".footer p"); // used to select the <p> tag in the footer "copyright 2018 fun bus"

copy.addEventListener("dblclick", () => { //adds an event listener; listens for a double click on the <p> tag and then..
    copy.style.transform = "scale(2)"; //this line of code doubles the <p> tag's content in size.
});

const screenError = document.querySelector(".content-destination"); //selects the entire "content-destination" div

document.addEventListener("fullscreenerror", (e) => { //will console log "an error occurred changing into full screen"
    console.error("an error occurred changing into fullscreen");
    console.log(event);
});

const stopTheLink = document.querySelectorAll('.nav-link') //selects the nav bar a tags (home, about us, blog, contact)

stopTheLink[0].addEventListener('click', (e) => {
    if (true === false) {
        event.preventDefault();
    }
});

stopTheLink[1].addEventListener('click', (e) => {
    if (true === false) {
        event.preventDefault();
    }
});

stopTheLink[2].addEventListener('click', (e) => {
    if (true === false) {
        event.preventDefault();
    }
});

stopTheLink[3].addEventListener('click', (e) => {
    if (true === false) {
        event.preventDefault();
    }
}); //could I use something more dry here??

const body  = document.querySelector("body"); //selecting the body div

body.addEventListener("click", () => {//this is telling JS to watch for a click event on the body div
    body.style.backgroundColor = "green";//sets the backGround color style attribute for the body div to green
    console.log("me last!"); //simple console.log here, logs out in console
});

const sauce = document.querySelector(".intro"); //selects the intro div

sauce.addEventListener("click", () => {//tells javascript to watch for a click event on the intro div
    sauce.style.backgroundColor = "yellow"; //sets the style attribute backGround color to yellow
    console.log("me second!"); //playing around with order of the console.logs
});

const topHat = document.querySelector(".intro p");//selects the .intro p

topHat.addEventListener("click", (event) => {//tells js to watch for a click event on the .intro p
    topHat.style.backgroundColor = "magenta";//sets the backGround color to magenta
    console.log("me first!"); //playing w console.logs
    console.log(event); //MouseEvent is logged out into the console with info
    event.stopPropagation(); //this prevents "further propagation" of the current event. This is helpful to stop bubbling. However it does not prevent default actions from occurring! You must use preventDefault() for this.
});
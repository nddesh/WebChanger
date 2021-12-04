//specify elements/sections from the iframe pages
var page = document.querySelector("#main");
var page2 = document.querySelector(".article h3");
var page3 = document.querySelector(".article h1");
var page4 = document.querySelector("div .byline");

//set all values to nothing on page load
function init() {
    window.onbeforeunload = function (e) { localStorage. clear(); }
    localStorage.setItem("font", '');
    localStorage.setItem("fColor", '');
    localStorage.setItem("fill", '');
    localStorage.setItem("decor", '');
    localStorage.setItem("style", '');
}

//Change page font
page.style.fontFamily = localStorage.getItem("font");
page2.style.fontFamily = localStorage.getItem("font");
page3.style.fontFamily = localStorage.getItem("font");
page4.style.fontFamily = localStorage.getItem("font");

page.style.color = localStorage.getItem("fColor");
page2.style.color = localStorage.getItem("fColor");
page3.style.color = localStorage.getItem("fColor");
page4.style.color = localStorage.getItem("fColor");

page.style.backgroundColor = localStorage.getItem("fill");

page.style.fontWeight = localStorage.getItem("style");
page2.style.fontWeight = localStorage.getItem("style");
page3.style.fontWeight = localStorage.getItem("style");
page4.style.fontWeight = localStorage.getItem("style");

page.style.textDecoration = localStorage.getItem("decor");
page2.style.textDecoration = localStorage.getItem("decor");
page3.style.textDecoration = localStorage.getItem("decor");
page4.style.textDecoration = localStorage.getItem("decor");

function font() {
    console.log(localStorage.getItem("font"));
    localStorage.setItem("font", document.getElementById("font").value);
}

function fontColor() {
    console.log(localStorage.getItem("fColor"));
    localStorage.setItem("fColor", document.getElementById("color").value);
}

function fill() {
    console.log(localStorage.getItem("fill"));
    localStorage.setItem("fill", document.getElementById("fill").value);
}

function tStyle() {
    console.log('hi');
    localStorage.setItem("style", document.getElementById("style").value);
}

function decor() {
    console.log(localStorage.getItem("decor"));
    localStorage.setItem("decor", document.getElementById("decor").value);
}
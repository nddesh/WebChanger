// THE CULPRITS

var page = document.querySelector("#main");
var highlight = document.getElementById("highlight");
// var frame = document.getElementById("yourDesign");

function init() {
    localStorage.setItem("font", '');
    localStorage.setItem("fColor", '');
    localStorage.setItem("fill", '');
    localStorage.setItem("size", '');
    localStorage.setItem("case", '');
}

page.style.fontFamily = localStorage.getItem("font");
page.style.color = localStorage.getItem("fColor");
page.style.backgroundColor = localStorage.getItem("fill");
page.style.fontSize = localStorage.getItem("size");
page.style.textTransform = localStorage.getItem("case");

function font() {
    console.log(localStorage.getItem("font"));
    localStorage.setItem("font", document.getElementById("font").value);
}

function fontColor() {
    console.log(localStorage.getItem("fColor"));
    localStorage.setItem("fColor", document.getElementById("fontColor").value);
}

function fill() {
    console.log(localStorage.getItem("fill"));
    localStorage.setItem("fill", document.getElementById("fill").value);
}

function size() {
    console.log(localStorage.getItem("size"));
    localStorage.setItem("size", document.getElementById("size").value);
}

function style() {
    console.log(localStorage.getItem("case"));
    localStorage.setItem("case", document.getElementById("letterCase").value);
}
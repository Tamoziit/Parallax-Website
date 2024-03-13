let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
let mountains_front = document.getElementById("mountains_front");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let header =  document.querySelector("header");
const dropdown_btn = document.getElementById("dropdown_btn");
const dropdown_content = document.getElementById("dropdown_content");

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
});

dropdown_btn.addEventListener("click", () => {
    if(dropdown_btn.classList.contains("active")) {
        dropdown_content.style.display = "none";
        dropdown_btn.classList.remove("active");
    }
    else {
        dropdown_content.style.display = "block";
        dropdown_btn.classList.add("active");
    }
    dropdown_btn.style.position = "absolute";
    dropdown_btn.style.right = "0";
    dropdown_btn.style.top = "0";
    dropdown_content.style.top= 22 +'px';
});
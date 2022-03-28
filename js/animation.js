let i = 0;
let tag = document.querySelector(".digitaContainer h1");

let html = document.querySelector(".digitaContainer h1").innerHTML;
let attr = tag.setAttribute("data", html);

let txt = tag.getAttribute("data");
let speed = 190;

function typeWriter() {
    if (i <= txt.length) {
        document.querySelector(".digitaContainer h1").innerHTML = txt.slice(0, i + 1);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
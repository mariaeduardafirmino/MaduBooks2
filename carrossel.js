const imgs = document.querySelector("#img")
const img = document.querySelector("#img img")

let slide = 0;

function carrossel() {
    slide ++

    if (slide > img.lenght -1) {
        slide = 0
    }

    imgs.style.transform = `translateX(${-slide * 500}px)`
}

setInterval(carrossel, 1800)
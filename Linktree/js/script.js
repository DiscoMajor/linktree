function rain() {
    let cloud = document.querySelector(".cloud");
    let drop = document.createElement("div");
    let left = Math.floor(Math.random() * 270);
    drop.classList.add("text");
    cloud.appendChild(drop);
    drop.innerText = "💧";
    drop.style.left = left + "px";

    setTimeout(function () {
        cloud.removeChild(drop);
    }, 500);
}

setInterval(function () {
    rain();
}, 20);

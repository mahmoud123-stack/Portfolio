let button = document.getElementById("press");
let list = document.querySelector(".NavBar ul");
let Icon = document.createElement("i");
Icon.className = "fa-solid fa-bars";
button.appendChild(Icon);

button.onclick = function () {
    if (list.classList.contains("listActive")) {
        list.classList.remove("listActive");
        button.classList.remove("clicked");
        Icon.className = "fa-solid fa-bars";
    } else {
        list.classList.add("listActive");
        button.classList.add("clicked");
        Icon.className = "fa-solid fa-xmark";
    }
}

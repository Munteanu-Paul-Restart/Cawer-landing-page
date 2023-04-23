const tabs = document.querySelectorAll(".tab");

console.log(tabs)
tabs.forEach((tab) => {
    tab.insertAdjacentHTML("afterbegin", '<div class="selector"></div>');
    tab.addEventListener("mouseenter", (event) => {
        tab.firstChild.style.height = "100%";
    });

    tab.addEventListener("mouseleave", (event) => {
        tab.firstChild.style.height = "10%";
    });
});

const left = document.getElementById("left");
const logo = document.getElementById("grandLogo");
left.addEventListener("mouseenter", (event) => {
    console.log("ajoute")
    logo.classList.add("glow");
});

left.addEventListener("mouseleave", (event) => {
    logo.classList.remove("glow");
});

const right = document.getElementById("right");
const login = document.getElementById("login");
right.addEventListener("mouseenter", (event) => {
    console.log("ajoute")
    login.classList.add("glow");
});

right.addEventListener("mouseleave", (event) => {
    login.classList.remove("glow");
});

document.querySelector("body").insertAdjacentHTML("beforeend", '<div id="wut"></div>');
document.addEventListener("mousemove", (event) => {
    document.getElementById("wut").style.left = "" + event.clientX;
    document.getElementById("wut").style.top = "" + (event.clientY - 20) + "px";
});

document.addEventListener("click", (event) => {
    if (document.getElementById("wut").style.display === "none") document.getElementById("wut").style.display = "unset";
    else document.getElementById("wut").style.display = "none";
});
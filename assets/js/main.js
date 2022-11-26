// Menu
var openMobile = document.querySelector(".nav__open").addEventListener("click", function () {
    document.querySelector(".nav__close").style.display = "flex";
    document.querySelector(".nav__submenu").style.display = "inline";
});


var closeMobile = document.querySelector(".nav__close").addEventListener("click", function () {
    document.querySelector(".nav__close").style.display = "none";
    document.querySelector(".nav__submenu").style.display = "none";
});



// Submenu arrows
var arrowDown = document.querySelector(".nav__arrow--down");
var arrowDowns = document.querySelector(".nav__arrow--downs");

var subList = document.querySelector(".nav__ul--son");
var companyList = document.querySelector(".nav__ul--company");

var arrowUp = document.querySelector(".nav__arrow--up");
var arrowUps = document.querySelector(".nav__arrow--ups");


// Primeiro submenu
arrowDown.addEventListener("click", function () {
    subList.style.display = "block";
    arrowUp.style.display = "inline";
    arrowDown.style.display = "none";
});

arrowUp.addEventListener("click", function () {
    subList.style.display = "none";
    arrowUp.style.display = "none";
    arrowDown.style.display = "inline";
});


// Segundo submenu
arrowDowns.addEventListener("click", function () {
    companyList.style.display = "block";
    arrowUps.style.display = "inline";
    arrowDowns.style.display = "none";
});

arrowUps.addEventListener("click", function () {
    companyList.style.display = "none";
    arrowUps.style.display = "none";
    arrowDowns.style.display = "inline";
})
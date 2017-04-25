// If exist "modal-content" block in HTML code
var link = document.querySelector(".write-us");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");

var form = popup.querySelector("form");
var name = popup.querySelector("[name='name']");
var email = popup.querySelector("[name='email']");
var text = popup.querySelector("[name='text']");

link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    //name.focus();
});

close.addEventListener("click", function (event) {
    popup.classList.remove("modal-content-show");
});

form.addEventListener("submit", function (event) {
    if(!(name.value && email.value && text.value)) {
    event.preventDefault();
    console.log("Введите имя, e-mail и текст письма");
    }
});

// If exist "modal-content-map" block in HTML code
var mapOpen = document.querySelector(".open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-map-show");
});

mapClose.addEventListener("click", function (event) {
    mapPopup.classList.remove("modal-content-map-show");
});
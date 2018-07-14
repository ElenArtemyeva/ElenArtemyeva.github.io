var link = document.querySelector(".button-map");
var popup = document.querySelector(".modal__subscription");
var close = popup.querySelector(".appointment-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var mail = popup.querySelector("[name=email]");
var review = popup.querySelector("[name=review]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
});	


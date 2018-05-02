var button = document.querySelector(".form-button");
var popup = document.querySelector(".modal-appointment");
var close = document.querySelector(".modal-close");

button.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});
close.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.remove("modal-show");
});
window.addEventListener("keydown", function(evt){
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});
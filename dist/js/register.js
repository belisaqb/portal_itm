document.addEventListener("DOMContentLoaded", function () {
    const userButton = document.querySelector(".img-user button");
    const registrationPopup = document.getElementById("registration-popup");
    const closePopupButton = document.querySelector(".close-popup-button");

    userButton.addEventListener("click", function () {
        registrationPopup.style.display = "block";
    });

    function closePopup() {
        registrationPopup.style.display = "none";
    }

    closePopupButton.addEventListener("click", closePopup);
});

document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-button");
    const registrationPopup = document.getElementById("registration-popup");
    const loginPopup = document.getElementById("login-popup");
    const closePopupButton = document.getElementById("close-login-popup");

    const registerButton = document.getElementById("register-button");

    loginButton.addEventListener("click", function () {
        loginPopup.style.display = "block";
        registrationPopup.style.display = "none";
    });

    registerButton.addEventListener("click", function () {
        loginPopup.style.display = "none";
        registrationPopup.style.display = "block";
    });

    function closePopup() {
        loginPopup.style.display = "none";
    }

    closePopupButton.addEventListener("click", closePopup);
});
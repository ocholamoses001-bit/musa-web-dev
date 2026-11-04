
document.addEventListener("DOMContentLoaded", function() {

    const button = document.getElementById("welcome-btn");
    const message = document.getElementById("message");

    button.addEventListener("click", function() {
        message.textContent = "Welcome to my portfolio! I'm glad you're here.";
    });

});
 

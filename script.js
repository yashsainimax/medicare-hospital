const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


document.querySelectorAll(".nav-links a").forEach(function(link){

    link.addEventListener("click", function(){

        navLinks.classList.remove("active");

    });

});


const appointmentForm =
    document.getElementById("appointmentForm");

const appointmentMessage =
    document.getElementById("appointmentMessage");


appointmentForm.addEventListener("submit", function(event){

    event.preventDefault();

    appointmentMessage.textContent =
        "Your appointment request has been submitted successfully.";

    appointmentForm.reset();

});
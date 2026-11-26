
const mascotButton = document.getElementById("animate-mascot");

const mascot = document.querySelector(".mascot");
const mascotImage = document.querySelector(".mascot img");

if (mascotButton) {
    console.log("Mascot button found");

    mascotButton.addEventListener("click", function() {

        mascot.style.visibility = "visible";

        // Reset the previous animation
        mascot.style.animationName = "none";
        mascotImage.style.animationName = "none";

        // Restart the animation
        void mascot.offsetWidth;

        mascot.style.animationName = "mascotMove";
        mascotImage.style.animationName = "mascotBounce";
    });
}


const emailButton = document.getElementById("send-email");
const plane = document.querySelector(".paper-plane");

emailButton.addEventListener("click", function() {
    plane.style.visibility = "visible";
    plane.style.animation = "none";

    void plane.offsetWidth;

    plane.style.animation = "planeFly 2s ease-in forwards";
});
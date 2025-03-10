

document.addEventListener("DOMContentLoaded", function () {
    const bwScreen = document.querySelector('.bw');
    const pinkScreen = document.querySelector('.pink');
    const knightButton = document.querySelector('.knight_bw');

    knightButton.addEventListener("click", function () {
        const isPinkActive = pinkScreen.classList.contains("active");

        if (isPinkActive) {
            pinkScreen.classList.remove("active");
            bwScreen.classList.add("active");
        } else {
            pinkScreen.classList.add("active");
            bwScreen.classList.remove("active");
        }
    });
});
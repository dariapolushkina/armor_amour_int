document.addEventListener("DOMContentLoaded", function () {
    const bw = document.querySelector('.knight.bw');
    const pink = document.querySelector('.knight.pink');
    const clickKnight = document.querySelector('.knight_bw .knight_svg'); 

    clickKnight.addEventListener("click", function () {
        if (bw.style.opacity === "1" || bw.style.opacity === "") {
            bw.style.opacity = "0";
            bw.style.pointerEvents = "none";
            pink.style.opacity = "1";
            pink.style.pointerEvents = "auto";
        } else {
            bw.style.opacity = "1";
            bw.style.pointerEvents = "auto";
            pink.style.opacity = "0";
            pink.style.pointerEvents = "none";
        }
    });
});
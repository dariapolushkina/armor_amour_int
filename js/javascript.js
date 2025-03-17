document.addEventListener("DOMContentLoaded", function () {
    // переключение экранов 2 блока
    let bw = document.querySelector('.knight.bw');
    let pink = document.querySelector('.knight.pink');
    let clickKnight = document.querySelector('.knight_bw .knight_svg');

    clickKnight.addEventListener("click", function () {
        let isBwVisible = bw.style.opacity === "1" || bw.style.opacity === "";
        bw.style.opacity = isBwVisible ? "0" : "1";
        bw.style.pointerEvents = isBwVisible ? "none" : "auto";
        pink.style.opacity = isBwVisible ? "1" : "0";
        pink.style.pointerEvents = isBwVisible ? "auto" : "none";
        clickKnight.style.opacity = isBwVisible ? "0" : "1";
        clickKnight.style.pointerEvents = "auto";
    });

    // текст уходит от мыши
    let textAwayLeft = document.querySelector(".text_2_left");
    let textAwayRight = document.querySelector(".text_2_right");

    function wrapLetters(textElement) {
        let text = textElement.textContent.trim();
        textElement.innerHTML = "";
        for (let char of text) {
            let span = document.createElement("span");
            span.classList.add("letter");
            span.textContent = char;
            textElement.appendChild(span);
        }
    }
    wrapLetters(textAwayLeft);
    wrapLetters(textAwayRight);
    let letters = document.querySelectorAll(".letter");

    document.addEventListener("mousemove", (e) => {
        letters.forEach(letter => {
            let rect = letter.getBoundingClientRect();
            let letterX = rect.left + rect.width / 2;
            let letterY = rect.top + rect.height / 2;

            let dist = Math.sqrt((e.clientX - letterX) ** 2 + (e.clientY - letterY) ** 2);
            let maxDist = 130;

            if (dist < maxDist) {
                letter.style.transition = "transform 0.2s ease-out";
                letter.style.transform = `translateX(${(-5 - Math.random() * 20)}vw) rotate(${(-10 - Math.random() * 50)}deg)`;
            } else {
                letter.style.transition = "transform 3.5s ease-in-out";
                letter.style.transform = "translateX(0) rotate(0)";
            }
        });
    });

     // кулак-ладонь
     let closed = document.querySelector('.hand.closed');
     let open = document.querySelector('.hand.open');
     let clickHand = document.querySelector('.hand_closed .hand_closed_svg');
     let clickHandBack = document.querySelector('.hand_open .hand_open_svg');
 
     function toggleHand() {
         let isClosedVisible = closed.style.opacity === "1" || closed.style.opacity === "";
         closed.style.opacity = isClosedVisible ? "0" : "1";
         closed.style.pointerEvents = isClosedVisible ? "none" : "auto";
         open.style.opacity = isClosedVisible ? "1" : "0";
         open.style.pointerEvents = isClosedVisible ? "auto" : "none";
     }
 
     clickHand.addEventListener("click", toggleHand);
     clickHandBack.addEventListener("click", toggleHand);
});


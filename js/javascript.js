// document.addEventListener("DOMContentLoaded", function () {
//     const bw = document.querySelector('.knight.bw');
//     const pink = document.querySelector('.knight.pink');
//     const clickKnight = document.querySelector('.knight_bw .knight_svg'); 

//     clickKnight.addEventListener("click", function () {
//         if (bw.style.opacity === "1" || bw.style.opacity === "") {
//             bw.style.opacity = "0";
//             bw.style.pointerEvents = "none";
//             pink.style.opacity = "1";
//             pink.style.pointerEvents = "auto";
//         } else {
//             bw.style.opacity = "1";
//             bw.style.pointerEvents = "auto";
//             pink.style.opacity = "0";
//             pink.style.pointerEvents = "none";
//         }
//     });
// });

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

            clickKnight.style.opacity = "0"; 
            clickKnight.style.pointerEvents = "auto"; 
        } else {
            bw.style.opacity = "1";
            bw.style.pointerEvents = "auto";
            pink.style.opacity = "0";
            pink.style.pointerEvents = "none";

            clickKnight.style.opacity = "1"; 
            clickKnight.style.pointerEvents = "auto"; 
        }
    });
});







document.addEventListener("DOMContentLoaded", function () {
    const closed = document.querySelector('.hand.closed');
    const open = document.querySelector('.hand.open');
    const clickHand = document.querySelector('.hand_closed .hand_closed_svg'); 

    clickHand.addEventListener("click", function () {
        if (closed.style.opacity === "1" || closed.style.opacity === "") {
            closed.style.opacity = "0";
            closed.style.pointerEvents = "none";
            open.style.opacity = "1";
            open.style.pointerEvents = "auto";
        } else {
            closed.style.opacity = "1";
            closed.style.pointerEvents = "auto";
            open.style.opacity = "0";
            open.style.pointerEvents = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const closed = document.querySelector('.hand.closed');
    const open = document.querySelector('.hand.open');
    const clickHandBack = document.querySelector('.hand_open .hand_open_svg'); 

    clickHandBack.addEventListener("click", function () {
        if (open.style.opacity === "1" || open.style.opacity === "") {
            open.style.opacity = "0";
            open.style.pointerEvents = "none";
            closed.style.opacity = "1";
            closed.style.pointerEvents = "auto";
        } else {
            open.style.opacity = "1";
            open.style.pointerEvents = "auto";
            closed.style.opacity = "0";
            closed.style.pointerEvents = "none";
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".text_2_left");
    const text = textElement.textContent.trim();
    textElement.innerHTML = ""; 
    for (let char of text) {
        if (char !== " ") { 
            let span = document.createElement("span");
            span.classList.add("letter");
            span.innerHTML = char;
            textElement.appendChild(span);
        }
    }
});

// document.addEventListener("DOMContentLoaded", function () {
//     const textElement = document.querySelector(".text_2_right");
//     const text = textElement.textContent.trim();
//     textElement.innerHTML = ""; 
//     for (let char of text) {
//         if (char !== " ") { 
//             let span = document.createElement("span");
//             span.classList.add("letter");
//             span.innerHTML = char;
//             textElement.appendChild(span);
//         }
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const textElement = document.querySelector(".text_2_left");
//     const text = textElement.textContent.trim();

//     textElement.innerHTML = ""; // Очищаем текст
//     for (let char of text) {
//         let span = document.createElement("span");
//         span.classList.add("letter");
//         span.textContent = char; // НЕ сохраняем пробелы
//         textElement.appendChild(span);
//     }

//     document.querySelectorAll(".letter").forEach(letter => {
//         letter.addEventListener("mouseenter", () => {
//             letter.style.transition = "transform 0.5s ease-out";
//             letter.style.transform = `translateX(${(-15 - Math.random() * 80)}vw) rotate(${(-10 - Math.random() * 20)}deg)`;
//         });

//         letter.addEventListener("mouseleave", () => {
//             letter.style.transition = "transform 1.5s ease-in-out";
//             letter.style.transform = "translateX(0) rotate(0)";
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const textElement = document.querySelector(".text_2_left");
//     const text = textElement.textContent.trim();

//     textElement.innerHTML = ""; 
//     for (let char of text) {
//         let span = document.createElement("span");
//         span.classList.add("letter");
//         span.textContent = char;
//         textElement.appendChild(span);
//     }

//     const letters = document.querySelectorAll(".letter");
    
//     document.addEventListener("mousemove", (e) => {
//         letters.forEach(letter => {
//             const rect = letter.getBoundingClientRect();
//             const letterX = rect.left + rect.width / 2;
//             const letterY = rect.top + rect.height / 2;
            
//             const dist = Math.sqrt((e.clientX - letterX) ** 2 + (e.clientY - letterY) ** 2);
//             const maxDist = 130; 

//             if (dist < maxDist) {
//                 letter.style.transition = "transform 0.2s ease-out";
//                 letter.style.transform = `translateX(${(-5 - Math.random() * 20)}vw) rotate(${(-10 - Math.random() * 50)}deg)`;
//             } else {
//                 letter.style.transition = "transform 3.5s ease-in-out";
//                 letter.style.transform = "translateX(0) rotate(0)";
//             }
//         });
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    const textAwayLeft = document.querySelector(".text_2_left");
    const textAwayRight = document.querySelector(".text_2_right");

    function wrapLetters(textAway) {
        const text = textAway.textContent.trim();
        textAway.innerHTML = "";
        for (let char of text) {
            let span = document.createElement("span");
            span.classList.add("letter");
            span.textContent = char;
            textAway.appendChild(span);
        }
    }

    wrapLetters(textAwayLeft);
    wrapLetters(textAwayRight);

    const letters = document.querySelectorAll(".letter");

    document.addEventListener("mousemove", (e) => {
        letters.forEach(letter => {
            const rect = letter.getBoundingClientRect();
            const letterX = rect.left + rect.width / 2;
            const letterY = rect.top + rect.height / 2;

            const dist = Math.sqrt((e.clientX - letterX) ** 2 + (e.clientY - letterY) ** 2);
            const maxDist = 130;

            if (dist < maxDist) {
                letter.style.transition = "transform 0.2s ease-out";
                letter.style.transform = `translateX(${(-5 - Math.random() * 20)}vw) rotate(${(-10 - Math.random() * 50)}deg)`;
            } else {
                letter.style.transition = "transform 3.5s ease-in-out";
                letter.style.transform = "translateX(0) rotate(0)";
            }
        });
    });
});
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

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".text_2_right");
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
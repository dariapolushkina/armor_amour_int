document.addEventListener("DOMContentLoaded", function () {
    // переключение экранов 2 блока
    let bw = document.querySelector(".knight.bw");
    let pink = document.querySelector(".knight.pink");
    let clickKnight = document.querySelector(".knight_bw .knight_svg");
    let swordSvgs = document.querySelectorAll(".swords .sword_svg");

    function toggleScreens() {
        let isBwVisible = bw.style.opacity === "1" || bw.style.opacity === "";

        bw.style.opacity = isBwVisible ? "0" : "1";
        bw.style.pointerEvents = isBwVisible ? "none" : "auto";
        pink.style.opacity = isBwVisible ? "1" : "0";
        pink.style.pointerEvents = isBwVisible ? "auto" : "none";

        clickKnight.style.opacity = isBwVisible ? "0" : "1";
        clickKnight.style.pointerEvents = "auto";

        swordSvgs.forEach(sword => {
            sword.style.pointerEvents = isBwVisible ? "none" : "auto";
        });
    }

    clickKnight.addEventListener("click", toggleScreens);

    // текст уходит от мыши
    document.querySelectorAll(".text_2_left, .text_2_right").forEach(block => {
        let text = block.textContent.trim();
        block.innerHTML = text.split("").map(char => `<span class="bukva">${char}</span>`).join("");
    });

    let bukvy = document.querySelectorAll(".bukva");
    let activeSwords = 0;

    function animateBukvy(sword, isEnter) {
        let swordRect = sword.getBoundingClientRect();
        let swordX = swordRect.left + swordRect.width / 2;
        let swordY = swordRect.top + swordRect.height / 2;
        let maxDist = Math.min(window.innerWidth, window.innerHeight) * 0.8;

        activeSwords += isEnter ? 1 : -1;
        activeSwords = Math.max(0, activeSwords);

        bukvy.forEach((bukva, i) => {
            let bukvaRect = bukva.getBoundingClientRect();
            let bukvaX = bukvaRect.left + bukvaRect.width / 2;
            let bukvaY = bukvaRect.top + bukvaRect.height / 2;
            let dist = Math.hypot(swordX - bukvaX, swordY - bukvaY);
            let parentBlock = bukva.closest(".text_2_left, .text_2_right");

            if (dist < maxDist) {
                let power = (maxDist - dist) / maxDist;
                let moveX = (-150 - Math.random() * 300) * power;
                let moveY = (parentBlock.classList.contains("text_2_right") ? -1 : 1) * (50 + Math.random() * 200) * power;
                let rotate = (-30 + Math.random() * 60) * power;

                bukva.style.transition = "transform 0.3s ease-out";
                bukva.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${rotate}deg)`;
            }

            if (!isEnter && activeSwords === 0) {
                setTimeout(() => {
                    bukva.style.transition = "transform 4.5s cubic-bezier(0.2, 0.8, 0.4, 1)";
                    bukva.style.transform = "translate(0, 0) rotate(0)";
                }, i * 10);
            }
        });
    }

    // слова на розовом экране
    document.querySelectorAll(".sword_svg").forEach(sword => {
        sword.addEventListener("mouseenter", () => animateBukvy(sword, true));
        sword.addEventListener("mouseleave", () => animateBukvy(sword, false));
    });

    let words = [
        "ВПУСТИТЬ СВЕТ", "ЧУВСТВОВАТЬ", "ЛЮБИТЬ", "ОТКРЫТЬСЯ МИРУ", "СТАТЬ МЯГЧЕ",
        "ПРИКОСНУТЬСЯ", "ОТТАЯТЬ", "ДОВЕРИТЬСЯ"
    ];

    document.querySelectorAll(".word").forEach(word => {
        word.addEventListener("click", () => {
            word.style.animation = "fadeOutBlur 1.5s forwards";

            setTimeout(() => {
                word.textContent = words.shift();
                words.push(word.textContent);
                word.style.animation = "fadeInClear 1.5s forwards";
            }, 1500);
        });
    });

    function updateImage() {
        let image = document.querySelector('.knight_light img');
        if (window.innerWidth < 1026) {
            image.src = '../images/light_adaptive.gif';  
        } else {
            image.src = '../images/light.GIF';  
        }
    }

    window.addEventListener('resize', updateImage);
    updateImage();

    // кулак-ладонь
    let closed = document.querySelector(".hand.closed");
    let open = document.querySelector(".hand.open");

    let clickHand = document.querySelector(".hand_closed .hand_closed_svg");
    let clickHandBack = document.querySelector(".hand_open .hand_open_svg");

    let ostro1 = document.querySelector(".ostro_1");
    let ostro2 = document.querySelector(".ostro_2");
    let ostro3 = document.querySelector(".ostro_3");
    let neOstro = document.querySelector(".ne_ostro_1");

    neOstro.style.opacity = "0";
    neOstro.style.pointerEvents = "none";

    function toggleHand() {
        let isClosedVisible = closed.style.opacity === "1" || closed.style.opacity === "";

        ostro1.style.opacity = isClosedVisible ? "0" : "1";
        ostro1.style.pointerEvents = isClosedVisible ? "none" : "auto";

        ostro2.style.opacity = isClosedVisible ? "0" : "1";
        ostro2.style.pointerEvents = isClosedVisible ? "none" : "auto";

        ostro3.style.opacity = isClosedVisible ? "0" : "1";
        ostro3.style.pointerEvents = isClosedVisible ? "none" : "auto";

        neOstro.style.opacity = isClosedVisible ? "1" : "0";
        neOstro.style.pointerEvents = isClosedVisible ? "auto" : "none";

        closed.style.opacity = isClosedVisible ? "0" : "1";
        closed.style.pointerEvents = isClosedVisible ? "none" : "auto";
        open.style.opacity = isClosedVisible ? "1" : "0";
        open.style.pointerEvents = isClosedVisible ? "auto" : "none";
    }

    clickHand.addEventListener("click", toggleHand);
    clickHandBack.addEventListener("click", toggleHand);

    let block_3_words = document.querySelectorAll(".block_3_text p");

    block_3_words.forEach((block_3_word) => {
        block_3_word.addEventListener("click", () => {
            block_3_word.classList.add("clicked");
            setTimeout(() => {
                block_3_word.classList.remove("clicked");
            }, 400);
        });
    });

    let shinewords = document.querySelectorAll(".block_3_text.white p");

    shinewords.forEach((word) => {
        word.addEventListener("click", () => {
            if (word.classList.contains("shine")) {
                word.classList.remove("shine");
            } else {
                word.classList.add("shine");
            }
        });
    });
});